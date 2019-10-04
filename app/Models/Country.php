<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'countries';

    /**
     * Get all of the states for the country.
     */
    public function states()
    {
        return $this->hasMany(State::class);
    }

    /**
     * Get the products for the country.
     */
    public function products()
    {
        return $this->hasMany(Product::class, 'origin_country');
    }

    /**
     * Get all of the users for the country.
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }

    /**
     * Get all of the customers for the country.
     */
    public function customers()
    {
        return $this->hasMany(Customer::class);
    }

    /**
     * Scope a query to only include active countries.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

}
