<?php

namespace App\Http\Controllers\Back;

use Auth;
use Request;
use App\Models\User;
use App\Traits\AuthorizeTrait;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    use AuthorizeTrait;

    /**
     * construct
     */
    public function __construct()
    {
        parent::__construct();

        $this->middleware('auth');
    }

    /**
     * Display Dashboard of the logged in users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->isFromPlatform())
            return view('admin.dashboard.platform');

        return view('admin.dashboard.merchant');
    }

}
