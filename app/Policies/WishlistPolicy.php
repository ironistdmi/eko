<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Auth\Access\HandlesAuthorization;

class WishlistPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the User can remove the Wishlist.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Wishlist  $wishlist
     * @return bool
     */
    public function remove(User $user, Wishlist $wishlist)
    {
        return $wishlist->customer_id === $user->id;
    }
}