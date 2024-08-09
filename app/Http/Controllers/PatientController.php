<?php

namespace App\Http\Controllers;

use App\Http\Facades\Auth;
use App\Http\Facades\Database;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    public function store(Request $request)
    {
        $request->merge([
            'user_type' => 'patient',
        ]);
        $auth = Auth::createUser($request);
        if (! $auth) {
            return back()->withErrors([
                'email' => 'The provided email is already registered.',
            ]);
        }
        $data = [
            'username' => $request->username,
            'user_type' => $request->user_type,
            'uid' => $auth->uid,
            'name' => $request->name,
            'new_password' => $request->password,
        ];

        // Database::push('users', $data);

        Database::set('users/'.$auth->uid, $data);

        // dd($request->all());
        Auth::sendEmailVerificationLink($request->email);

        return Inertia::render('Patient/Create/index', [
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'success' => true,
        ]);
    }
}
