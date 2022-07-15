<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'user_id' => mt_rand(1, 5),
            'category_id' => mt_rand(1, 3),
            'title' => $this->faker->sentence(mt_rand(6, 10)),
            'slug' => $this->faker->unique()->slug(3),
            'excerpt' => $this->faker->paragraph(),
            'content' => '<p>' . implode('</p><br/><p>', $this->faker->paragraphs(mt_rand(10, 20))) . '</p>'
        ];
    }
}
