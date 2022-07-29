<?php

namespace App\Http\Controllers;

use App\Models\{Article, Category};
use App\Helpers\RenderInertia;

class ArticleController extends Controller
{
    use RenderInertia;

    public function index()
    {
        $articles = Article::latest()->paginate(8);
        return $this->render('Articles/index', [
            'articles' => $articles,
            'categories' => Category::all()
        ]);
    }

    public function show(Article $article)
    {
        return $this->render('Articles/Article', [
            'article' => $article->load(['comments', 'likes']),
            'categories' => Category::all(),
        ]);
    }
}
