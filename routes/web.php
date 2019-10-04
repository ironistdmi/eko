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


    // Auth route for customers
        Route::group(['as' => 'customer.', 'prefix' => 'customer'], function() {
            Route::get('/login', 'Auth\LoginController@showLoginForm')->name('login');
            Route::get('login/{provider}', 'Auth\LoginController@redirectToProvider')->name('login.social');
            Route::get('login/{provider}/callback', 'Auth\LoginController@handleProviderCallback')->name('login.social.callback');
            Route::post('/login', 'Auth\LoginController@login')->name('login.submit');
            Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

            // Register
            Route::get('/register', 'Auth\RegisterController@showRegistrationForm')->name('register');
            Route::post('/register', function (Request $request){
                $route = Route::current();
                if ($request->has('type')) {
                    if ($request->input('client-type') == 'seller') {
                        exit('seller');
                    } else if ($request->input('client-type') == 'buyer') {
                        exit('buyer');
                        //return $this->('Auth\RegisterController@register')
                    }
                }

            })->name('register.submit'); //'Auth\RegisterController@register')->name('register.submit');
            Route::get('/verify/{token?}', 'Auth\RegisterController@verify')->name('verify');

            // Forgot Password
            Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
            Route::Post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
            Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
            Route::Post('password/reset', 'Auth\ResetPasswordController@reset');
        });

    Route::get('/', 'HomeController@index')->name('homepage');
    Route::get('page/{page}', 'HomeController@openPage')->name('page.open');
    Route::get('product/{slug}', 'HomeController@product')->name('show.product');
    Route::get('product/{slug}/quickView', 'HomeController@quickViewItem')->name('quickView.product')->middleware('ajax');
    Route::get('product/{slug}/offers', 'HomeController@offers')->name('show.offers');
    Route::get('categories', 'HomeController@categories')->name('categories');
    Route::get('category/{slug}', 'HomeController@browseCategory')->name('category.browse');
    Route::get('shop/{slug}', 'HomeController@shop')->name('show.store');
    Route::get('search', 'SearchController@search')->name('inCategoriesSearch');
});

Route::auth();
Route::get('/register/', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::get('/verify/{token?}', 'Auth\RegisterController@verify')->name('verify');
Route::get('/logout' , 'Auth\LoginController@logout');
