<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Product;
use App\Helpers\Authorize;
use Illuminate\Auth\Access\HandlesAuthorization;

class ProductPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view products.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function index(User $user)
    {
        return (new Authorize($user, 'view_product'))->check();
    }

    /**
     * Determine whether the user can view the Product.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Product  $product
     * @return mixed
     */
    public function view(User $user, Product $product)
    {
        return (new Authorize($user, 'view_product', $product))->check();
    }

    /**
     * Determine whether the user can create Products.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorize($user, 'add_product'))->check();
    }

    /**
     * Determine whether the user can update the Product.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Product  $product
     * @return mixed
     */
    public function update(User $user, Product $product)
    {
        return (new Authorize($user, 'edit_product', $product))->check();
    }

    /**
     * Determine whether the user can delete the Product.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Product  $product
     * @return mixed
     */
    public function delete(User $user, Product $product)
    {
        return (new Authorize($user, 'delete_product', $product))->check();
    }
}
