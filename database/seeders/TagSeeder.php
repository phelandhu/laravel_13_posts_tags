<?php

namespace Database\Seeders;

use App\Models\Tag;
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
            "title"=>"Action", 
            "description"=>"A daring deeds type of genre"
        ]);
        Tag::factory()->create([
            "title"=>"Adventure", 
            "description"=>"An adventure genre"
        ]);
        Tag::factory()->create([
            "title"=>"Fantasy", 
            "description"=>"A fantasy genre"
        ]);
        Tag::factory()->create([
            "title"=>"Science Fiction", 
            "description"=>"A science fiction genre"
        ]);
        Tag::factory()->create([
            "title"=>"Military", 
            "description"=>"A military genre"
        ]);
        Tag::factory()->create([
            "title"=>"Romance", 
            "description"=>"A romance genre"
        ]);
        Tag::factory()->create([
            "title"=>"Horror", 
            "description"=>"A horror genre"
        ]);
        Tag::factory()->create([
            "title"=>"Mystery", 
            "description"=>"A mystery genre"
        ]);
        Tag::factory()->create([
            "title"=>"Thriller", 
            "description"=>"A thriller genre"
        ]);
        Tag::factory()->create([
            "title"=>"Western", 
            "description"=>"A western genre"
        ]);
        Tag::factory()->create([
            "title"=>"Historical Fiction", "description"=>"A historical fiction genre"
        ]);
        Tag::factory()->create([
            "title"=>"Young Adult", "description"=>"A young adult genre"
        ]);
        Tag::factory()->create([
            "title"=>"American Gothic Fiction", "description"=>"American gothic fiction genre"
        ]);
        Tag::factory()->create([
            "title"=>"HFY", "description"=>"Humanity Frak yeah"
        ]);
        Tag::factory()->create([
            "title"=>"Cyberpunk", "description"=>"A cyberpunk genre"
        ]);
        Tag::factory()->create([
            "title"=>"Steampunk", "description"=>"A steampunk genre"
        ]);
        Tag::factory()->create([
            "title"=>"Dystopian", "description"=>"A dystopian genre"
        ]);
        Tag::factory()->create([
            "title"=>"Post-Apocalyptic", "description"=>"A post-apocalyptic genre"
        ]);
        Tag::factory()->create([
            "title"=>"Space Opera", "description"=>"A space opera genre"
        ]);
        Tag::factory()->create([
            "title"=>"Time Travel", "description"=>"A time travel genre"
        ]);
        Tag::factory()->create([
            "title"=>"Alternate History", "description"=>"An alternate history genre"
        ]);
        Tag::factory()->create([
            "title"=>"Superhero", "description"=>"A superhero genre"
        ]);
        Tag::factory()->create([
            "title"=>"Urban Fantasy", "description"=>"An urban fantasy genre"
        ]);
        Tag::factory()->create([
            "title"=>"Paranormal Romance", "description"=>"A paranormal romance genre"
        ]);
        Tag::factory()->create([
            "title"=>"Epic Fantasy", "description"=>"An epic fantasy genre"
        ]);
        Tag::factory()->create([
            "title"=>"Sword and Sorcery", "description"=>"A sword and sorcery genre"
        ]);
        Tag::factory()->create([
            "title"=>"High Fantasy", "description"=>"A high fantasy genre"
        ]);
        Tag::factory()->create([
            "title"=>"Hidden", 
            "description"=>"A hidden genre",
            "is_hidden"=>true
        ]);
        Tag::factory()->create([
            "title"=>"Masked", 
            "description"=>"Masked from front page",
            "is_front_page_mask"=>true
        ]);
        Tag::factory()->create([
            "title"=>"Inactive", 
            "description"=>"Inactive tag",
            "is_active"=>false
        ]);


    }
}
