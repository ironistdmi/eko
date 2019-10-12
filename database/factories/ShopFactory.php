<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Shop;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Shop::class, function (Faker $faker) {
    $company = $faker->unique->company;
    return [
        'owner_id' => $faker->randomElement(\DB::table('users')->where('role_id', 3)->where('id', '!=', 3)->pluck('id')->toArray()),
        'name' => $company,
        'legal_name' => $company,
        'slug' => $faker->slug,
        'email' => $faker->email,
        'description' => $faker->text(500),
        'timezone_id' => $faker->randomElement(\DB::table('timezones')->pluck('id')->toArray()),
		'to_chat' => rand(0,1),
		'to_call' => rand(0,1),
		'bio' => rand(0,1),
        'active' => $faker->boolean,
        'created_at' => Carbon::Now()->subDays(rand(0, 15)),
        'updated_at' => Carbon::Now()->subDays(rand(0, 15)),
    ];
});
