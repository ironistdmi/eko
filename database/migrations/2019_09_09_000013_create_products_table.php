<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('shop_id')->unsigned()->nullable();
            $table->string('name');
            $table->string('model_number')->nullable();
            $table->string('mpn')->nullable();
            $table->string('gtin')->nullable();
            $table->string('gtin_type')->nullable();
            $table->text('short_description')->nullable();
            $table->longtext('description')->nullable();
            $table->decimal('price', 20, 6)->default(0)->nullable();
            $table->string('slug')->unique();
            $table->boolean('active')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });

        Schema::create('gtin_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100)->unique();
            $table->text('description');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('gtin_types');
        Schema::drop('products');
    }
}
