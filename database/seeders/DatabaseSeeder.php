<?php

namespace Database\Seeders;

use App\Models\Article;
use App\Models\User;
use App\Models\Category;
use App\Models\Comment;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Deo Subarno',
            'email' => 'aphrodeosubarno@gmail.com',
            'password' => Hash::make('12345')
        ]);
        User::factory(5)->create();
        Article::factory(10)->create();
        Comment::factory(100)->create();
        Category::create([
            'name' => 'Programming',
            'slug' => 'programming'
        ]);
        Category::create([
            'name' => 'Design',
            'slug' => 'design'
        ]);
        Category::create([
            'name' => 'Personal',
            'slug' => 'personal'
        ]);
    }
}
