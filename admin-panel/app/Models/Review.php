<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Review extends Model {
    use HasFactory;

    protected $fillable = [
        'customer_name',
        'product_name',
        'comment',
        'rating',
    ];
}
