<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Http\Resources\PostResource;
use App\Models\Tag;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/users', function () {
    $users = DB::table('users')->get();
    return response()->json($users);
});

Route::get('/tags', [TagController::class, 'front_tags']);
Route::get('/tags/{id}', [TagController::class, 'front_tags']);  //change it so it gets all of the stories with this tag

    
//Route::get('/stories', [PostController::class, 'front_stories']);

Route::get('/stories', function () {
    return PostResource::collection(Post::with('tags:id,title,description')->where('is_active', true)->get());
});

Route::get('/stories/{id}', function ($id) {
    return new PostResource(Post::with('tags:id,title,description')->where('is_active', true)->findOrFail($id));
});



/*
    Route::post('/posts/{post}/publish', [PostController::class, 'publish'])
    ->name('posts.publish');
    return TagController->front_tags();
    /*
    $tags = DB::table('tags')->where('is_active', true)->where('is_hidden', false)->where('is_front_page_mask', false)->get();
    return response()->json($tags);
    */
//});


Route::get('/posts', function () {
    $posts = DB::table('posts')->get();
    return response()->json($posts);
});