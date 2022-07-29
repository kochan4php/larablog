<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('Profile/index', [
            'user' => auth()->user()
        ]);
    }

    public function change_profile(Request $request)
    {
        ddd($request->all());
    }
}
