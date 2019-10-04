<?php

namespace App\Http\Controllers\Front;

use Carbon\Carbon;
use App\Models\Category;
use App\Models\Product;
use App\Helpers\CatalogHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {

        return view('search_results');
    }
}
