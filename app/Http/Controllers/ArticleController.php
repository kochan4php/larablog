<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Category;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

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
            'article' => $article,
            'author' => $article->user,
            'categories' => Category::all()
        ]);
    }
}
