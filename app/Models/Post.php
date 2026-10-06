<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'body', 'user_id'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function tags(): BelongsToMany {
        return $this->belongsToMany(Tag::class);
    }

    public function ratings(): MorphMany {
        return $this->morphMany(Rating::class, 'rateable');
    }
    
    // Helper to get average rating
    public function averageRating() {
        return $this->ratings()->avg('rating') ?? 0;
    }
}
