<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Post extends Model
{
    use HasFactory;
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

    public function getFrontPageStories(): Collection
    {
        return $this->tags()->where('is_active', true)->get(['id', 'title', 'description', 'body']);
    }
}
