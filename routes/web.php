<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardArticleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ArticleController::class, 'index']);
Route::get('/articles/{article}', [ArticleController::class, 'show'])->name('article.detail');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardArticleController::class, 'index'])->name('dashboard');
    Route::resource('/dashboard/articles', DashboardArticleController::class);
});

require __DIR__ . '/auth.php';
