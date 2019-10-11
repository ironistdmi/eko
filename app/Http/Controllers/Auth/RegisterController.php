<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Notifications\Auth\SendVerificationEmail;
use Illuminate\Support\Str;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Mail;
use App\Mail\Auth\VerifyMail;

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
    protected $redirectTo = '/login';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {

    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        return view('auth.register');
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
            'email' => 'required|string|email|max:255|unique:users',
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
            return redirect()->back()->withErrors(['errors'  => trans('messages.loogedin_as_admin')]);

        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));
        
        return redirect()->route('login')
               ->with('success', 'Check your email and click on the link to verify.');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Customer
     */
    protected function create(array $data)
    {
        $user =  User::create([
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'type' => $data['client-type'],
            'verification_token' => Str::random(40),
            'verify' => User::STATUS_INACTIVE,                
        ]);
		Mail::to($user->email)->send(new VerifyMail($user));

        return $user;
    }

    /**
     * Verify User by given token.
     *
     * @param  string|null  $token
     * @return \Illuminate\Http\Response
     */
    public function verify($token = null)
    {
        if (!$user = User::where('verification_token', $token)->first()) {
            return redirect()->route('login')
                ->with('error', 'Sorry your link cannot be identified.');
        }

        $user->verify = User::STATUS_ACTIVE;
        $user->verification_token = null;
		$user->email_verified_at = \Carbon\Carbon::now();
        $user->save();

        return redirect()->route('login')
            ->with('success', 'Your e-mail is verified. You can now login.');
    }

}
