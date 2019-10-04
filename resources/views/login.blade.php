@extends('layouts.auth')

@section('content')

    <div class="login-page auth-pages">
        <a class="logo-link" href="/">
            <h1>ECOFARMER</h1>
        </a>
        <div class="link-to-login"> {{ trans('auth.no_account_que') }} <a href="{{ route('register') }}">{{ trans('auth.register') }}</a>
        </div>
        <div class="auth-wrapper">
            <h2>{{ trans('auth.login_header') }}</h2>
            {!! Form::open(['route' => 'login', 'id' => 'form', 'data-toggle' => 'validator']) !!}
            <div class="form-group has-feedback">
                {!! Form::email('email', null, ['class' => 'form-control input-lg', 'placeholder' => trans('auth.email_address'), 'required']) !!}
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                <div class="help-block with-errors"></div>
            </div>
            <div class="form-group has-feedback">
                {!! Form::password('password', ['class' => 'form-control input-lg', 'id' => 'password', 'placeholder' => trans('auth.password'), 'data-minlength' => '6', 'required']) !!}
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                <div class="help-block with-errors"></div>
            </div>

            <div class="row">
                <div class="col-xs-7">
                    <div class="form-group">
                        <label>
                            <a class="reset-password" href="{{ route('password.request') }}">{{ trans('auth.forgot_password') }}</a>
                        </label>
                    </div>
                </div>
                <div class="col-xs-5">
                    {!! Form::submit(trans('auth.login'), ['class' => 'btn btn-block btn-lg btn-flat btn-primary']) !!}
                </div>
            </div>
            {!! Form::close() !!}
        </div>
    </div>

@endsection
