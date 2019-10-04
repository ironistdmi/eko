<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class ReviewResource extends Resource
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
            'node_id' => 0,
            'user_id' => 0,
            'customer_id' => 0,
            'content' => $this->content,
            'approved' => $this->approved
        ];
    }
}
