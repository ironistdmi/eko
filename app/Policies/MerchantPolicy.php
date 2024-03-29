<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Merchant;
use App\Helpers\Authorize;
use Illuminate\Auth\Access\HandlesAuthorization;

class MerchantPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view shops.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function index(User $user)
    {
        return (new Authorize($user, 'view_vendor'))->check();
    }

    /**
     * Determine whether the user can view the Shop.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Merchant  $merchant
     * @return mixed
     */
    public function view(User $user, Merchant $merchant)
    {
        return (new Authorize($user, 'view_vendor', $merchant))->check();
    }

    /**
     * Determine whether the user can create Shops.
     *
     * @param  \App\Models\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return (new Authorize($user, 'add_vendor'))->check();
    }

    /**
     * Determine whether the user can update the Shop.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Merchant  $merchant
     * @return mixed
     */
    public function update(User $user, Merchant $merchant)
    {
        return (new Authorize($user, 'edit_vendor', $merchant))->check();
    }

    /**
     * Determine whether the user can delete the Shop.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Merchant  $merchant
     * @return mixed
     */
    public function delete(User $user, Merchant $merchant)
    {
        return (new Authorize($user, 'delete_vendor', $merchant))->check();
    }

    /**
     * Determine whether the user can secreatly login as user.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Merchant  $merchant
     * @return mixed
     */
    public function secretLogin(User $user, Merchant $model)
    {
        return (new Authorize($user, 'login_vendor', $model))->check();
    }
}
