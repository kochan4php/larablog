<?php

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

$posts = collect([
    [
        'title' => 'Lorem Ipsum',
        'slug' => 'lorem-ipsum-1',
        'user_id' => 1,
        'category_id' => 1,
        'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam iusto harum ratione, sint voluptatem nulla aliquid excepturi architecto adipisci.',
        'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti reiciendis illo vero fugit fuga eum natus harum explicabo nulla veritatis vel in repellat eaque ullam cupiditate dicta, minus recusandae repudiandae eius quo veniam sed! Esse eveniet, ad ipsa sapiente eum nobis reprehenderit mollitia consequatur sed explicabo delectus atque inventore amet dolor quibusdam ipsam necessitatibus eligendi. Id ipsa earum quia, ratione impedit ea molestiae temporibus ipsam perspiciatis quasi aspernatur, eligendi, molestias veritatis eius hic mollitia beatae ab rem consequuntur. Esse repellat dolorum, accusantium, atque culpa doloremque et dolorem dignissimos sed hic ipsum sint alias sapiente architecto officia similique quia asperiores!'
    ],
    [
        'title' => 'Lorem Ipsum',
        'slug' => 'lorem-ipsum-2',
        'user_id' => 1,
        'category_id' => 1,
        'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam iusto harum ratione, sint voluptatem nulla aliquid excepturi architecto adipisci.',
        'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti reiciendis illo vero fugit fuga eum natus harum explicabo nulla veritatis vel in repellat eaque ullam cupiditate dicta, minus recusandae repudiandae eius quo veniam sed! Esse eveniet, ad ipsa sapiente eum nobis reprehenderit mollitia consequatur sed explicabo delectus atque inventore amet dolor quibusdam ipsam necessitatibus eligendi. Id ipsa earum quia, ratione impedit ea molestiae temporibus ipsam perspiciatis quasi aspernatur, eligendi, molestias veritatis eius hic mollitia beatae ab rem consequuntur. Esse repellat dolorum, accusantium, atque culpa doloremque et dolorem dignissimos sed hic ipsum sint alias sapiente architecto officia similique quia asperiores!'
    ],
    [
        'title' => 'Lorem Ipsum',
        'slug' => 'lorem-ipsum-3',
        'user_id' => 1,
        'category_id' => 1,
        'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam iusto harum ratione, sint voluptatem nulla aliquid excepturi architecto adipisci.',
        'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti reiciendis illo vero fugit fuga eum natus harum explicabo nulla veritatis vel in repellat eaque ullam cupiditate dicta, minus recusandae repudiandae eius quo veniam sed! Esse eveniet, ad ipsa sapiente eum nobis reprehenderit mollitia consequatur sed explicabo delectus atque inventore amet dolor quibusdam ipsam necessitatibus eligendi. Id ipsa earum quia, ratione impedit ea molestiae temporibus ipsam perspiciatis quasi aspernatur, eligendi, molestias veritatis eius hic mollitia beatae ab rem consequuntur. Esse repellat dolorum, accusantium, atque culpa doloremque et dolorem dignissimos sed hic ipsum sint alias sapiente architecto officia similique quia asperiores!'
    ],
    [
        'title' => 'Lorem Ipsum',
        'slug' => 'lorem-ipsum-4',
        'user_id' => 1,
        'category_id' => 1,
        'excerpt' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam iusto harum ratione, sint voluptatem nulla aliquid excepturi architecto adipisci.',
        'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus corrupti reiciendis illo vero fugit fuga eum natus harum explicabo nulla veritatis vel in repellat eaque ullam cupiditate dicta, minus recusandae repudiandae eius quo veniam sed! Esse eveniet, ad ipsa sapiente eum nobis reprehenderit mollitia consequatur sed explicabo delectus atque inventore amet dolor quibusdam ipsam necessitatibus eligendi. Id ipsa earum quia, ratione impedit ea molestiae temporibus ipsam perspiciatis quasi aspernatur, eligendi, molestias veritatis eius hic mollitia beatae ab rem consequuntur. Esse repellat dolorum, accusantium, atque culpa doloremque et dolorem dignissimos sed hic ipsum sint alias sapiente architecto officia similique quia asperiores!'
    ],
]);

Route::get('/', function () use ($posts) {
    return Inertia::render('Articles/index', [
        'posts' => $posts
    ]);
});

Route::get('/article/{article}', function ($article) {
    return Inertia::render('Articles/Article');
})->name('article.detail');

Route::middleware(['auth', 'verified'])->group(function () use ($posts) {
    Route::get('/dashboard', function () use ($posts) {
        return Inertia::render('Dashboard/index', [
            'posts' => $posts
        ]);
    })->name('dashboard');
});

require __DIR__ . '/auth.php';
