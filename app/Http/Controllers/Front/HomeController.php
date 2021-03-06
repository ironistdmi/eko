<?php

namespace App\Http\Controllers\Front;

use DB;
use Session;
use Carbon\Carbon;
use App\Models\Page;
use App\Models\Shop;
use App\Models\Product;
use App\Models\Category;
use App\Models\Currency;
use App\Helpers\CatalogHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    /**
     * Show the First page Landing.
     *
     * @return Response
     */
    public function index()
    {
		$popular_nearby = Product::with('featuredImage')->latest()->limit(30)->get();
		$categories = Category::get();
        return view('index', compact('popular_nearby', 'categories'));
    }

    /**
     * Display static resource.
     *
     * @param  str  $slug
     * @return \Illuminate\Http\Response
     */
    public function page($slug)
    {
        $page = Page::where('slug', $slug)->firstOrFail();

        return view('page', compact('page'));
    }

    /**
     * Display the category list page.
     * @return \Illuminate\Http\Response
     */
    public function categories()
    {
        return view('categories');
    }

    /**
     * Browse category based products
     *
     * @param  slug  $slug
     * @return \Illuminate\Http\Response
     */
    public function browseCategory(Request $request, $slug, $sortby = Null)
    {
		$currencies = Currency::all();
		$categories = Category::all();
		
        $category = Category::where('slug', $slug)->active()->firstOrFail();
		
		$all_products = $category->listings();
		
		$priceRange['min'] = floor($all_products->min('price'));
        $priceRange['max'] = ceil($all_products->max('price'));
		
        $products = $all_products->filter($request->all())
        ->with(['reviews:rating,node_id,node_type', 'images:path,imagetrait_id,imagetrait_type'])
        ->paginate(20)->appends($request->except('page'));
		
        return view('category', compact('category', 'products', 'priceRange', 'currencies', 'categories'));
    }

    /**
     * Open product page
     *
     * @param  slug  $slug
     * @return \Illuminate\Http\Response
     */
    public function product($slug)
    {
		$item = Product::where('slug', $slug)->withCount('reviews')->firstOrFail();
        return view('product', compact('item'));
    }

    /**
     * Open product quick review modal
     *
     * @param  slug  $slug
     * @return \Illuminate\Http\Response
     */
    public function quickViewItem($slug)
    {
        return view('modals.quickview')->render();
    }

    /**
     * Offers page
     *
     * @param  slug  $slug
     * @return \Illuminate\Http\Response
     */
    public function offers($slug)
    {
        return view('offers');
    }

    /**
     * Open shop page
     *
     * @param  slug  $slug
     * @return \Illuminate\Http\Response
     */
    public function shop($slug)
    {
        $shop = Shop::where('slug', $slug)->active()->firstOrFail();
        return view('shop', compact('shop'));
    }

    /**
     * Change Language
     *
     * @param  string $lang
     *
     * @return \Illuminate\Http\Response
     */
    public function changeLanguage($lang = 'en')
    {
        Session::put('locale', $lang);

        return redirect()->back();
    }
}
