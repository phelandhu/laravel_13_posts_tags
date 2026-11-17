import { useState, useEffect } from "react";
import axios from "axios";
import story_list from '../../data/story_list.json';
import StoryTag from './Tag';
import { config } from "@/config";

interface Story {
    id: number; // Unique identifier
    name: string; // Display text
    tags: { id: number; name: string; description: string }[]; // Tags for the story
    description: string; // Story description
    content: string;  // Story
}

function StoryList() {
//    const stories: Story[] = story_list.data;
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);
      const res = await axios.get(`${config.apiBaseUrl}/api/stories`);
      setStories(res.data);
      setLoading(false);
    };
    loadStories();
  }, []);

    return (
        <>
            <div className="cards">
                {
                loading ? <p>Loading...</p> : Array.isArray(stories.data) && stories.data.map((story) => (
                <article className="card" key={story.id}>
                    <div>
                        <span><a href={`/story/${story.id}`}>{story.title}</a></span> - {story.description}
                    </div>
                    {Array.isArray(story.tags) && story.tags.map((tag) => (
                        <StoryTag key={tag.id} tag={tag} />
                    ))}
                </article>
                ))}
            </div>
                                    
        </>
    )
}

export default StoryList