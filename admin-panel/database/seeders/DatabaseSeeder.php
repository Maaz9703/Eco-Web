<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    public function run() {

        $this->call([
            OrderSeeder::class,
            ReviewSeeder::class,
            CustomerSeeder::class,
            PromocodeSeeder::class,
            CategorySeeder::class,
            ProductSeeder::class,
        ]);

    }
}
