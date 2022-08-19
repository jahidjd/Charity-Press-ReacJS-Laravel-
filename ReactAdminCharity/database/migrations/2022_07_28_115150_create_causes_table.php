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
        Schema::create('causes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('causes_category_id');
            $table->foreign('causes_category_id')->references('id')->on('causes_categories')->onDelete('cascade')->onUpdate('cascade');
            $table->char('title',100);
            $table->bigInteger('total_amount_need');
            $table->bigInteger('total_funded')->nullable();
            $table->date('finished_date');
            $table->char('photo',50);
            $table->char('posted_by',20);
            $table->char('posted_by_photo',50)->nullable();
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
        Schema::dropIfExists('causes');
    }
};
