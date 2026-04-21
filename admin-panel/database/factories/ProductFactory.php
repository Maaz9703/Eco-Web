<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory {

    public function definition() {
        return array_merge(
            [   /* Price */
                'price' => $this->faker->randomFloat(2, 0, 100),

                /* Old Price */
                'old_price' => $this->faker->randomFloat(2, 0, 100),

                /* Promo Categories */
                'promo_categories' => $this->faker->randomElements([
                    'trending_products',
                    'new_arrivals',
                    'featured_products',
                    'best_sellers',
                    'sale'
                ],
                $this->faker->numberBetween(1, 5)),

                /* Categories */
                'categories' => $this->faker->randomElements([
                    'make_up',
                    'spa',
                    'perfume',
                    'hair_care'
                ],
                $this->faker->numberBetween(1, 4)),

                /* Description */
                'description' => $this->faker->text,

                /* Colors */
                'colors' => $this->faker->randomElements(['bridesmaid', 'misty_rose', 'melon', 'mona_lisa'], $this->faker->numberBetween(1, 4)),

            ],

            $this->faker->randomElement([
                ['name' => 'Toning Hair Mask',   'image' => 'https://dl.dropbox.com/s/d51zcz2s86c5uae/product_01.png?dl=0'],
                ['name' => 'Detox Body Cream',    'image' => 'https://dl.dropbox.com/s/1d8v82yfzms580v/product_02.png?dl=0'],
                ['name' => 'Foundation Beshop',    'image' => 'https://dl.dropbox.com/s/oyh85ihtu22urqt/product_03.png?dl=0'],
                ['name' => 'Spray Balm',    'image' => 'https://dl.dropbox.com/s/utbbm0t7y2clkr0/product_04.png?dl=0'],
                ['name' => 'Detox Body Cream',    'image' => 'https://dl.dropbox.com/s/cs24cb6bfs7scue/product_05.png?dl=0'],
                ['name' => 'Toning Hair Mask',    'image' => 'https://dl.dropbox.com/s/7jt5nm5klw88sh6/product_06.png?dl=0'],
            ],

        ));

    }
}
