<?php

namespace App\Mail\Auth;

use App\Models\User;
use Illuminate\Bus\Queueable;
//use Illuminate\Notifications\Notification;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
//use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Mail\Mailable;

class VerifyMail extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        //return (new MailMessage)
        //->from(get_sender_email(), get_sender_name())
        //->subject( trans('app.notify.signup_conf') )
        //->markdown('emails.auth.verify', ['url' => route('verify', $this->user->verification_token), 'user' => $this->user]);
        return $this->subject(trans('app.notify.signup_conf'))->markdown('emails.auth.verify');
    }
}
