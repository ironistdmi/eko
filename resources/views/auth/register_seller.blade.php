@extends('layouts.auth')

@section('content')

<div class="register-page auth-pages">
    <a class="logo-link" href="index.html">
        <h1>ECOFARMER</h1>
    </a>
    <div class="auth-wrapper">
        <div class="register-links">
            <a href="register.html">1. Sign Up</a>
            <a class="active" href="#">2. Set Up</a>
        </div>
        <h2>Thanks for signing up!</h2>
        <p>We know you’re excited to start designing, but we have 4 quick questions first. <br> They’ll help us tailor your experience for you.</p>
        <form action="/register/seller/submit" method="POST">
            @csrf
            <label for="store-name-input">Name of the store</label>
            <input id="store-name-input" type="text" name="store_name">
            <label for="name-input">Full name of seller</label>
            <input id="name-input" type="text" name="name">
            <div class="form-group-container mb-3">
                <div class="form-group-item col-6">
                    <label for="country-input">Country</label>
                    <div class="dropdown bootstrap-select bs-custom-select">
                        <select name="country_id" class="bs-custom-select w-100" data-dropup-auto="false" title="Choose country" data-size="5" id="country-input" tabindex="-98"><option class="bs-title-option" value=""></option>
                            @foreach($countries as $item)
                            <option value="{{ $item->id }}">{{ $item->full_namename }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="form-group-item col-6">
                    <label for="city-input">City</label>
                    <div class="dropdown bootstrap-select bs-custom-select">
                        <select name="city_id" class="bs-custom-select w-100" data-dropup-auto="false" title="Choose city" data-size="5" id="city-input" tabindex="-98"><option class="bs-title-option" value=""></option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>1</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group-container">
                <div class="form-group-item">
                    <label for="street-input">Street</label>
                    <input name="street" id="street-input" placeholder="Example: Poltaskiy Shlyah" type="text">
                </div>
                <div class="form-group-item">
                    <label for="building-input">Building</label>
                    <input name="building" id="building-input" placeholder="Example: 34/A" type="text">
                </div>
            </div>
            <label for="phone-input">Phone number</label>
            <div class="form-wrapper">
                <div class="intl-tel-input allow-dropdown">
                    <div class="flag-container">
                        <div class="selected-flag" role="combobox" aria-owns="country-listbox" tabindex="0" title="Afghanistan (‫افغانستان‬‎): +93">
                            <div class="iti-flag af"></div>
                            <div class="iti-country-code">+93</div>
                            <div class="iti-arrow"></div></div>
                            <ul class="country-list hide" id="country-listbox" aria-expanded="false" role="listbox" aria-activedescendant="iti-item-af">
                                <li class="country standard active" tabindex="-1" id="iti-item-af" role="option" data-dial-code="93" data-country-code="af" aria-selected="true">
                                    <div class="flag-box">
                                        <div class="iti-flag af"></div>                                            
                                    </div>
                                    <span class="country-name">Afghanistan (‫افغانستان‬‎)</span>
                                    <span class="dial-code">+93</span>
                                </li>
                            </ul>
                    </div>
                    <input name="calling_code" type="text" class="form-control country-code-anchor" id="countryCode" value="" placeholder="" tabindex="-1" autocomplete="off" data-intl-tel-input-id="0"></div>
                <input name="phone" id="phone-input" placeholder="66-997-8629" type="text">
            </div>
            <button class="btn btn-success" type="submit">Hold on, please</button>
            <p class="terms-of-use">By clicking «Continue» I agree to Ecofarmer’s <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
        </form>
    </div>
</div>

@endsection