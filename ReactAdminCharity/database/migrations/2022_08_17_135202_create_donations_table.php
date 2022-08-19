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
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->char('name',50)->nullable();
            $table->char('address',50)->nullable();
            $table->char('charity_address',50);
            $table->bigInteger('amount');
            $table->unsignedBigInteger('project_category')->nullable();
            $table->foreign('project_category')->references('id')->on('causes_categories')->onUpdate('cascade')->onDelete('cascade');
            $table->date('date');
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
        Schema::dropIfExists('donations');
    }
};
