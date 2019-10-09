@extends('layouts.auth')

@section('content')

<div class="register-page auth-pages">
    <a class="logo-link" href="/">
        <h1>ECOFARMER</h1>
    </a>
    <div class="link-to-login">{{ trans('auth.already_account') }} <a href="{{ route('login') }}">{{ trans('auth.login') }}</a>
    </div>
    <div class="auth-wrapper">
        <h2>{{ trans('auth.register_header') }}</h2>
        @if ($errors->any())
            <div class="row">
                <div class="col-12">
                    <div class="alert alert-danger" role="alert">
                        <ul>                         
                          @foreach($errors->all() as $error)                         
                                <li> {{{ $error }}}</li>                         
                          @endforeach    
                        </ul>
                    </div>
                </div>
            </div>
        @endif        
        {!! Form::open(['route' => 'register', 'id' => 'registration-form', 'data-toggle' => 'validator']) !!}
            <label>I am a</label>
            <div class="radio-container">
                <input type="radio" id="client-seller" name="client-type" value="seller" checked>
                <label class="radio-button" for="client-seller">Seller/Store</label>
                <input type="radio" id="client-buyer" name="client-type" value="customer">
                <label class="radio-button" for="client-buyer">Buyer</label>
            </div>
            <div class="form-group">
                <label for="email-input">{{ trans('auth.email_address') }}</label>
                <input type="email" id="email-input" name="email" placeholder="{{trans('auth.email_address')}}" required>            
            </div>
            <div class="form-group">
                <label for="password-input">{{ trans('auth.password') }}</label>
                <input type="password" id="password-input" name="password" placeholder="{{trans('auth.password')}}" required>
            </div>
            <div class="form-group">
                <label for="password-repeat-input">{{ trans('auth.password-repeat') }}</label>
                <input type="password" id="password-repeat-input" name="password_confirmation" placeholder="{{trans('auth.password-repeat')}}" required>
            </div>
            <button type="submit" class="btn btn-block btn-lg btn-flat btn-primary">{{trans('auth.register')}}</button>
			<p class="terms-of-use">@lang('auth.footer_agreement') <a href="{{ route('page.index', \App\Models\Page::PAGE_TNC_FOR_MERCHANT) }}">@lang('auth.terms')</a> and <a href="{{ route('page.index', \App\Models\Page::PAGE_PRIVACY_POLICY) }}">@lang('auth.policy')</a>.</p>
        {!! Form::close() !!}
    </div>
</div>

@endsection
