<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'title' => 'Pizza ' . $faker->sentence(1),
        'cover_img' => '/images/pizza-img.jpg',
        'description' => $faker->text(140),
        'price' => $faker->randomFloat($nbMaxDecimals = 2, $min = 10, $max = 20),
    ];
});
