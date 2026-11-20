<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'welcome')->name('home');

Route::get('/stories', function () {
    return Inertia::render('Stories/Index');
})->name('stories.index');

Route::get('/tags/{id}', function ($id) {
    return Inertia::render('Tags/Index');
})->name('stories.index');

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/students', 'Students/Index', [
    'foo' => 'bar',
    'boo' => 'boo'

]);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
