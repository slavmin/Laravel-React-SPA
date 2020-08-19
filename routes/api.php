<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::name('api.')->namespace('Api')->group(function () {
    // Products
    Route::get('products', 'ProductController@index')->name('products');
    // Save Orders
    Route::post('orders', 'OrderController@store')->name('orders.store');

    // Unprotected routes
    Route::group(['middleware' => 'guest:api'], function () {
        Route::namespace('Auth')->group(function () {
            Route::post('login', 'LoginController')->name('login');
            Route::post('register', 'RegisterController')->name('register');

            // Password Reset Routes...
            Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
            Route::post('password/reset', 'ResetPasswordController@reset');
        });
    });

    // Protected routes
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('orders', 'OrderController@index')->name('orders');
        Route::namespace('Auth')->group(function () {
            Route::get('me', 'MeController@me')->name('me');
            Route::post('logout', 'LogoutController@logout')->name('logout');
        });
    });
});
