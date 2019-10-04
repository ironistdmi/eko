<?php

namespace App\Helpers;

use Auth;
use Carbon\Carbon;

class CatalogHelper
{

    /**
     * Get country list for form dropdown.
     *
     * @return array
     */
    public static function countries()
    {
        return \DB::table('countries')->orderBy('name', 'asc')->pluck('name', 'id');
    }

}
