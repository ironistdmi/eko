<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Role;
use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'id' => 1,
//        	'shop_id' => Null,     in sellers
            'role_id' => Role::SUPER_ADMIN,
            'name' => 'Global',
            'email' => 'admin@ekofarmer.ua',
            'password' => bcrypt('password'),
        	'active' => 1,
			'verify' => 1,
            'created_at' => Carbon::Now(),
            'updated_at' => Carbon::Now(),
        ]);        
		DB::table('users')->insert([
            'id' => 2,
			'shop_id' => 1,
            'role_id' => Role::MERCHANT,
            'name' => 'Test merch',
            'email' => 'd5721299@gmail.com',
            'password' => bcrypt('ya123321'),
        	'active' => 1,
        	'verify' => 1,
            'created_at' => Carbon::Now(),
            'updated_at' => Carbon::Now(),
        ]);
    }
}
