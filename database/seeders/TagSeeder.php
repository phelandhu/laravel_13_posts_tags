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
        Tag::factory()->create([ // 1
            "title"=>"Action",
            "slug"=>"action",
            "description"=>"A daring deeds type of genre"
        ]);
        Tag::factory()->create([ // 2
            "title"=>"Adventure", 
            "slug"=>"adventure",
            "description"=>"An adventure genre"
        ]);
        Tag::factory()->create([ // 3
            "title"=>"Fantasy", 
            "slug"=>"fantasy",
            "description"=>"A fantasy genre"
        ]);
        Tag::factory()->create([ // 4
            "title"=>"Science Fiction", 
            "slug"=>"science-fiction",
            "description"=>"A science fiction genre"
        ]);
        Tag::factory()->create([ // 5
            "title"=>"Military", 
            "slug"=>"military",
            "description"=>"A military genre"
        ]);
        Tag::factory()->create([ // 6
            "title"=>"Romance", 
            "slug"=>"romance",
            "description"=>"A romance genre"
        ]);
        Tag::factory()->create([ // 7
            "title"=>"Horror", 
            "slug"=>"horror",
            "description"=>"A horror genre"
        ]);
        Tag::factory()->create([ // 8
            "title"=>"Mystery", 
            "slug"=>"mystery",
            "description"=>"A mystery genre"
        ]);
        Tag::factory()->create([ // 9
            "title"=>"Thriller", 
            "slug"=>"thriller",
            "description"=>"A thriller genre"
        ]);
        Tag::factory()->create([ // 10
            "title"=>"Western", 
            "slug"=>"western",
            "description"=>"A western genre"
        ]);
        Tag::factory()->create([ // 11
            "title"=>"Historical Fiction", 
            "slug"=>"historical-fiction", 
            "description"=>"A historical fiction genre"
        ]);
        Tag::factory()->create([ // 12
            "title"=>"Young Adult", 
            "slug"=>"young-adult", 
            "description"=>"A young adult genre"
        ]);
        Tag::factory()->create([ // 13
            "title"=>"American Gothic Fiction", 
            "slug"=>"american-gothic-fiction", 
            "description"=>"American gothic fiction genre"
        ]);
        Tag::factory()->create([ // 14
            "title"=>"HFY", 
            "slug"=>"hfy", 
            "description"=>"Humanity Frak yeah"
        ]);
        Tag::factory()->create([ // 15
            "title"=>"Cyberpunk", 
            "slug"=>"cyberpunk", 
            "description"=>"A cyberpunk genre"
        ]);
        Tag::factory()->create([ // 16
            "title"=>"Steampunk", 
            "slug"=>"steampunk", 
            "description"=>"A steampunk genre"
        ]);
        Tag::factory()->create([ // 17
            "title"=>"Dystopian", 
            "slug"=>"dystopian", 
            "description"=>"A dystopian genre"
        ]);
        Tag::factory()->create([ // 18
            "title"=>"Post-Apocalyptic", 
            "slug"=>"post-apocalyptic", 
            "description"=>"A post-apocalyptic genre"
        ]);
        Tag::factory()->create([ // 19
            "title"=>"Space Opera", 
            "slug"=>"space-opera", 
            "description"=>"A space opera genre"
        ]);
        Tag::factory()->create([ // 20
            "title"=>"Time Travel", 
            "slug"=>"time-travel", 
            "description"=>"A time travel genre"
        ]);
        Tag::factory()->create([ // 21
            "title"=>"Alternate History", 
            "slug"=>"alternate-history", 
            "description"=>"An alternate history genre"
        ]);
        Tag::factory()->create([ // 22
            "title"=>"Superhero", 
            "slug"=>"superhero", 
            "description"=>"A superhero genre"
        ]);
        Tag::factory()->create([ // 23
            "title"=>"Urban Fantasy", 
            "slug"=>"urban-fantasy", 
            "description"=>"An urban fantasy genre"
        ]);
        Tag::factory()->create([ // 24
            "title"=>"Paranormal Romance", 
            "slug"=>"paranormal-romance", 
            "description"=>"A paranormal romance genre"
        ]);
        Tag::factory()->create([ // 25
            "title"=>"Epic Fantasy", 
            "slug"=>"epic-fantasy", 
            "description"=>"An epic fantasy genre"
        ]);
        Tag::factory()->create([ // 26
            "title"=>"Sword and Sorcery", 
            "slug"=>"sword-and-sorcery", 
            "description"=>"A sword and sorcery genre"
        ]);
        Tag::factory()->create([ // 27
            "title"=>"High Fantasy", 
            "slug"=>"high-fantasy", 
            "description"=>"A high fantasy genre"
        ]);
        Tag::factory()->create([
            "title"=>"Hidden", 
            "slug"=>"hidden",
            "description"=>"A hidden genre",
            "is_hidden"=>true
        ]);
        Tag::factory()->create([
            "title"=>"Masked", 
            "slug"=>"masked",
            "description"=>"Masked from front page",
            "is_front_page_mask"=>true
        ]);
        Tag::factory()->create([
            "title"=>"Inactive", 
            "slug"=>"inactive",
            "description"=>"Inactive tag",
            "is_active"=>false
        ]);


    }
}
