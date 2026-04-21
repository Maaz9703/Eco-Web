<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {

    public function up() {
        Schema::create('promocodes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');
            $table->string('discount');
            $table->string('valid_till');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('promocodes');
    }
};
