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
        Schema::create('awarness_areas', function (Blueprint $table) {
            $table->id();
            $table->char('title',100);
            $table->string('description');
            $table->char('photo_one',50);
            $table->char('photo_two',50);
            $table->string('quotation');
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
        Schema::dropIfExists('awarness_areas');
    }
};
