<?php

use App\Http\Controllers\{ArticleController, DashboardArticleController, DashboardProfileController, CommentController, LikeController};
use Illuminate\Support\Facades\Route;

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
    Route::get('/dashboard/profile', [DashboardProfileController::class, 'index'])->name('profile');
    Route::post('/dashboard/profile', [DashboardProfileController::class, 'change_profile'])->name('change-profile');
    Route::post('/articles/comment', [CommentController::class, 'store'])->name('article.comment');
    Route::post('/articles/like', [LikeController::class, 'add_like']);
});

require __DIR__ . '/auth.php';
