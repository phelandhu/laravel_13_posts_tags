<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class TagController extends Controller
{
    public function front_tags(Tag $tag): Collection
    {
        return $tag->getTagFrontPage();
    }
}
