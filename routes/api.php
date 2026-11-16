<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\TagController;
use App\Models\Tag;
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

Route::get('/tags', [TagController::class, 'front_tags'])
    ->name('tags.front');

    
Route::get('/stories', [PostController::class, 'front_stories']);



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