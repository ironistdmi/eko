<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    //    $this->call('RolesSeeder');
    //    $this->call('UsersSeeder');
    //    $this->call('CountriesSeeder');
        //$this->call('ModulesSeeder');
    //    $this->call('PermissionSeeder');
    //    $this->call('CurrenciesSeeder');
    //    $this->call('StatesSeeder');
    //    $this->call('TimezonesSeeder');
        //$this->call(UsersTableSeeder::class);
        $this->call('CategoriesSeeder::class');
    }
}
