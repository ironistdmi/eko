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
            @if(session('success'))
                <div class="alert alert-success" role="alert">
                    {{ session('success') }}
                </div>
            @endif
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
            {!! Form::open(['route' => 'login', 'id' => 'form', 'data-toggle' => 'validator']) !!}
            <div class="form-group has-feedback">
                <input type="email" name="email" placeholder="{{trans('auth.email_address')}}" required>                
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                <div class="help-block with-errors"></div>
            </div>
            <div class="form-group has-feedback">
                <input type="password" name="password" placeholder="{{trans('auth.password')}}" required>
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
                <label>
                    <a class="reset-password" href="{{ route('password.request') }}">{{ trans('auth.forgot_password') }}</a>
                </label>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block btn-lg btn-flat btn-primary">{{trans('auth.register')}}</button>
            </div>
            {!! Form::close() !!}
        </div>
    </div>

@endsection
