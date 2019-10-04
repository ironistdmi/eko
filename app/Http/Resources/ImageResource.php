<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    protected $size;

    public function size($size = 'full')
    {
        $this->size = $size;
        return $this;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'path' => $this->path,
            'name' => $this->name,
            'extension' => $this->extension,
            'order' => $this->order,
            'featured' => $this->featured,
        ];
    }
}
