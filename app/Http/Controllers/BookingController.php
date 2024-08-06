<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return view('booking'); // Bu, formunuzu gösterecek Blade şablonunuza işaret eder
    }
}
