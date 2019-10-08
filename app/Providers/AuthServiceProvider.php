<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \App\Models\Category::class            => \App\Policies\CategoryPolicy::class,
        \App\Models\Customer::class            => \App\Policies\CustomerPolicy::class,
        \App\Models\Currency::class            => \App\Policies\CurrencyPolicy::class,
        \App\Models\Merchant::class            => \App\Policies\MerchantPolicy::class,
        \App\Models\Page::class                => \App\Policies\PagePolicy::class,
        \App\Models\Permission::class          => \App\Policies\PermissionPolicy::class,
        \App\Models\Product::class             => \App\Policies\ProductPolicy::class,
        \App\Models\Role::class                => \App\Policies\RolePolicy::class,
        \App\Models\Shop::class                => \App\Policies\ShopPolicy::class,
        \App\Models\User::class                => \App\Policies\UserPolicy::class,
        \App\Models\Wishlist::class            => \App\Policies\WishlistPolicy::class,
    ];


    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        Passport::routes();
        //
    }
}
