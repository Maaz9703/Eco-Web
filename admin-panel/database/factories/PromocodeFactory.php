<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PromocodeFactory extends Factory {

    public function definition() {
        return [
            'name' => $this->faker->randomElement(['Promocode #' . $this->faker->numberBetween(10, 100),]),
            'code' => $this->faker->randomElement(['Discount23', 'Discount24', 'Discount25']),
            'discount' => $this->faker->numberBetween(1, 100),
            'valid_till' => $this->faker->dateTimeBetween('-1 years', 'now'),
        ];
    }
}
