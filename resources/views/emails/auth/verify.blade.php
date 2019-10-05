@component('mail::message')
# Email Confirmation

Please refer to the following link:

@component('mail::button', ['url' => route('verify', ['token' => $user->verification_token])])
    Verify Email
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
