<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('maintenance_mode')->nullable();
            $table->string('install_verion')->nullable();
            // Mandatory Settings
            $table->string('name')->default('Marketplace');
            $table->text('slogan')->nullable();
            $table->text('legal_name')->nullable();
            $table->string('email')->nullable();
            $table->integer('timezone_id')->default(35);
            $table->integer('currency_id')->default(148);
            $table->boolean('vendor_can_view_customer_info')->nullable()->default(false);

            // Reporting
            $table->boolean('google_analytic_report')->nullable()->default(false);

            // Merchant registration
            $table->boolean('required_card_upfront')->nullable()->default(true);
            $table->integer('trial_days')->nullable();

            // Customer registration
            $table->boolean('ask_customer_for_email_subscription')->nullable()->default(true);

            // Support
            $table->string('support_phone')->nullable();
            $table->string('support_phone_toll_free')->nullable();
            $table->string('support_email');
            $table->string('default_sender_email_address')->nullable();
            $table->string('default_email_sender_name')->nullable();

            // Social Links
            $table->string('facebook_link')->nullable();
            $table->string('google_plus_link')->nullable();
            $table->string('twitter_link')->nullable();
            $table->string('pinterest_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('youtube_link')->nullable();

            // Units and Formating
            $table->string('length_unit')->default('meter');
            $table->string('weight_unit')->default('g');
            $table->string('valume_unit')->default('liter');

            // Currency
            $table->enum('decimals', [2, 3, 4, 5, 6])->default(2);
            $table->boolean('show_currency_symbol')->default(1);
            $table->boolean('show_space_after_symbol')->default(1);

            // Promotions
            $table->integer('coupon_code_size')->default(8);
            $table->integer('gift_card_serial_number_size')->default(13);
            $table->integer('gift_card_pin_size')->default(10);

            // Views
            $table->string('active_theme')->default('default');
            $table->string('selling_theme')->default('default');
            $table->integer('pagination')->unsigned()->default(10);
            $table->integer('max_img_size_limit_kb')->default(5000);
            $table->integer('max_number_of_inventory_imgs')->unsigned()->default(10);

            // Address
            $table->integer('address_default_country')->nullable();
            $table->integer('address_default_state')->nullable();
            $table->boolean('show_address_title')->nullable();
            $table->boolean('address_show_country')->nullable();
            $table->boolean('address_show_map')->nullable();

            // Checkout
            $table->boolean('allow_guest_checkout')->nullable()->default(false);
            $table->boolean('auto_approve_order')->nullable()->default(false);

            // Notification Settings
            $table->boolean('notify_when_vendor_registered')->nullable()->default(true);;
            $table->boolean('notify_when_dispute_appealed')->nullable()->default(true);
            $table->boolean('notify_new_message')->nullable();
            $table->boolean('notify_new_ticket')->nullable()->default(true);

            //Hidden settings
            $table->boolean('digital_goods_only')->nullable()->default(false);
            $table->boolean('is_multi_vendor')->nullable()->default(true);
            $table->integer('max_role_level')->unsigned()->default(99);

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
        Schema::drop('settings');
    }
}
