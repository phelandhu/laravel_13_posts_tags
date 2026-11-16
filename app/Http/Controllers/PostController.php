<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class PostController extends Controller
{
    public function front_stories(Post $post): Collection
    {
        return $post->getFrontPageStories();
    }
}
