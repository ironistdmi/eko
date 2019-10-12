<?php

namespace App\Models;

use Hash;
use Laravel\Passport\HasApiTokens;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Mail;

class User extends Authenticatable
{
    use SoftDeletes, HasApiTokens, Notifiable;

    const STATUS_INACTIVE = 0;
    const STATUS_ACTIVE = 1;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'verification_token',
    ];


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'dob'           => 'date',
        'deleted_at'    => 'datetime',
        'last_visited_at' => 'datetime',
        'read_announcements_at' => 'datetime',
        'active'        => 'boolean',
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
    protected static $logName = 'user';

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
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'shop_id',
        'role_id',
        'name',
        'nice_name',
        'email',
        'password',
        'type',
        'dob',
        'description',
        'sex',
        'active',
        'last_visited_at',
        'last_visited_from',
        'read_announcements_at',
        'remember_token',
        'verification_token',
    ];

    /**
     * Get the dashboard of the user.
     */
    public function dashboard()
    {
        return $this->hasOne(Dashboard::class, 'user_id');
    }

    /**
     * Get all of the country for the country.
     */
    public function country()
    {
        return $this->hasManyThrough(Country::class, Address::class, 'addressable_id', 'country_name');
    }

    /**
     * Get the Roles associated with the user.
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * Get the shop associated with the user.
     */
    public function shop()
    {
        return $this->belongsTo(Shop::class)->withDefault();
    }

    /**
     * Get the shops the user own.
     */
    public function owns()
    {
        return $this->hasOne(Shop::class, 'owner_id')->withDefault();
    }

    /**
     * Get the address the user.
     */
    public function address()
	{
		return $this->belongsTo(Address::class);
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
     * Get role list for the user.
     *
     * @return array
     */
    public function getRoleListAttribute()
    {
        if (count($this->roles)) return $this->roles->pluck('id')->toArray();
    }

    /**
     * Set password for the user.
     *
     * @return array
     */
    public function setPasswordAttribute($password)
    {
        if(Hash::needsRehash($password))
            $this->attributes['password'] = bcrypt($password);
        else
            $this->attributes['password'] = $password;
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
     * Get merchant id for the user.
     *
     * @return mix
     */
    public function merchantId()
    {
        return $this->shop_id;
    }

    /**
     * Check if the user is the super admin
     *
     * @return bool
     */
    public function isSuperAdmin()
    {
        return $this->role_id == Role::SUPER_ADMIN;
    }

    /**
     * Check if the user is the super admin or admin
     *
     * @return bool
     */
    public function isAdmin()
    {
        return $this->isSuperAdmin() || $this->role_id == Role::ADMIN;
    }

    /**
     * Check if the user is from main platform or not
     *
     * @return bool
     */
    public function isFromPlatform()
    {
        return ! $this->isMerchant() && ! $this->merchantId();
    }

    /**
     * Check if the user is from a Merchant or not
     *
     * @return bool
     */
    public function isFromMerchant()
    {
        return $this->isMerchant() || $this->merchantId();
    }

    /**
     * Check if the user is a Merchant
     *
     * @return bool
     */
    public function isMerchant()
    {
        return $this->role_id == Role::MERCHANT;
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
     * Check if access level the user
     *
     * @return bool
     */
    public function accessLevel()
    {
        return $this->role->level ? $this->role->level + 1 : Null;
    }

    /**
     * Activities for the loggable model
     *
     * @return [type] [description]
     */
    public function activities()
    {
        return $this->activity()->orderBy('created_at', 'desc')->get();
    }

    /**
     * Check if the user is the super admin
     *
     * @return bool
     */
    public function scopeNotSuperAdmin($query)
    {
        return $query->where('role_id', '!=', Role::SUPER_ADMIN);
    }

    /**
     * Scope a query to only include records from the users shop.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeFromPlatform($query)
    {
        return $query->where('role_id', '!=', Role::MERCHANT)->where('shop_id', Null);
    }

    /**
     * Scope a query to only include records from the users shop.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeMerchant($query)
    {
        return $query->where('role_id', Role::MERCHANT);
    }

    /**
     * Scope a query to only include records with lower privilege than the logged in user.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLevel($query)
    {
        return $query->whereHas('role', function($q)
        {
            if (Auth::user()->role->level)
                return $q->where('level', '>', Auth::user()->role->level)->orWhere('level', Null);

            return $q->whereNull('level');
        });
    }

    /**
     * Scope a query to also include merchant records.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeWithMerchant($query)
    {
        return $query->where('role_id', Role::MERCHANT)->orWhere('shop_id', Auth::user()->merchantId());
    }

    /**
     * Scope a query to only include records from the users shop.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeMine($query)
    {
        return $query->where('shop_id', Auth::user()->merchantId());
    }
    
    public function sendPasswordResetNotification($token)
    {
 		Mail::send('emails.reset_password', ['user' => $user], function ($m) use ($user) {
            $m->from('hello@app.com', 'Your Application');
            $m->to($user->email, $user->name)->subject('Your Password Reset!');
        });
    }
}
