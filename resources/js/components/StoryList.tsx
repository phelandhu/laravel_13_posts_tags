import story_list from '../../data/story_list.json';
import StoryTag from './Tag';

interface Story {
    id: number; // Unique identifier
    name: string; // Display text
    tags: { id: number; name: string; description: string }[]; // Tags for the story
    description: string; // Story description
    content: string;  // Story
}

function StoryList() {
    const stories: Story[] = story_list.data;

    return (
        <>
            <div className="cards">                        
                {stories.map((story) => (
                <article className="card" key={story.id}>
                    <div>
                        <span><a href={`/story/${story.id}`}>{story.name}</a></span> - {story.description}
                    </div>
                    {story.tags.map((tag) => (
                        <StoryTag key={tag.id} tag={tag} />
                    ))}
                </article>
                ))}
            </div>
                                    
        </>
    )
}

export default StoryList