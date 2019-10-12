<?php

namespace App\Http\Controllers\Back;

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
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
	/**
     * Show the form for creating a new product.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::orderBy('name')->get();
        $currencies = Currency::orderBy('priority')->get();        
 
        return view('dashboard.product.addproduct',compact('categories','currencies'));
    }
	
	public function store(CreateProductRequest $request) 
	{	
		$model = new Product();
		
		$product = $model->create($request->all());
	
		if ($request->input('category_list')) {
			$product->categories()->sync($request->input('category_list'));
		}
		
		if ($request->input('tag_list')) {
			Tag::syncTags($product, $request->input('tag_list'));
		}
		
		return Response::json(['id' => $product->id,'model' => 'Product','redirect' => route('product.add.next')]);
	}
	
	
    /**
     * Show the form for editing a product resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);
		
		$categories = Category::orderBy('name')->get();
        $currencies = Currency::orderBy('priority')->get(); 
        $preview = $product->previewImages();

        return view('dashboard.product.editproduct', compact('product', 'preview', 'categories','currencies'));
    }
	
	public function update(UpdateProductRequest $request, $id) 
	{	
		$model = new Product();
		
		$product = $model->update($request->all(), $id);
		
		$product->categories()->sync($request->input('category_list', []));
        $product->syncTags($product, $request->input('tag_list', []));

		return response()->json(['id' => $product->id,'model' => 'Product','redirect' => route('account')]);
	}

    
    public function publish()
    {

        $product = Product::withTrashed()->where('shop_id',auth()->user()->shop->id)->orderBy('id','desc')->first();
        $iso_code = Currency::where('id',$product->currency_id)->value('iso_code');

        return view('dashboard.product.addproduct_next',compact('product','iso_code'));
    }
    
    public function store_publish(Request $request)
    {
        $product = Product::find($request->product);
        $product->active = 1;
		$product->save();
        return redirect()->route('account.products');
    }
	
	public function store_unpublish($id) 
	{
		$product = Product::find($id);	
		$product->active = 0;
		$product->save();
		return redirect()->route('account.products');
	}

    /**
     * Trash the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function trash(Request $request, $id)
    {
		Product::findOrFail($id)->delete();
        return redirect()->route('account.products');
    }

    /**
     * Restore the specified resource from soft delete.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore(Request $request, $id)
    {
        Product::onlyTrashed()->findOrFail($id)->restore();

        return redirect()->route('account.products');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
		$product = Product::onlyTrashed()->findOrFail($id);
        $product->detachTags($product->id, 'product');
        $product->flushImages();

        //if($product->hasFeedbacks())
        //    $product->flushFeedbacks();

        $product->forceDelete();

        return back()->with('success',  trans('messages.deleted', ['model' => $this->model]));
    }
}
