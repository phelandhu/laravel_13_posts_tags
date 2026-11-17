<?php

namespace Database\Seeders;

use App\Models\PostTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PostTag::factory()->create([
            "post_id"=> 1, 
            "tag_id"=> 1
        ]);
        PostTag::factory()->create([
            "post_id"=> 1, 
            "tag_id"=> 2
        ]);
        PostTag::factory()->create([
            "post_id"=> 1, 
            "tag_id"=> 4
        ]);
        PostTag::factory()->create([
            "post_id"=> 1, 
            "tag_id"=> 5
        ]);
        PostTag::factory()->create([
            "post_id"=> 2, 
            "tag_id"=> 7
        ]);
        PostTag::factory()->create([
            "post_id"=> 2, 
            "tag_id"=> 13
        ]);
    }
}
