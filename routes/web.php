<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


//Front Route
Route::group(['middleware' => ['front'], 'namespace' => 'Front'], function() {

		Route::get('/clear-cache', function() {
			Artisan::call('config:clear');
			Artisan::call('cache:clear');
			Artisan::call('route:clear');
			Artisan::call('view:clear');

			// cache
			Artisan::call('config:cache');
			Artisan::call('route:cache');
				
			return "Cache is cleared";
		});
    // Auth route for customers
//        Route::group(['as' => 'customer.', 'prefix' => 'customer'], function() {
            Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
            Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider')->name('login.social');
            Route::get('login/{provider}/callback', 'Auth\LoginController@handleProviderCallback')->name('login.social.callback');
            Route::post('/login', 'Auth\LoginController@login')->name('login.submit');
            Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

            // Register
            Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
            Route::post('/register', 'Auth\RegisterController@register');
            Route::get('/verify/{token?}', 'Auth\RegisterController@verify')->name('verify');

            // Forgot Password
            Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
            Route::Post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
            Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
            Route::Post('password/reset', 'Auth\ResetPasswordController@reset');
//        });

    Route::get('/', 'HomeController@index')->name('homepage');
    Route::get('page/{page}', 'HomeController@page')->name('page.index');
    Route::get('product/{slug}', 'HomeController@product')->name('show.product');
    Route::get('product/{slug}/quickView', 'HomeController@quickViewItem')->name('quickView.product')->middleware('ajax');
    Route::get('product/{slug}/offers', 'HomeController@offers')->name('show.offers');
    Route::get('categories', 'HomeController@categories')->name('categories');
    Route::get('category/{slug}', 'HomeController@browseCategory')->name('category.browse');
    Route::get('shop/{slug}', 'HomeController@shop')->name('show.store');
    Route::get('search', 'SearchController@search')->name('inCategoriesSearch');
	
	Route::post('newsletter', 'NewsletterController@subscribe')->name('newsletter.subscribe');
	
	Route::get('lang/{lang?}', 'HomeController@changeLang')->name('lang.change');
	
	Route::get('account/{tab?}', 'AccountController@index')->name('account');
	
	Route::get('wishlist/{item}', 'WishlistController@add')->name('wishlist.add');
	Route::delete('wishlist/{wishlist}', 'WishlistController@remove')->name('wishlist.remove');
	
	Route::post('messages', function(Illuminate\Http\Request $request) {
		App\Events\PrivateChat::dispatch($request->all());
	});
	Route::get('/dialog/{dialog}', function(App\Models\Dialog $dialog) {
		return view('chat', ['dialog' => $dialog]);		
	});
});

Route::auth();
Route::get('/register/', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::get('/verify/{token?}', 'Auth\RegisterController@verify')->name('verify');
Route::get('/logout' , 'Auth\LoginController@logout');

Route::get('/register/seller', 'Auth\RegisterSellerController@showForm')->name('register.seller');
Route::post('/register/seller/submit', 'Auth\RegisterSellerController@store')->name('register.seller.submit');
Route::get('/account', function(){
    if(Auth::user()->type == 'seller' && Auth::user()->address == 0){        
        return redirect()->route('register.seller');
    }
});