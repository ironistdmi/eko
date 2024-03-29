<?php

namespace App\Models;

use Hash;

use Laravel\Scout\Searchable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\Auth\CustomerResetPasswordNotification;

class Customer extends Authenticatable
{

    use SoftDeletes, HasApiTokens, Notifiable, Searchable;

   /**
     * The guard used by the model.
     *
     * @var string
     */
    protected $guard = 'customer';

   /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'customers';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'verification_token'
    ];

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'deleted_at',
        'last_visited_at'
    ];

    /**
     * The attributes that should be casted to boolean types.
     *
     * @var array
     */
    protected $casts = [
        'dob' => 'date',
        'active' => 'boolean',
        'accepts_marketing' => 'boolean'
    ];

    /**
     * The attributes that will be logged on activity logger.
     *
     * @var boolean
     */
    protected static $logFillable = true;

    /**
     * The only attributes that has been changed.
     *
     * @var boolean
     */
    protected static $logOnlyDirty = true;

    /**
     * The name that will be used when log this model. (optional)
     *
     * @var boolean
     */
    protected static $logName = 'customer';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                'name',
                'email',
                'password',
                'dob',
                'sex',
                'description',
                'stripe_id',
                'card_holder_name',
                'card_brand',
                'card_last_four',
                'active',
                'remember_token',
                'verification_token',
                'accepts_marketing',
            ];

    /**
     * Get the value used to index the model.
     *
     * @return mixed
     */
    public function getScoutKey()
    {
        return $this->email;
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        $array = $this->toArray();

        $array['id'] = $this->id;
        $array['name'] = $this->name;
        $array['email'] = $this->email;
        $array['description'] = $this->description;
        $array['dob'] = $this->dob;
        $array['active'] = $this->active;

        return $array;
    }

    /**
     * Route notifications for the mail channel.
     *
     * @return string
     */
    public function routeNotificationForMail()
    {
        return $this->email;
    }

    /**
     * Get all of the country for the country.
     */
    public function country()
    {
        return $this->hasManyThrough(Country::class, Address::class, 'addressable_id', 'country_name');
    }

    /**
     * Get the user wishlists.
     */
    public function wishlists()
    {
        return $this->hasMany(Wishlist::class);
    }

    /**
     * Get dob for the user.
     *
     * @return array
     */
    public function getDobAttribute($dob)
    {
        if($dob)
            return date('Y-m-d', strtotime($dob));
    }

    /**
     * Get name the user.
     *
     * @return mix
     */
    public function getName()
    {
        return $this->nice_name ?: $this->name;
    }

    /**
     * Check if the user is Verified
     *
     * @return bool
     */
    public function isVerified()
    {
        return $this->verification_token == Null;
    }

    /**
     * Setters.
     */
    public function setPasswordAttribute($password)
    {
        if(Hash::needsRehash($password))
            $this->attributes['password'] = bcrypt($password);
        else
            $this->attributes['password'] = $password;
    }
    public function setAcceptsMarketingAttribute($value)
    {
        $this->attributes['accepts_marketing'] = $value ? 1 : null;
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new CustomerResetPasswordNotification($token));
    }

    /**
     * Scope a query to only include active records.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }
}
