<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'images';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                    'name',
                    'path',
                    'extension',
                    'size',
                    'order',
                    'featured',
                    'imageable_id',
                    'imageable_type',
                ];

    /**
     * Get all of the owning imagetrait models.
     */
	public function imagetrait()
    {
        return $this->morphTo();
    }

    public function setFeatureAttribute($value)
    {
        if ((bool) $value) $this->attributes['featured'] = $value;
        else $this->attributes['featured'] = null;
    }

    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }
}
