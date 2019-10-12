<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UpdateProductRequest extends Request
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
           'category_id' => 'required',
           'name' => 'required|composite_unique:products,name',
           'short_description' => 'required',
           'description' => 'required',
           'active' => 'required',
           'price' => 'nullable|numeric|min:0',
        ];

    }

   /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'category_id.required' => trans('validation.category_id_required'),
        ];
    }
}
