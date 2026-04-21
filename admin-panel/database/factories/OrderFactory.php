<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrderFactory extends Factory {

    public function definition() {
        return [
            'order_id' => '#' . $this->faker->numberBetween(10, 100),
            'customer_name' => $this->faker->name,
            'total_price' => $this->faker->randomFloat(2, 0, 100),
            'order_status' => $this->faker->randomElement(['pending', 'processing', 'completed']),
            'payment_status' => $this->faker->randomElement(['pending', 'processing', 'completed']),
            'order_date' => $this->faker->dateTimeBetween('-1 years', 'now'),
        ];
    }
}
