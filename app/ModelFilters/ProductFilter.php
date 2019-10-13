<?php
namespace App\ModelFilters;

use Carbon\Carbon;
use EloquentFilter\ModelFilter;

class ProductFilter extends ModelFilter
{
    /**
    * Related Models that have ModelFilters as well as the method on the ModelFilter
    * As [relationMethod => [input_key1, input_key2]].
    *
    * @var array
    */
    public $relations = [];

    public function rating($rating)
    {
        return $this->whereHas('reviews', function($query) use ($rating) {
            return $query->select('rating')->groupBy('node_id')->havingRaw('AVG(rating) >= ?', [$rating]);
        });
    }

    public function price($price)
    {
    	/*$price = explode('-', $price);

    	return $this->whereBetween('price', [$price[0], $price[1]]);*/
    	return $this->where('price', '>', $price);
    }
    
	public function unit($unit)
    {
    	return $this->where('unit', $unit);
    }    
	
	public function currencies($currencies)
    {
    	return $this->where('currencies', $currencies);
    }

    public function newArraivals($new_arrivals)
    {
        return $this->where('products.created_at', '>', Carbon::now()->subDays(7));
    }

    public function hasOffers($has_offers)
    {
        return $this->hasOffer();
    }

    public function sortBy($sort_by)
    {
        switch ($sort_by) {
            case 'newest':
                return $this->orderBy('products.created_at', 'desc');
            case 'oldest':
                return $this->orderBy('products.created_at', 'asc');
            case 'price_acs':
                return $this->orderBy('products.sale_price', 'asc');
            case 'price_desc':
                return $this->orderBy('products.sale_price', 'desc');
            case 'best_match':
            default:
                return;
        }
	}

    public function condition($condition)
    {
    	return $this->whereIn('condition', array_keys($condition));
    }

    public function brand($brand)
    {
    	return $this->whereIn('brand', array_keys($brand));
    }
}
