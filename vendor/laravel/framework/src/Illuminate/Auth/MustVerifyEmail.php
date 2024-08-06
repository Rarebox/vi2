<?php

namespace Illuminate\Auth;

use Illuminate\Auth\Notifications\VerifyEmail;
use App\CustomFirebaseAuth;

trait MustVerifyEmail
{
    /**
     * Determine if the user has verified their email address.
     *
     * @return bool
     */
    public function hasVerifiedEmail()
    {
        return ! is_null($this->email_verified_at);
    }

    /**
     * Mark the given user's email as verified.
     *
     * @return bool
     */
    public function markEmailAsVerified()
    {
        return $this->forceFill([
            'email_verified_at' => $this->freshTimestamp(),
        ])->save();
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        // dd('sendEmailVerificationNotification');
        $this->notify(new VerifyEmail);
    }

    /**
     * Get the email address that should be used for verification.
     *
     * @return string
     */
    public function getEmailForVerification()
    {
        // return $this->email;
        // get the email from the firebase
        $request = request();
        $user = CustomFirebaseAuth::call_static($request, 'getUserData');
        if ($user) {
            return $user['email'];
        }

    }
}
