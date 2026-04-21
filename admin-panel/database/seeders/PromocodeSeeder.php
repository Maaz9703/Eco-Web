<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Promocode;

class PromocodeSeeder extends Seeder {

    public function run() {
        Promocode::factory()->count(6)->create();
    }

}
