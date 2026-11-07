import { Tooltip } from 'react-tooltip'

interface Tag {
    id: number;
    name: string;
    description: string;
}

function StoryTag({ tag }: { tag: Tag }) {
    return (
        <>
            <span className="py-1 px-3 rounded-full text-sm text-black bg-blue-500" id={`my-anchor-element-id-${tag.id}`}>
                <a href={`/tags/${tag.id}`}>
                    <span className="my-tags">{tag.name}</span>
                </a>
                <Tooltip
                    // Don't forget the `#`!
                    anchorSelect={`#my-anchor-element-id-${tag.id}`}
                    content={tag.description}
                />
            </span>
        </>
    );
}

export default StoryTag;