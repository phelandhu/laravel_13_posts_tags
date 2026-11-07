import story_list from '../../data/story_list.json';
import { useRef } from 'react';
import { useParams } from 'react-router-dom';

function StoryShow() {
    const initialized = useRef(false)

    const { id } = useParams();

    if (!initialized.current) {
        initialized.current = true
        console.log("id", id);
        let storyID = Number(id);
        const targetStory: Story | undefined = story_list.data.find(obj => obj.id === storyID);
        console.log("targetStory", targetStory?.content);

        return (
            <div>{targetStory?.content}</div>
        );
    } else {
        return (
            <div>File not found</div>
        );
    }
}

export default StoryShow