<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Articles/index', [
            'articles' => Article::paginate(8)
        ]);
    }

    public function show(Article $article)
    {
        return Inertia::render('Articles/Article', [
            'article' => $article,
        ]);
    }
}
