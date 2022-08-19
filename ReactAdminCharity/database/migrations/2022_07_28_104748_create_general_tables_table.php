<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general_tables', function (Blueprint $table) {
            $table->id();
            $table->char('logo',50);
            $table->char('home_mission_text',200);
            $table->char('home_mission_photo_one',50);
            $table->char('home_mission_photo_two',50);
            $table->char('home_mission_photo_three',50);
            $table->char('home_mission_stratigy',200);
            $table->integer('school');
            $table->integer('hospital');
            $table->integer('volunteers');
            $table->char('home_big_text',255);
            $table->char('footer_text',150);
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
        Schema::dropIfExists('general_tables');
    }
};
