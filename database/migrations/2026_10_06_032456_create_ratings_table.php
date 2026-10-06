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
        Schema::create('ratings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // User who rates
            $table->morphs('rateable'); // Allows rating posts, users, etc.
            $table->unsignedTinyInteger('rating'); // e.g., 1 to 5 stars
            $table->unique(['user_id', 'rateable_type', 'rateable_id']); // One rating per user per item
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ratings');
    }
};
