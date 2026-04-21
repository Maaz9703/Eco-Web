<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promocode;

class PromocodeController extends Controller {
    public function index() {
        return Promocode::all();
    }
}
