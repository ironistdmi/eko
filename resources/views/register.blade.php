@extends('layouts.auth')

@section('content')

<div class="register-page auth-pages">
    <a class="logo-link" href="/">
        <h1>ECOFARMER</h1>
    </a>
    <div class="link-to-login"> Already have an account? <a href="{{ route('login') }}">Log in</a>
    </div>
    <div class="auth-wrapper">
        <h2>{{ trans('auth.register_header') }}</h2>
        {!! Form::open(['route' => 'register', 'id' => 'registration-form', 'data-toggle' => 'validator']) !!}
            <label for="">I am a</label>
            <div class="radio-container">
                <input type="radio" id="client-seller" name="client-type" value="seller" checked>
                <label class="radio-button" for="client-seller">Seller/Store</label>
                <input type="radio" id="client-buyer" name="client-type" value="buyer">
                <label class="radio-button" for="client-buyer">Buyer</label>
            </div>
            <label for="email-input">{{ trans('auth.email_address') }}</label>
            {!! Form::email('email', null, ['id' => 'email-input', 'placeholder' => trans('auth.email_address'), 'required']) !!}
            <label for="password-input">{{ trans('auth.password') }}</label>
            {!! Form::password('password', ['id' => 'password-input', 'placeholder' => trans('app.placeholder.password'), 'data-minlength' => '6', 'required']) !!}
            <label for="password-repeat-input">{{ trans('auth.password-repeat') }}</label>
            {!! Form::password('password_confirmation', ['id' => 'password-repeat-input', 'placeholder' => trans('app.placeholder.password'), 'data-minlength' => '6', 'required']) !!}
            {!! Form::submit(trans('app.form.register'), ['class' => 'btn btn-block btn-lg btn-flat btn-primary']) !!}
            <p class="terms-of-use">By clicking «Continue» I agree to Ecofarmer’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
        {!! Form::close() !!}
    </div>
</div>

@endsection
