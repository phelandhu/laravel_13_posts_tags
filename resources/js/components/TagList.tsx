import tag_list from '../../data/tag_list.json';
import StoryTag from './Tag';

interface Tag {
    id: number;
    name: string;
    description: string;
}

function TagList() {
    const tags: Tag[] = tag_list.data;

    return (
        <>
            <aside className="panel panel--left overflow-y-auto">
                <div className="sticky top-0">
                    <h2>Story Tags</h2>
                </div>
                <div id="menu_list" className="my_tags">
                    {tags.map((tag) => (
                        <p key={tag.id}>
                        <StoryTag key={tag.id} tag={tag} />
                        </p>
                    ))}
                </div>
            </aside>
        </>
    )
}

export default TagList