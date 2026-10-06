<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tag::factory()->create([
            'name' => 'Laravel',
        ]);
        Tag::factory()->create([
            'name' => 'PHP',
        ]);
        Tag::factory()->create([
            'name' => 'C/C++',
        ]);
        Tag::factory()->create([
            'name' => 'Assembly',
        ]);
        Tag::factory()->create([
            'name' => 'Python',
        ]);
        Tag::factory()->create([
            'name' => 'Perl',
        ]);
        Tag::factory()->create([
            'name' => 'Java',
        ]);
        Tag::factory()->create([
            'name' => 'Bash',
        ]);
        Tag::factory()->create([
            'name' => 'Pascal',
        ]);
    }
}
