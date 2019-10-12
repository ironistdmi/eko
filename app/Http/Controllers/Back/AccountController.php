<?php

namespace App\Http\Controllers\Back;

use Auth;
use View;
use App\Models\User;
use App\Models\Product;
use App\Models\Wishlist;
use App\Models\Customer;
use App\Models\Address;
use App\Models\Shop;
use App\Helpers\CatalogHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerAvatarUpdateRequest;
use App\Http\Requests\CustomerPasswordUpdateRequest;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
    /**
     * Show the customer dashboard.
     *
     * @return Response
     */
    public function index()
    {   
        if(Auth::user()->type == 'seller' && Auth::user()->shop_id == 0){
            return redirect()->route('register.seller');
        }
		
		$user = User::where('id', Auth::user()->id)->first();
		$products = Product::mine()->paginate(10);

        return view('dashboard.profile', compact('user', 'products'));
    }
	
		
	public function chat() {
		return view('chat');
	}

    /**
     * Return wishlist
     * @return collection
     */
    public function wishlist()
    {
        $products = Wishlist::mine()->paginate(7);
		return view('dashboard.wishlist', compact('products'));
    }
	
    /**
     * Return product
     * @return collection
     */
    public function products()
    {
		$products = Product::mine()->paginate(10);
		$trashed = Product::mine()->onlyTrashed()->with('categories')->get();
		return view('dashboard.products', compact('products', 'trashed'));
    }	
    /**
     * Return product
     * @return collection
     */
    public function reviews()
    {
		$reviews = Review::mine()->paginate(10);
		return view('dashboard.wishlist', compact('reviews'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Auth::guard('customer')->user()->update($request->all());

        return redirect()->route('account', 'account#settings')->with('success', trans('notify.info_updated'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function password_update(CustomerPasswordUpdateRequest $request)
    {
        Auth::guard('customer')->user()->update($request->all());

        return redirect()->route('account', 'account#settings')->with('success', trans('notify.info_updated'));
    }

    public function avatar(CustomerAvatarUpdateRequest $request)
    {
        Auth::guard('customer')->user()->deleteImage();

        Auth::guard('customer')->user()->saveImage($request->file('avatar'));

        return redirect()->route('account', 'account#settings')->with('success', trans('notify.info_updated'));
    }

    public function delete_avatar(Request $request)
    {
        Auth::guard('customer')->user()->deleteImage();

        return redirect()->route('account', 'account#settings')->with('success', trans('notify.info_deleted'));
    }
    
    public function editProfileForm(User $user)
    {
        $countries = CatalogHelper::countries();
        $user = User::find(auth()->user()->id);
        $shop = Shop::where('id',$user->shop_id)->firstOrFail();
        $address = $shop->address;
        $phone = explode('#',$address->phone);
        $address->phone_code = $phone[0];
        $address->phone = $phone[1];
        return view('dashboard.settings',compact('countries','user','address','shop'));
    }
    public function storeProfileForm(Request $request)
    {
        $user = User::find(auth()->user()->id);
        $address = $shop->address;
        $shop = Shop::where('id',$user->shop_id)->firstOrFail();
                
        $user->name = empty($request->name)?'':$request->name;
      
        $shop->email = empty($request->email)?'':$request->email;
        $shop->name = empty($request->store_name)?'':$request->store_name;
        $shop->description = empty($request->description)?'':$request->description;
        $shop->to_chat = empty($request->to_chat)?0:$request->to_chat;
        $shop->to_call = empty($request->to_call)?0:$request->to_call;
        $shop->bio = empty($request->bio)?0:$request->bio;
        
        $address->city = empty($request->city)?'':$request->city;
        $address->country_id = empty($request->country_id)?'':$request->country_id;
        $address->address_line_1 = empty($request->address_line_1)?'':$request->address_line_1;
        $address->address_line_2 = empty($request->address_line_2)?'':$request->address_line_2;
        $phone = $request->input('phone_code') . '#' . $request->input('phone');
        $address->phone = $phone;

        $user->save();
        $shop->save();
        $address->save();
        
        return response()->json(array('success'=>true),200);
    }
}
