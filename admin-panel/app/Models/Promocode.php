<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Promocode extends Model {
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'discount',
        'valid_till',
    ];
}
