<?php

namespace App\Http\Controllers\Front;

use App\Models\Wishlist;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WishlistController extends Controller
{
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Wishlist  $wishlist
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request, Product $item)
    {
        $wishlist = new Wishlist;
        $wishlist->updateOrCreate([
            'product_id'   =>  $item->id,
            'customer_id' => $request->user()->id
        ]);

        return back()->with('success',  trans('notify.item_added_to_wishlist'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Wishlist  $wishlist
     * @return \Illuminate\Http\Response
     */
    public function remove(Request $request, Wishlist $wishlist)
    {
        $this->authorize('remove', $wishlist);

        $wishlist->forceDelete();

        return back()->with('success',  trans('notify.item_removed_from_wishlist'));
    }
}
