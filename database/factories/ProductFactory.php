<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'shop_id' => $faker->randomElement(\DB::table('shops')->pluck('id')->toArray()),
		'name' => $faker->sentence,
        'model_number' => $faker->word .' '.$faker->bothify('??###'),
        'mpn' => $faker->randomNumber(),
        'gtin' => $faker->ean13,
        'gtin_type' => $faker->randomElement(\DB::table('gtin_types')->pluck('name')->toArray()),
		'short_description' => $faker->text(1500),
		'description' => $faker->text(1500),
		'price' => rand(1, 50),
		'slug' => $faker->slug,
        'active' => 1,
        'created_at' => Carbon::Now()->subDays(rand(0, 15)),
        'updated_at' => Carbon::Now()->subDays(rand(0, 15)),
    ];
});
