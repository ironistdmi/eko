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

Route::get('image/{path}', 'ImageController@show')->where('path', '.*')->name('image.show');

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
	
	//Route::get('product/{slug}/review', 'ReviewController@review_form')->name('product.review');
	Route::post('product/{slug}/review', 'ReviewController@create_review_product')->name('createproduct.review');
	Route::post('shop/{slug}/review', 'ReviewController@create_review_shop')->name('createshop.review');
	
	Route::post('messages', function(Illuminate\Http\Request $request) {
		App\Events\PrivateChat::dispatch($request->all());
	});
	Route::get('/dialog/{dialog}', function(App\Models\Dialog $dialog) {
		return view('chat', ['dialog' => $dialog]);		
	});
	Route::get('/dialog/', 'chatController@index')->name('dialog');
});

Route::auth();
Route::get('/register/', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::get('/verify/{token?}', 'Auth\RegisterController@verify')->name('verify');


Route::group(['middleware' => ['auth', 'back'], 'namespace' => 'Back', 'prefix' => 'account'], function()
{

	Route::get('/', 'AccountController@index')->name('account');
	Route::get('/products', 'AccountController@products')->name('account.products');
    Route::get('/reviews', 'AccountController@reviews')->name('account.reviews');
    Route::get('/wishlist', 'AccountController@wishlist')->name('account.wishlist');
	Route::get('/edit', 'AccountController@editProfileForm')->name('profile.edit');
    Route::post('/edit', 'AccountController@storeProfileForm')->name('profile.edit.submit');
	
	Route::get('product/create', 'ProductController@create')->name('product.add');
	Route::post('product/store', 'ProductController@store')->name('product.add.submit');	
	Route::get('product/store/publish', 'ProductController@publish')->name('product.add.next');
	Route::get('product/{product}/unpublish', 'ProductController@store_unpublish')->name('product.unpublish');
    Route::post('product/store/publish/submit', 'ProductController@store_publish')->name('product.add.next.submit');
	Route::get('product/{product}/edit', 'ProductController@edit')->name('product.edit');
	Route::post('product/{product}/update', 'ProductController@update')->name('product.update');
	Route::get('product/{product}/destroy', 'ProductController@destroy')->name('product.destroy');
	
	Route::delete('product/{product}/trash', 'ProductController@trash')->name('product.trash');
	Route::get('product/{product}/restore', 'ProductController@restore')->name('product.restore');
});

Route::group(['middleware' => ['auth']], function(){
	Route::get('/logout' , 'Auth\LoginController@logout');	
	
    Route::get('/register/seller', 'Auth\RegisterSellerController@showForm')->name('register.seller');
    Route::post('/register/seller/submit', 'Auth\RegisterSellerController@store')->name('register.seller.submit');
	
	Route::get('wishlist/{item}', 'Front\WishlistController@add')->name('wishlist.add');
	Route::delete('wishlist/{wishlist}', 'Front\WishlistController@remove')->name('wishlist.remove');
	
	Route::get('download/{image}', 'ImageController@download')->name('image.download');
	Route::post('delete/{image}', 'ImageController@delete')->name('image.delete');
	Route::post('upload', 'ImageController@upload')->name('image.upload');
	Route::post('image/sort', 'ImageController@sort')->name('image.sort');
});