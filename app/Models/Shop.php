<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shop extends Model
{

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'shops';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at', 'trial_ends_at'];

   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                    'owner_id',
                    'name',
                    'legal_name',
                    'email',
                    'slug',
                    'description',
                    'external_url',
                    'timezone_id',
                    'current_billing_plan',
                    'stripe_id',
                    'card_holder_name',
                    'card_brand',
                    'card_last_four',
                    'trial_ends_at',
                    'active',
                ];
    public function seller()
   {
       return $this->hasOne('App\Models\Seller');
   }

}
