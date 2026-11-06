<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::factory()->create([
            'foreignId' => '1',
            'title' => "Pilot's first flight",
            "description" => "First flight for a new interspace pilot",
            "content" => "\"You’re telling me the actual problem is the sealant on the gaskets?\"<br />Julian leaned over the open engine manifold, his forehead smeared with a streak of iridescent lubricant. He didn't look up as he answered, his voice echoing slightly inside the hangar bay. \"Not the sealant itself, but the way the thermal expansion interacts with the housing. If we don't shim these bolts, the whole assembly will vibrate itself into scrap metal the moment we hit a hundred knots.\"<br />\"Well, since you're the one with the wrench, I'll trust your intuition,\" Elias replied, stepping back to give Julian more room. He leaned against the cold plating of the fuselage, his gaze drifting up toward the vaulted ceiling of the hangar. Somewhere beyond those reinforced steel doors lay the void—an endless, ink-black expanse that felt far more tangible than the ship itself. For years, Elias had lived in the simulation tanks, fighting phantom gravity and correcting virtual drift, but the smell of ozone and heated metal in the hangar was a visceral reminder that the stakes had shifted. <br />The next four hours disappeared into a blur of methodical labor. Julian worked with a quiet, focused intensity, his movements rhythmic as he tightened the shims and verified the seals. There were no grand gestures, just the steady clink of tools and the occasional sigh of relief when a bolt seated perfectly. It was the kind of painstaking preparation that felt like an excavation, peeling back layers of mechanical failure to find the stable core beneath. By the time the chief engineer signed off on the flight manifest, the sun had dipped below the horizon ofthe colony, casting long, amber shadows across the landing strip.",
        ]);
        Post::factory()->create([
            'foreignId' => '1',
            'title' => "Cthulhu Speaks",
            "description" => "Existential dread",
            "content" => "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
        ]);
    }
}
