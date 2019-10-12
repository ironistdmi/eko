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
use Illuminate\Support\Facades\Artisan;

class InstallDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {		
		Artisan::call('storage:link');
	
        $this->call('DatabaseSeeder');

        factory(Product::class, 50)->create();
        factory(Wishlist::class, 20)->create();
        factory(Review::class, 100)->create();
		
		$products   = \DB::table('products')->pluck('id')->toArray();
		$categories = \DB::table('categories')->pluck('id')->toArray();
		
		// category_product
        foreach ($products as $product) {
            foreach ((range(1, 2)) as $index) {
                DB::table('category_product')->insert(
                    [
                        'category_id' => $categories[array_rand($categories)],
                        'product_id' => $product,
                        'created_at' => Carbon::Now(),
                        'updated_at' => Carbon::Now(),
                    ]
                );
            }
        }
    }
}
