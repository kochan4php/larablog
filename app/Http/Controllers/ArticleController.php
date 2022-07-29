<?php

namespace App\Http\Controllers;

use App\Models\{Article, Category};
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::latest()->paginate(8);
        return Inertia::render('Articles/index', [
            'articles' => $articles,
            'categories' => Category::all()
        ]);
    }

    public function show(Article $article)
    {
        return Inertia::render('Articles/Article', [
            'article' => $article->load(['comments', 'likes']),
            'categories' => Category::all(),
        ]);
    }
}
