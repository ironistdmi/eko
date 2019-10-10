<?php

namespace App\Http\Controllers\Front;

use Auth;
use App\Review;
use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\Validations\ShopReviewCreateRequest;
use App\Http\Requests\Validations\ProductReviewCreateRequest;

class ReviewController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create_review_shop(ShopReviewCreateRequest $request, Product $product)
    {
        $review = $product->shop->reviews()->create($request->all());

        return back()->with('success', trans('app.notify.your_review_saved'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create_review_product(ProductReviewCreateRequest $request)
    {
        return back()->with('success', trans('app.notify.your_review_saved'));
    }

}
