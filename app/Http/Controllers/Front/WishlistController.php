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
     * @param  \App\Models\Wishlist  $wishlist
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request, Product $item)
    {
        $wishlist = new Wishlist;
        $wishlist->updateOrCreate([
            'product_id'  => $item->id,
            'customer_id' => $request->user()->id
        ]);

        return redirect()->route('account.wishlist');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wishlist  $wishlist
     * @return \Illuminate\Http\Response
     */
    public function remove(Request $request, Wishlist $wishlist)
    {
        $this->authorize('remove', $wishlist);

        $wishlist->forceDelete();

        return redirect()->route('account.wishlist');
    }
}
