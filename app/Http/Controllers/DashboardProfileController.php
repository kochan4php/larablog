<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\RenderInertia;

class DashboardProfileController extends Controller
{
    use RenderInertia;

    public function index()
    {
        return $this->render('Profile/index', [
            'user' => auth()->user()
        ]);
    }

    public function change_profile(Request $request)
    {
        ddd($request->all());
    }
}
