<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory {

    public function definition() {
        return [
            'customer_name' => $this->faker->name,
            'product_name' => $this->faker->randomElement(['Toning Hair Mask', 'Spray Balm', 'Detox Body Cream', 'Foundation Beshop', 'Toning Hair Mask', 'Spray Balm']),
            'comment' => $this->faker->text,
            'rating' => $this->faker->numberBetween(2, 5),
        ];
    }
}
