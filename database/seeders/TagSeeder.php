<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the tag seeds.
     */
    public function run(): void
    {
        Tag::factory()->create([
            'name' => 'HFY',
            'description' => 'Humanity at its finest',
        ]);
        Tag::factory()->create([
            'name' => 'Military',
            'description' => 'These involve military themes, such as soldiers, battles, and war.',
        ]);
        Tag::factory()->create([
            'name' => 'SciFi',
            'description' => 'These involve science fiction themes, such as space travel, aliens, and futuristic technology.',
        ]);
        Tag::factory()->create([
            'name' => 'Mil-scifi',
            'description' => 'These involve military and science fiction themes.',
        ]);
        Tag::factory()->create([
            'name' => 'Fantasy',
            'description' => 'These involve fantasy themes, such as magic, mythical creatures, and imaginary worlds.',
        ]);
        Tag::factory()->create([
            'name' => 'Action & Adventure',
            'description' => 'These involve action and adventure themes, such as thrilling pursuits and heroic endeavors.',
        ]);
        Tag::factory()->create([
            'name' => 'Horror',
            'description' => 'These involve horror themes, such as fear, suspense, and the unknown.',
        ]);
        Tag::factory()->create([
            'name' => 'Mystery & Crime',
            'description' => 'Centers on solving a crime, puzzle, or detective case',
        ]);
        Tag::factory()->create([
            'name' => 'Romance',
            'description' => 'These involve romance themes, such as love, relationships, and emotional connections.',
        ]);
        Tag::factory()->create([
            'name' => 'Thriller & Suspense',
            'description' => 'Focuses on high stakes, tension, and danger where a character fights to survive',
        ]);
        Tag::factory()->create([
            'name' => 'Historical Fiction',
            'description' => 'Set in a recognizable past time period that brings history to life',
        ]);
        Tag::factory()->create([
            'name' => 'Literary Fiction',
            'description' => 'Character-driven stories that focus heavily on artistic prose and deep themes rather than fast plots',
        ]);
    
    }
}
