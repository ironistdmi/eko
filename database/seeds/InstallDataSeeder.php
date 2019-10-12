<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use App\Models\Role;
use App\Models\Address;
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
		
		
        $this->call('DatabaseSeeder');

        factory(Product::class, 50)->create();
        factory(Wishlist::class, 20)->create();
        factory(Review::class, 100)->create();
    }
}
