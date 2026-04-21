<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use \App\Http\Controllers\ProductController;
use \App\Http\Controllers\CategoryController;
use \App\Http\Controllers\ReviewController;
use \App\Http\Controllers\PromocodeController;
use \App\Http\Controllers\OrderController;
use \App\Http\Controllers\CustomerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/products', [ProductController::class, 'index']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/reviews', [ReviewController::class, 'index']);
Route::get('/promocodes', [PromocodeController::class, 'index']);
Route::get('/orders', [OrderController::class, 'index']);
Route::get('/customers', [CustomerController::class, 'index']);
