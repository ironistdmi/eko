<?php

namespace App\Http\Controllers\Front;

use App\Models\Product;
use App\Models\Category;
use App\Models\Image;
use Illuminate\Support\Str;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function addProductForm()
    {
        $categories = Category::orderBy('name')->get();
        $currencies = DB::table('currencies')->orderBy('priority')->get();
        return view('dashboard.addproduct',compact('categories','currencies'));
    }
    
    public function storeForm(Request $request)
    {
        $data = $request->all();
        $user = auth()->user();
        $seller = $user->seller;
        $shop = $seller->shop;
        
        $p['name'] = empty($data['name'])?'':$data['name'];
        $p['short_desc'] = empty($data['short_desc'])?'':$data['short_desc'];
        $p['slug'] = Str::slug($p['name'],'_');
        $p['description'] = empty($data['description'])?'':$data['description'];
        $p['price'] = empty($data['price'])?0:$data['price'];
        $p['unit'] = empty($data['unit'])?0:$data['unit'];
        $p['currency_id'] = empty($data['currency_id'])?0:$data['currency_id'];
        $p['shop_id'] = $shop->id;
        $category = empty($data['category_id'])?0:$data['category_id'];
        $tags = empty($data['tags'])?[]:explode(',',$data['tags']);

        $product = Product::create($p);
        
        DB::table('category_product')
            ->insert(['category_id'=>$category, 'product_id'=>$product->id]);
			
		/*if ($request->hasFile('images')){
			$data = [];
			$dir = '/storage/';
			$files = $request->file('images');

        	foreach ($files as $order => $file) {
		        $path = Storage::put($dir, $file);

				$data[] = [
		            'path' => $path,
		            'name' => $file->getClientOriginalName(),
		            'extension' => $file->getClientOriginalExtension(),
		            'size' => $file->getClientSize(),
		            'order' => $order
		        ];
			}

        	$attachable = Product::find($product->id);

			$attachable->images()->createMany($data);
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
        }*/
        
        foreach($tags as $tag){
            DB::table('tags')->insert(['name' => $tag]);
        }
        $product->save();
        $product->delete();
        
		return Response::json(['id' => $product->id,'model' => 'product','redirect' => route('product.add.next')]);
       // return redirect()->route('product.add.next');
    }
    
    public function addNextProductForm()
    {
        $user = auth()->user();
        $seller = $user->seller;
        $shop = $seller->shop;

        $categories = Category::orderBy('name')->get();
        $currencies = DB::table('currencies')->orderBy('priority')->get();
        return view('dashboard.addproduct_next',compact('categories','currencies'));
    }
    
    public function storeNextForm(Request $request)
    {
        
    }
}
