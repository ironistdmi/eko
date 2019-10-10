<?php

namespace App\Http\Requests;

use App\Models\Customer;
use App\Http\Requests\Request;

class ProductReviewCreateRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if ($this->user() instanceof Customer) {
            return $this->route('product')->customer_id == $this->user()->id;
        }
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
           'items.*.rating' => 'required|integer|between:1,5',
           'items.*.comment' => 'nullable|string|min:10|max:250',
        ];
    }

}
