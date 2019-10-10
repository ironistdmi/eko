<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{

   /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'reviews';
	
	    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
		'customer_id',
		'rating',
		'comment',
		'node_id',
		'node_type',
		'moderated'
	];
	
    /**
     * Get the customer associated with the model.
    */
    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Set the rating for the model.
     */
    public function setRatingAttribute($value)
    {
        $this->attributes['rating'] = $value ? (int) $value : 1;
    }
	
    /**
     * Scope a query to only include records from the users shop.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeMine($query)
    {
        //return $query->where('shop_id', Auth::user()->merchantId());
    }
}
