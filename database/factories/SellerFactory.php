<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Seller;
use App\Models\Role;
use Carbon\Carbon;
use Faker\Generator as Faker;

$factory->define(Seller::class, function (Faker $faker) {
	
	$created = Carbon::Now()->subDays(rand(0, 15));
	
    return [		
        'shop_id' => 1,
        'user_id' => $faker->randomElement(\DB::table('users')->where('role_id', Role::MERCHANT)->pluck('id')->toArray()),,
        'read_announcements_at' => $created,
        'created_at' => $created,
        'updated_at' => Carbon::Now()->subDays(rand(0, 15)),
    ];
});
