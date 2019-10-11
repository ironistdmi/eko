<?php

namespace App\Http\Controllers\Front;

use App\Models\Product;
use App\Models\Category;
use App\Models\Image;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function addProductForm(Request $request)
    {
        $categories = \App\Models\Category::orderBy('name')->get();
        $currencies = DB::table('currencies')->orderBy('priority')->get();        
        if(isset($request->repeat)) {
            $product = Product::withTrashed()->find($request->repeat);
            $data['repeat'] = $request->repeat;
            $data['name'] = $product->name;
            $data['short_desc'] = $product->short_desc;
            $data['description'] = $product->description;
            $data['price'] = $product->price;
            return view('dashboard.addproduct',compact('categories','currencies','data'));
        }else    
        return view('dashboard.addproduct',compact('categories','currencies'));
    }
    
    public function storeForm(Request $request)
    {
        $data = $request->all();
        $user = auth()->user();
        $seller = $user->seller;
        $shop = $seller->shop;
        $repeat = $data['repeat'];
       
        $p['name'] = empty($data['name'])?'':$data['name'];
        $p['short_desc'] = empty($data['short_desc'])?'':$data['short_desc'];
        $p['slug'] = Str::slug($p['name'],'_') . time();
        $p['description'] = empty($data['description'])?'':$data['description'];
        $p['price'] = empty($data['price'])?0:$data['price'];
        $p['unit'] = empty($data['unit'])?'Kg.':$data['unit'];
        $p['currency_id'] = empty($data['currency_id'])?323:$data['currency_id'];
        $p['shop_id'] = $shop->id;
        $category = empty($data['category_id'])?0:$data['category_id'];
        $tags = empty($data['tags'])?[]:explode(',',$data['tags']);

        if($repeat){
            $product = Product::withTrashed()->where('id',$repeat)->first();
            Product::withTrashed()->where('id',$repeat)->update($p);
            DB::table('category_product')
                ->where('product_id',$product->id)->delete();
            DB::table('category_product')
            ->insert(['category_id'=>$category, 'product_id'=>$product->id]);
            $images = DB::table('images')->where('imageable_id', $product->id)->get();
            foreach($images as $item){
                \Storage::delete('images7/'.$item->name.'.'.$item->extension);
            }            
        }else{
            $product = Product::create($p);
            $data['repeat'] = $product->id;
            DB::table('category_product')
                ->insert(['category_id'=>$category, 'product_id'=>$product->id]);
            DB::table('images')->where('imageable_id', $product->id)->delete();
        }
        foreach ($request->images as $img) {
            $filename = $img->store('images'.$request->user()->id);
            $name = explode('/',$filename);
            $name = explode('.',$name[1]);
            $ext = $name[1];
            $name = $name[0];            
            DB::table('images')->insert([
                                    [
                                        'name' => $name,
                                        'path' => "storage/".$filename,
                                        'extension' => $ext,
                                        'size' => 0,
                                        'imageable_id' => $product->id,
                                        'imageable_type' => 'Product',
                                        'created_at' => Carbon::Now(),
                                        'updated_at' => Carbon::Now(),
                                    ]
                        ]); 
        }
        
        foreach($tags as $tag){
            DB::table('tags')->insert(['name' => $tag]);
        }
        $product->save();
        $product->delete();

        return redirect()->route('product.add.next');
    }
    
    public function addNextProductForm()
    {
        $user = auth()->user();
        $seller = $user->seller;
        $shop = $seller->shop;

        $product = Product::withTrashed()->where('shop_id',$shop->id)->orderBy('id','desc')->first();
        $currency = DB::table('currencies')->find($product->currency_id);
        $iso_code = $currency->iso_code;
        $categories = \App\Models\Category::orderBy('name')->get();
        $currencies = DB::table('currencies')->orderBy('priority')->get();
        return view('dashboard.addproduct_next',compact('product','iso_code'));
    }
    
    public function storeNextForm(Request $request)
    {
        $product = Product::withTrashed()->find($request->product);
        $product->withTrashed()->restore();
        return redirect()->route('account');
    }
}
