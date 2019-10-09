@extends('layouts.auth')

@section('content')

<div class="register-page auth-pages">
    <a class="logo-link" href="/">
        <h1>ECOFARMER</h1>
    </a>
    <div class="auth-wrapper">
        <div class="register-links">
            <a href="{{ route('register') }}">@lang('auth.first_step')</a>
            <a class="active" href="#">@lang('auth.second_step')</a>
        </div>
        <h2>@lang('auth.thx_sign')</h2>
        <p>@lang('auth.second_step_explain')</p>
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
        <form action="/register/seller/submit" method="POST">
            @csrf
            <label for="store-name-input">@lang('auth.store_name')</label>
            <input id="store-name-input" type="text" name="store_name" value="{{old('store_name')}}">
            <label for="name-input">@lang('auth.name_seller')</label>
            <input id="name-input" type="text" name="name" value="{{ Auth::user()->name }}">
            <div class="form-group-container mb-3">
                <div class="form-group-item col-6">
                    <label for="country-input">@lang('auth.country')</label>
                    <div class="dropdown bootstrap-select bs-custom-select">
                        <select name="country_id" class="bs-custom-select w-100" title="@lang('auth.choose_country')" data-size="5" id="country-input" tabindex="-98"><option class="bs-title-option" value=""></option>
                            @foreach($countries as $item)
                            <option value="{{ $item['id'] }}">{{ $item['name'] }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group-item col-6">
                    <label for="city-input">@lang('auth.city')</label>
                    <input type="text" name="city" value="" placeholder="you city">
                </div>
            </div>
            <div class="form-group-container">
                <div class="form-group-item">
                    <label for="street-input">@lang('auth.street')</label>
                    <input name="street" id="street-input" placeholder="@lang('auth.street_example')" type="text">
                </div>
                <div class="form-group-item">
                    <label for="building-input">@lang('auth.building')</label>
                    <input name="building" id="building-input" placeholder="@lang('auth.building_example')" type="text">
                </div>
            </div>
            <label for="phone-input">@lang('auth.phone')</label>
            <div class="form-wrapper">
                <input name="phone_code" type="text" class="form-control country-code-anchor" id="countryCode" value="" placeholder="" tabindex="-1">
                <input id="phone-input" placeholder="66-997-8629" type="text" name="phone">
            </div>
            <button class="btn btn-success" type="submit">@lang('auth.finish')</button>
            <p class="terms-of-use">@lang('auth.footer_agreement') <a href="{{ route('page.index', \App\Models\Page::PAGE_TNC_FOR_MERCHANT) }}">@lang('auth.terms')</a> and <a href="{{ route('page.index', \App\Models\Page::PAGE_PRIVACY_POLICY) }}">@lang('auth.policy')</a>.</p>
        </form>
    </div>
</div>

@endsection