<?php

namespace App\Models;

use Auth;
use App\Models\Currency;
use App\Traits\ImageTrait;
use Laravel\Scout\Searchable;
use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{

	use ImageTrait, Filterable, SoftDeletes;

        protected $softDelete = true;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'products';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
                        'shop_id',
                        'brand',
                        'name',
                        'model_number',
                        'mpn',
                        'gtin',
                        'gtin_type',
                        'description',
                        'price',
                        'origin_country',
                        'slug',
                        'sale_count',
                        'active',
                        'short_description',
                        'currency_id',
                        'unit',
                    ];

    /**
     * Get the value used to index the model.
     *
     * @return mixed
     */
    public function getScoutKey()
    {
        return $this->name;
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
        $array['shop_id'] = $this->shop_id;
        $array['manufacturer_id'] = $this->manufacturer_id;
        $array['name'] = $this->name;
        $array['model_number'] = $this->model_number;
        $array['mpn'] = $this->mpn;
        $array['gtin'] = $this->gtin;
        $array['short_description'] = $this->short_description;
        $array['description'] = $this->description;
        $array['active'] = $this->active;

        return $array;
    }

    /**
     * Overwrited the image method in the imagetrait
     *
     * @return Illuminate\Database\Eloquent\Collection
     */
    public function image()
    {
        return $this->morphOne(\App\Models\Image::class, 'imagetrait')
        ->where(function($q){
            $q->whereNull('featured')->orWhere('featured', 0);
        })->orderBy('order', 'asc');
    }

    /**
     * Get the shop associated with the product.
     */
    public function shop()
    {
        return $this->belongsTo(Shop::class);
    }

    /**
     * Get the categories for the product.
     */
    public function categories()
    {
        return $this->belongsToMany(Category::class)->withTimestamps();
    }

    /**
     * Get the category list for the product.
     *
     * @return array
     */
    public function getCategoryListAttribute()
    {
        if (count($this->categories)) return $this->categories->pluck('id')->toArray();
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

    /**
     * Scope a query to only include active products.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }   

}
