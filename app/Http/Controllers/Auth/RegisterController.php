<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Notifications\Auth\SendVerificationEmail as EmailVerificationNotification;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/customer/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:customer')->except('verify');
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('customer');
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        return view('register');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => 'required|string|email|max:255|unique:customers',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        if(Auth::guard('web')->check())
            return redirect()->back()->with('error', trans('messages.loogedin_as_admin'));

        $this->validator($request->all())->validate();

        $customer = $this->create($request->all());

        $this->guard('customer')->login($customer);

        return redirect($this->redirectTo());
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Customer
     */
    protected function create(array $data)
    {
        return Customer::create([
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'verification_token' => Str::random(40)
        ]);
    }

    /**
     * Verify the User the given token.
     *
     * @param  string|null  $token
     * @return \Illuminate\Http\Response
     */
    public function verify($token = null)
    {
        if(!$token){
            $customer = Auth::guard('customer')->user();

            $customer->verification_token = Str::random(40);

            if($customer->save()){
                $customer->notify(new EmailVerificationNotification($customer));

                return redirect()->back()->with('success', trans('auth.verification_link_sent'));
            }

            return redirect()->back()->with('success', trans('auth.verification_link_sent'));
        }

        try{
            $customer = Customer::where('verification_token', $token)->firstOrFail();

            $customer->verification_token = Null;

            if($customer->save())
                return redirect()->route('account', 'account')->with('success', trans('auth.verification_successful'));

        } catch(\Exception $e){
            return redirect()->route('account', 'account')->with('error', trans('auth.verification_failed'));
        }
    }

}
