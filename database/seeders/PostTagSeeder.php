<?php

namespace Database\Seeders;

use App\Models\PostTag;
use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $tagId = Tag::where('slug', 'young-adult')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 10, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'science-fiction')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 10, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'young-adult')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 9, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'fantasy')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 11, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'adventure')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 11, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'fantasy')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 13, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'historical-fiction')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 13, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'fantasy')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 14, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'adventure')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 14, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'adventure')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 15, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'fantasy')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 15, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'horror')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 16, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'thriller')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 16, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'thriller')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 17, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'mystery')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 17, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'thriller')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 18, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'mystery')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 18, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'thriller')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 19, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'mystery')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 19, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'thriller')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 20, 
            "tag_id"=> $tagId
        ]);
        $tagId = Tag::where('slug', 'action')->first()->id;
        PostTag::factory()->create([
            "post_id"=> 20, 
            "tag_id"=> $tagId
        ]);
    }
}
