<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    public function rate(Request $request, Post $post)
    {
        $request->validate(['rating' => 'required|integer|min:1|max:5']);

        $post->ratings()->updateOrCreate(
            ['user_id' => auth()->id()],
            ['rating' => $request->rating]
        );

        return back()->with('success', 'Rating submitted successfully!');
    }

}
