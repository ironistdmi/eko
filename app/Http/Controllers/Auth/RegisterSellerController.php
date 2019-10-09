<?php

namespace App\Http\Controllers\Auth;

use Auth;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Country;
use App\Models\Address;
use App\Models\Shop;
use App\Models\Seller;

class RegisterSellerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function showForm(User $user)
    {
        $countries = Country::select('*')->orderBy('name')->get();//echo '<pre>';print_r($countries);exit;
        return view('auth.register_seller',compact('countries'));
    }
    
    public function store(Request $request){
        $data = $request->all();
        $user = User::find(Auth::user()->id);
        $validator = $this->validator($data);
        if ($validator->fails()) {
            return redirect()
                        ->action('Auth\RegisterSellerController@showForm')
                        ->withErrors($validator->errors())
                        ->withInput($data);
        }
        $adr = Address::create(['country_id' => $data['country_id'],
                                'address_line_1' => $data['street'],
                                'address_line_2' => $data['building'],
                                'city' => $data['city'],
                                'phone' => ($data['phone_code'] . '#' . $data['phone'])
                               ]);
        $adr->save();
        
        $user->address_id = $adr->id;
        $user->name = $data['name'];
        $user->save();
        
        $shop = Shop::create(['name' => $data['store_name'],
                              'email' => $user->email,
                              'slug' => Str::slug($data['store_name'],'_')
                            ]);
        $shop->save();
        
        $seller = Seller::create(['user_id' => $user->id,
                                  'shop_id' => $shop->id
                                ]);  
        return redirect()->action('Front\AccountController@index');
    }
    
    private function validator(array $data)
    {
        return Validator::make($data, [
            'store_name' => 'bail|required|string|max:255|min:6|unique:shops,name',
            'name' => 'required|string|max:255|min:6',
            'country_id' => 'required',
            'city' => 'required|string|max:255',
            'street' => 'required|string|max:255',
            'building' => 'required|string|max:255',
            'phone_code' => 'required',
            'phone' => 'required',
        ]);
    }
}
