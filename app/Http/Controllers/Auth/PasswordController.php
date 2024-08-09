<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Facades\Auth;
use App\Http\Facades\Database;
use Illuminate\Http\RedirectResponse;
// use Kreait\Firebase\Contract\Auth as FirebaseAuth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required'],
            'password' => ['required', Password::defaults(), 'confirmed'],
        ]);

        if (! Auth::checkCurrentPassword(Auth::getUID(), $request->current_password)) {
            return back()->withErrors(['current_password' => 'The provided password does not match your current password.']);
        }

        try {
            Auth::changeUserPassword(Auth::getUID(), $request->password);
            $data = ['new_password' => $request->password];
            Database::update('users/'.Auth::getUID(), $data);
        } catch (\Exception $e) {
            return back()->withErrors(['current_password' => $e->getMessage()]);
        }

        return back();
    }
}
