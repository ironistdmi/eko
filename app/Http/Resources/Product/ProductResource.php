<?php

namespace App\Http\Resources\Product;
use Illuminate\Http\Resources\Json\Resource;

class ProductResource extends Resource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'gtin_type' => $this->gtin_type,
            'gtin' => $this->gtin,
            'description' => $this->description,
            'brand' => $this->manufacturer->name,
            'image' => (new ImageResource($this->featuredImage))->size('small')
        ];
    }
}
