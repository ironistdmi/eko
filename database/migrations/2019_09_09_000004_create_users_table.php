<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('shop_id')->unsigned()->default(0);
            $table->integer('role_id')->unsigned()->default(3);
            $table->boolean('active')->default(1);			
            $table->string('name')->nullable();
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->enum('type', ['seller', 'customer']);
            $table->date('dob')->nullable();
            $table->string('sex')->nullable();
            $table->longtext('description')->nullable();
            $table->timestampTz('last_visited_at')->nullable();
            $table->ipAddress('last_visited_from')->nullable();
            $table->boolean('verify')->default(0);
            $table->timestamp('read_announcements_at')->nullable();
            $table->string('verification_token', 100)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
