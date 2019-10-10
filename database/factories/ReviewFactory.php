<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Review;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Review::class, function (Faker $faker) {
	$type = rand(0, 1) == 1 ? 'Shop' : 'Product';
    return [
        'customer_id' => 1,
        'rating' => rand(1, 5),
        'comment' => $faker->paragraph,
        'node_id' => $type == 'Shop' ? 1 : rand(1, 30),
        'node_type' => $type,
        'created_at' => Carbon::Now()->subDays(rand(0, 15)),
        'updated_at' => Carbon::Now()->subDays(rand(0, 15)),
    ];
});
