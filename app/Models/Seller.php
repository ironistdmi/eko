<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    protected $table = 'sellers';
    
    protected $fillable = ['user_id','read_announcements_at','shop_id'];
    
    public function shop()
    {
        return $this->belongsTo('App\Models\Shop');
    }
    
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
