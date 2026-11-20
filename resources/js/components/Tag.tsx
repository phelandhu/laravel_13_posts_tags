import { Tooltip } from 'react-tooltip'
import { Link } from '@inertiajs/react'

interface Tag {
    id: number;
    title: string;
    description: string;
}

function StoryTag({ tag }: { tag: Tag }) {
    return (
        <>
            <span className="py-1 px-3 rounded-full text-sm text-black bg-blue-500" id={`my-anchor-element-id-${tag.id}`}>
                <Link href={`/tags/${tag.id}`}>
                    <span className="my-tags">{tag.title}</span>
                </Link>
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