<?php

namespace App\Http\Middleware;

use View;
use Auth;
use Closure;
use App\Helpers\CatalogHelper;
use Illuminate\Support\Facades\Config;

class Front
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
