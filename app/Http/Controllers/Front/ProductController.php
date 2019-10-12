<?php

namespace App\Http\Controllers\Front;

use App\Models\Product;
use App\Models\Currency;
use App\Models\Category;
use App\Models\Image;
use App\Models\Tag;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CreateProductRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function addProductForm(Request $request)
    {
        $categories = Category::orderBy('name')->get();
        $currencies = DB::table('currencies')->orderBy('priority')->get();        
        if(isset($request->repeat)) {
            $product = Product::withTrashed()->find($request->repeat);
            $data['repeat'] = $request->repeat;
            $data['name'] = $product->name;
            $data['short_descriptionription'] = $product->short_description;
            $data['description'] = $product->description;
            $data['price'] = $product->price;
            return view('dashboard.addproduct',compact('categories','currencies','data'));
        }else    
        return view('dashboard.addproduct',compact('categories','currencies'));
    }
    
    public function storeForm(CreateProductRequest $request)
    {	
        $data = $request->all();
        $user = auth()->user();
        $seller = $user->seller;
        $shop = $seller->shop;
        $repeat = $data['repeat'];
       
        $p['name'] = empty($data['name'])?'':$data['name'];
        $p['short_description'] = empty($data['short_description'])?'':$data['short_description'];
        $p['slug'] = Str::slug($p['name'],'_') . time();
        $p['description'] = empty($data['description'])?'':$data['description'];
        $p['price'] = empty($data['price'])?0:$data['price'];
        $p['unit'] = empty($data['unit'])?'Kg.':$data['unit'];
        $p['currency_id'] = empty($data['currency_id'])?323:$data['currency_id'];
        $p['shop_id'] = $shop->id;
        $category = empty($data['category_id'])?0:$data['category_id'];
        $tags = empty($data['tags'])?[]:explode(',',$data['tags']);

        if($request->input('repeat')){
            $product = Product::withTrashed()->where('id',$repeat)->first();
            Product::withTrashed()->where('id',$repeat)->update($p);
            DB::table('category_product')
                ->where('product_id',$product->id)->delete();
            DB::table('category_product')
            ->insert(['category_id'=>$category, 'product_id'=>$product->id]);
			

        
        foreach($tags as $tag){
            DB::table('tags')->insert(['name' => $tag]);
        }
        $product->save();
        $product->delete();

		return Response::json(['id' => $product->id,'model' => 'Product','redirect' => route('product.add.next')]);
        //return redirect()->route('product.add.next');
    }
    
    public function addNextProductForm()
    {
        $user = auth()->user();
        $seller = $user->seller;
        $shop = $seller->shop;

        $product = Product::withTrashed()->where('shop_id',$shop->id)->orderBy('id','desc')->first();
        $iso_code = Currency::where('id',$product->currency_id)->value('iso_code');

        return view('dashboard.addproduct_next',compact('product','iso_code'));
    }
    
    public function storeNextForm(Request $request)
    {
        $product = Product::withTrashed()->find($request->product);
        $product->withTrashed()->restore();
        return redirect()->route('account');
    }
}
