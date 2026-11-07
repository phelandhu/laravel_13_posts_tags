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
            "name"=>"Fantasy",
            "description"=>"A fantasy genre"
        ]);
        Tag::factory()->create([
            "name"=>"Fantasy",
            "description"=>"A fantasy genre"
        ]);
        Tag::factory()->create([
            "name"=>"Fantasy", "description"=>"A fantasy genre"
        ]);
        Tag::factory()->create([
            "name"=>"Science Fiction", "description"=>"A science fiction genre"
        ]);
        Tag::factory()->create([
            "name"=>"Military", "description"=>"A military genre"
        ]);
        Tag::factory()->create([
            "name"=>"Romance", "description"=>"A romance genre"
        ]);
        Tag::factory()->create([
            "name"=>"Horror", "description"=>"A horror genre"
        ]);
        Tag::factory()->create([
            "name"=>"Mystery", "description"=>"A mystery genre"
        ]);
        Tag::factory()->create([
            "name"=>"Thriller", "description"=>"A thriller genre"
        ]);
        Tag::factory()->create([
            "name"=>"Western", "description"=>"A western genre"
        ]);
        Tag::factory()->create([
            "name"=>"Historical Fiction", "description"=>"A historical fiction genre"
        ]);
        Tag::factory()->create([
            "name"=>"Young Adult", "description"=>"A young adult genre"
        ]);
        Tag::factory()->create([
            "name"=>"American Gothic Fiction", "description"=>"American gothic fiction genre"
        ]);
        Tag::factory()->create([
            "name"=>"HFY", "description"=>"Humanity Frak yeah"
        ]);
        Tag::factory()->create([
            "name"=>"Cyberpunk", "description"=>"A cyberpunk genre"
        ]);
        Tag::factory()->create([
            "name"=>"Steampunk", "description"=>"A steampunk genre"
        ]);
        Tag::factory()->create([
            "name"=>"Dystopian", "description"=>"A dystopian genre"
        ]);
        Tag::factory()->create([
            "name"=>"Post-Apocalyptic", "description"=>"A post-apocalyptic genre"
        ]);
        Tag::factory()->create([
            "name"=>"Space Opera", "description"=>"A space opera genre"
        ]);
        Tag::factory()->create([
            "name"=>"Time Travel", "description"=>"A time travel genre"
        ]);
        Tag::factory()->create([
            "name"=>"Alternate History", "description"=>"An alternate history genre"
        ]);
        Tag::factory()->create([
            "name"=>"Superhero", "description"=>"A superhero genre"
        ]);
        Tag::factory()->create([
            "name"=>"Urban Fantasy", "description"=>"An urban fantasy genre"
        ]);
        Tag::factory()->create([
            "name"=>"Paranormal Romance", "description"=>"A paranormal romance genre"
        ]);
        Tag::factory()->create([
            "name"=>"Epic Fantasy", "description"=>"An epic fantasy genre"
        ]);
        Tag::factory()->create([
            "name"=>"Sword and Sorcery", "description"=>"A sword and sorcery genre"
        ]);
        Tag::factory()->create([
            "name"=>"High Fantasy", "description"=>"A high fantasy genre"
        ]);
        Tag::factory()->create([
            "name"=>"Adventure", "description"=>"An adventure genre"
        ]);
        Tag::factory()->create([
            "name"=>"Action", "description"=>"A daring deeds type of genre"
        ]);

    }
}
