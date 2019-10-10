<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use App\Models\Role;
use App\Models\Address;
use App\Models\Seller;
use App\Models\Product;
use App\Models\Wishlist;
use App\Models\Review;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class InstallDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 1)
            ->create([
                'id' => 2,
                'shop_id' => 1,
                'role_id' => Role::MERCHANT,
                'nice_name' => 'Test Merchant',
                'name' => 'Shop',
                'email' => 'test@shop.com',
                'password' => bcrypt('password'),
                'active' => 1,
            ])
            ->each(function($user){
				$user->seller()->save(
					factory(Seller::class)->make(['user_id' => $user->id])
				);
                $user->address()->save(
                    factory(Address::class)->make(['address_title' => $user->name, 'address_type' => 'Primary'])
                );
            });

        $this->call('DatabaseSeeder');

        factory(Product::class, 50)->create();
        factory(Wishlist::class, 20)->create();
        factory(Review::class, 100)->create();
    }
}
