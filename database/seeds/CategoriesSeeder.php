<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'category_sub_id' => 0,
                'name' => 'Grapes',
                'slug' => 'grapes',
                'description' => 'Grapes',
                'featured' => 1,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Eggs',
                'slug' => 'eggs',
                'description' => 'Eggs',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Meat',
                'slug' => 'meat',
                'description' => 'Meat',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Potatoes',
                'slug' => 'potatoes',
                'description' => 'Potatoes',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Apples',
                'slug' => 'apples',
                'description' => 'Apples',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Bananas',
                'slug' => 'bananas',
                'description' => 'Bananas',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Bread',
                'slug' => 'bread',
                'description' => 'Bread',
                'featured' => 1,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Cabbage',
                'slug' => 'cabbage',
                'description' => 'Cabbage',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Cucumbers',
                'slug' => 'cucumbers',
                'description' => 'Cucumbers',
                'featured' => Null,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Peppers',
                'slug' => 'peppers',
                'description' => 'Peppers',
                'featured' => 1,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ],[
                'category_sub_id' => 0,
                'name' => 'Oranges',
                'slug' => 'oranges',
                'description' => 'Oranges',
                'featured' => 1,
                'created_at' => Carbon::Now(),
                'updated_at' => Carbon::Now(),
            ]
        ]);
		
		$categories = DB::table('categories')->pluck('id', 'slug')->all();
		$path = storage_path('app/public/storage/');

		if(!File::isDirectory($path))
			File::makeDirectory($path);

		foreach ($categories as $key => $val) {
			DB::table('images')->insert([
				[
					'name' => $key,
					'path' => "storage/".$key.".svg",
					'extension' => 'svg',
					'size' => 0,
					'imageable_id' => $val,
					'imageable_type' => 'Category', //Product
					'created_at' => Carbon::Now(),
					'updated_at' => Carbon::Now(),
				]
			]);
		}
		
    }
}
