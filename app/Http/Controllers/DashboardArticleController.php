<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;

class DashboardArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Dashboard/index', [
            'articles' => Article::where('user_id', auth()->user()->id)->latest()->paginate(10),
            'categories' => Category::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Dashboard/Create', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated_data = $request->validate([
            'title' => ['required', 'unique:articles', 'min:10', 'max:255'],
            'category_id' => ['required'],
            'content' => ['required', 'min:100']
        ]);

        $validated_data['category_id'] = intval($validated_data['category_id']);
        $validated_data['user_id'] = auth()->user()->id;
        $validated_data['slug'] = strtolower(Str::slug($validated_data['title']));
        $validated_data['excerpt'] = strip_tags(Str::limit($validated_data['content'], 200));

        if (Article::create($validated_data))
            return Redirect::route('dashboard')->with('success', 'Berhasil membuat artikel baru');
        else
            return Redirect::route('dashboard')->with('failed', 'Gagal membuat artikel baru :(');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        return Inertia::render('Dashboard/Show', [
            'article' => $article,
            'author' => $article->user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article)
    {
        return Inertia::render('Dashboard/Edit', [
            'article' => $article,
            'author' => $article->user,
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        $rules = [
            'category_id' => ['required'],
            'content' => ['required', 'min:100']
        ];

        $same_title = $request->title === $article->title;

        if (!$same_title) $rules['title'] = ['required', 'unique:articles', 'min:10', 'max:255'];

        $validated_data = $request->validate($rules);

        if (!$same_title) $validated_data['slug'] = strtolower(Str::slug($request->title));

        $validated_data['category_id'] = intval($validated_data['category_id']);
        $validated_data['user_id'] = auth()->user()->id;
        $validated_data['excerpt'] = strip_tags(Str::limit($validated_data['content'], 200));

        if (Article::find($article->id)->update($validated_data))
            return Redirect::route('dashboard')->with('success', 'Berhasil memperbarui artikel');
        else
            return Redirect::route('dashboard')->with('failed', 'Gagal memperbarui artikel :(');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Article $article)
    {
        if (Article::find($article->id)->delete())
            return Redirect::back()->with('success', 'Artikel berhasil dihapus');
        else
            return Redirect::back()->with('failed', 'Artikel gagal dihapus');
    }
}
