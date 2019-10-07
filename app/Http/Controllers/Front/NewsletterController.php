<?php

namespace App\Http\Controllers\Front;

use Newsletter;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\NewsletterSubscribeRequest;

class NewsletterController extends Controller
{
    public function subscribe(NewsletterSubscribeRequest $request)
    {
            Newsletter::subscribeOrUpdate($request->input('email'));
            return back()->with('success', trans('app.notify.subscribed'));
    }
}
