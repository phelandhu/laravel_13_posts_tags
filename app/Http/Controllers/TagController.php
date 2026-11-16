<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function front_tags(Tag $tag): RedirectResponse
    {
        return $tag->tag_front();

    }
}
