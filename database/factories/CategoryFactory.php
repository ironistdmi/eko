<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        'category_sub_id' => $faker->randomElement(\DB::table('category_subs')->pluck('id')->toArray()),
        'name' => $faker->unique->company,
        'slug' => $faker->slug,
        'description' => $faker->text(80),
        'active' => 1,
    ];
});
