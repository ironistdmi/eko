<?php

namespace App\Http\Controllers\Front;

use DB;
use Session;
use Carbon\Carbon;
use App\Models\Page;
use App\Models\Shop;
use App\Models\Product;
use App\Models\Category;
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
		
        return view('index', compact('popular_nearby'));
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
        $category = Category::where('slug', $slug)->active()->firstOrFail();

        return view('category', compact('category'));
    }

    /**
     * Open product page
     *
     * @param  slug  $slug
     * @return \Illuminate\Http\Response
     */
    public function product($slug)
    {
        return view('product');
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
