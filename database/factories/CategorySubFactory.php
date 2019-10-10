<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CategorySub;
use Faker\Generator as Faker;

$factory->define(CategorySub::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'slug' => $faker->slug,
        'description' => $faker->text(500),
        'active' => 1,
    ];
});
