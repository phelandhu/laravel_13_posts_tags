<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description');
            $table->string('slug')->unique();
            $table->boolean('is_active')->default(true); // This is for tags that are or aren't active, if a tag is not active, it and the stories associated with it won't be shown in the frontend.
            $table->boolean('is_hidden')->default(false); // This is for tags that are or aren't hidden, if a tag is hidden, it won't be shown in the frontend.
            $table->boolean('is_frontpage')->default(false); // This is for tags that are for logged-in users only. So it won't be shown on the front page, but will be shown on the dashboard for logged-in users.
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tags');
    }
};
