<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('category_subs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',200)->unique();
            $table->string('slug',200)->unique();
            $table->text('description')->nullable();
            $table->boolean('active')->default(1);
            $table->softDeletes();
            $table->timestamps();
        });
        Schema::create('categories', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_sub_id')->unsigned()->nullable();
            $table->string('name',200)->unique();
            $table->string('slug',200)->unique();
            $table->text('description')->nullable();
            $table->boolean('active')->default(1);
            $table->boolean('featured')->nullable();
            $table->softDeletes();
            $table->timestamps();

//            $table->foreign('category_sub_id')->references('id')->on('category_subs')->onDelete('cascade');
        });
        Schema::create('category_product', function (Blueprint $table) {
            $table->integer('category_id')->unsigned()->index();
            $table->bigInteger('product_id')->unsigned()->index();
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('category_product');
        Schema::drop('categories');
		Schema::drop('category_subs');
    }
}
