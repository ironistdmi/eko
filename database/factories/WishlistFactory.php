<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Wishlist;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Wishlist::class, function (Faker $faker) {
    $inventory = $faker->randomElement(\DB::table('products')->select('id')->get()->toArray());
    $time = Carbon::Now()->subDays(rand(0, 15));
    return [
        'customer_id' => 1,
        'product_id' => $product->id,
        'created_at' => $time,
        'updated_at' => $time,
    ];
});
