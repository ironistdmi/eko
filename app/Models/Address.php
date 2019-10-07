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

class Address extends Model
{
    protected $table = 'addresses';
    
    public function user()
   {
    return $this->hasOne('App\MOdels\User');
   }
}

