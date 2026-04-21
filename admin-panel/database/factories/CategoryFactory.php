<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory {

    public function definition() {
        return [
            'category_name' => $this->faker->randomElement(['Category #' . $this->faker->numberBetween(10, 100),]),
        ];
    }
}
