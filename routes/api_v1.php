<?php

use App\Http\Controllers\Api\V1\PostController;
use App\Http\Controllers\Api\V1\TagController;
use App\Http\Resources\Api\V1\PostResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::apiResource('posts', PostController::class);

