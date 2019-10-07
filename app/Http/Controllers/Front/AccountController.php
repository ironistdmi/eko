<?php

namespace App\Http\Controllers\Front;

use Auth;
use View;
use App\Models\Wishlist;
use App\Models\Customer;
use App\Helpers\CatalogHelper;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\CustomerAvatarUpdateRequest;
use App\Http\Requests\CustomerPasswordUpdateRequest;

class AccountController extends Controller
{
    /**
     * Show the customer dashboard.
     *
     * @return Response
     */
    public function index($tab = 'dashboard')
    {

        if( ! method_exists($this, $tab) ) abort(404);

        $tab = $this->$tab();

        return view('dashboard', compact('tab', $tab));
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
	
	public function chat() {
		return view('chat');
	}

    /**
     * Load dashboard content
     * @return mix
     */
    private function dashboard()
    {
        return Customer::where('id', Auth::guard('customer')->user()->id)
            ->first();
    }

    /**
     * Return wishlist
     * @return collection
     */
    private function wishlist()
    {
        return Wishlist::mine()->paginate(7);
    }

    /**
     * Return account info
     * @return collection
     */
    private function account()
    {
        View::share('countries', CatalogHelper::countries());

        return Auth::guard('customer')->user();
    }
}
