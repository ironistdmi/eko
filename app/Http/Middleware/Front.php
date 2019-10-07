<?php

namespace App\Http\Middleware;

use View;
use Auth;
use Closure;
use App\Models\Page;
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
		if( ! $request->ajax() ){
			//View::share('pages', Page::select('title','slug','position')->published()->visibilityOf(Page::VISIBILITY_PUBLIC)->get());
		}
        return $next($request);
    }
}
