<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class ModulesSeeder extends Seeder
{
    /**
     * All modules and its attributes.
     * This will generate the role accesses and will be used on permission control.
     * access = Common, Platform, Merchant, and Super Admin
     * actions is the comma separated string that will be use for permission control
     *
     * @var arr
     */
    private $modules = [
        // Module name  => Access level //
        'Attribute' => [
            'access' => 'Common',
            'actions' => 'view,add,edit,delete'
        ],

        'Category' => [
            'access' => 'Platform',
            'actions' => 'view,add,edit,delete'
        ],

        'Config' => [
            'access' => 'Merchant',
            'actions' => 'view,edit'
        ],

        'Customer' => [
            'access' => 'Platform',
            'actions' => 'view,add,edit,delete'
        ],

        'Email Template' => [
            'access' => 'Platform',
            'actions' => 'view,add,edit,delete'
        ],

        'Message' => [
            'access' => 'Common',
            'actions' => 'view,add,update,delete,reply'
        ],

        'Module' => [
            'access' => 'Super Admin',
            'actions' => 'view,add,edit,delete'
        ],

        'Product' => [
            'access' => 'Common',
            'actions' => 'view,add,edit,delete'
        ],

        'Role' => [
            'access' => 'Common',
            'actions' => 'view,add,edit,delete'
        ],

        'Settings' => [
            'access' => 'Super Admin',
            'actions' => 'view,edit'
        ],

        'User' => [
            'access' => 'Common',
            'actions' => 'view,add,edit,delete,login'
        ]

    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->modules as $name => $attributes)
        {
            DB::table('modules')->insert(
                [
                    'name' => $name,
                    'description' => 'Manage all '.strtolower($name).'.',
                    'access' => $attributes['access'],
                    'actions' => $attributes['actions'],
                    'created_at' => Carbon::Now(),
                    'updated_at' => Carbon::Now(),
                ]
            );
        }
    }

}
