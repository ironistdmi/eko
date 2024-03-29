<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
    use SoftDeletes;

    const VISIBILITY_PUBLIC    = 1;         //Default
    const VISIBILITY_MERCHANT  = 2;

    const PAGE_ABOUT_US             = 'about-us';                   //About us page
    const PAGE_CONTACT_US           = 'contact-us';                 //Contact us page
    const PAGE_PRIVACY_POLICY       = 'privacy-policy';             //The privacy policy page
    const PAGE_TNC_FOR_CUSTOMER     = 'terms-of-use-customer';      //Terms and condiotion page for customers
    const PAGE_TNC_FOR_MERCHANT     = 'terms-of-use-merchant';      //Terms and condiotion page for merchants
    const PAGE_RETURN_AND_REFUND    = 'return-and-refund-policy';    //Return and refund policy page

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pages';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['published_at', 'deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                    'shop_id',
                    'author_id',
                    'title',
                    'slug',
                    'content',
                    'published_at',
                    'position',
                    'visibility',
                ];

    /**
     * Get the author for the refund.
     */
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * Set the published_at for the model.
     */
    public function setPublishedAtAttribute($value)
    {
        $this->attributes['published_at'] = $value ? date("Y-m-d H:i:s", strtotime($value)) : null;
        // if($value) $this->attributes['published_at'] = Carbon::createFromFormat('Y-m-d h:i a', $value);
    }

    /**
     * Scope a query to only include published blogs.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at')->where('published_at', '<', Carbon::now());
    }

    /**
     * Scope a query to only include records that have the given visibility.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeVisibility($query, $visibility)
    {
        return $query->where('visibility', $visibility);
    }

}
