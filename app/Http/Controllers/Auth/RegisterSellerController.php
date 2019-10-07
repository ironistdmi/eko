<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Country;

class RegisterSellerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function showForm(User $user)
    {
        $countries = Country::orderBy('full_name')->get();
        return view('auth.register_seller',compact('countries'));
    }
    
    public function store(Request $request){
        echo '<pre>';
        var_dump($request->all());
        echo '</pre>';
        exit;
    }
}
