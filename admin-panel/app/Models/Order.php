<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;

class Order extends Model {
    use HasFactory;

    protected $fillable = [
        'id',
        'order_id',
        'customer_name',
        'total_price',
        'order_status',
        'payment_status',
        'order_date',
    ];
}
