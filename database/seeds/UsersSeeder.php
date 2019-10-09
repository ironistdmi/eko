<?php

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
            'role_id' => \App\Models\Role::SUPER_ADMIN,
            'name' => 'Global',
            'email' => 'admin@ekofarmer.ua',
            'password' => bcrypt('password'),
        	'active' => 1,
            'created_at' => Carbon::Now(),
            'updated_at' => Carbon::Now(),
        ]);
    }
}
