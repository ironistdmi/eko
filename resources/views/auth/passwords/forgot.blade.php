@extends('layouts.auth')

@section('content')
<div class="reset-page auth-pages">
    <a class="logo-link" href="index.html">
        <h1>ECOFARMER</h1>
    </a>
    <div class="link-to-login"> Already have an account? <a href="login.html">Log in</a>
    </div>
    <div class="auth-wrapper">
        <h2>Forgot your password?</h2>
        <p>No worries! We’ll send you an Email with the link to create a new one! ;)</p>
        <form method="POST" action="{{ route('password.email') }}">
                        @csrf
            <label for="email-input">Type your email</label>
            <input id="email-input" type="email" name="email">
            <button type="submit">Send</button>
        </form>
    </div>
</div>