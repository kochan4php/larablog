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
            'user_id' => 1,
            'category_id' => 1,
            'title' => $this->faker->word(),
            'slug' => $this->faker->unique()->slug(3),
            'excerpt' => $this->faker->paragraph(),
            'content' => '<p>' . implode('</p><br/><p>', $this->faker->paragraphs(mt_rand(10, 20))) . '</p>'
        ];
    }
}
