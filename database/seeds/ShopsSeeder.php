<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class ShopsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $merchants = \DB::table('users')->where('role_id', \App\Models\Role::MERCHANT)->pluck('id')->toArray();

        foreach ($merchants as $merchant) {
            $shop_id = DB::table('shops')->insertGetId([
                        'owner_id' => $merchant,
                        'name' => 'Demo Shop ' . $merchant,
                        'legal_name' => 'Demo Shop ' . $merchant . ' Ltd.',
                        'slug' => 'demo-shop-' . $merchant,
                        'email' => 'shop'.$merchant.'@demo.com',
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                        'timezone_id' => 73,
                        'active' => 1,
                        'created_at' => Carbon::Now(),
                        'updated_at' => Carbon::Now(),
                    ]);

            DB::table('addresses')->insert([
                'address_type' => 'Primary',
                'addressable_type' => 'App\Models\Shop',
                'address_line_1' => 'Demo Shop Address',
                'state_id' => 806,
                'zip_code' => 63585,
                'country_id' => 604,
                'addressable_id' => $shop_id,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ]);
        }
    }
}
