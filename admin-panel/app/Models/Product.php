<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Product extends Model {
    use HasFactory;

    protected $casts = [
        'colors' => 'json',
        'categories' => 'json',
        'promo_categories' => 'json',
    ];

    protected $fillable = [
        'name',
        'price',
        'old_price',
        'description',
        'colors',
        'categories',
        'promo_categories',
        'image',
    ];
}
