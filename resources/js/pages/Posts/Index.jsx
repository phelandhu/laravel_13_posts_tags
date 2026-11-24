import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function Index() {
    const { posts } = usePage().props;

    return (
        <div>
            <h1>Posts</h1>
            <Link href="/posts/create">Create Post</Link>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}/edit`}>{post.title}</Link>
                        <p><Link href={`/posts/${post.id}/show`}>View</Link></p>
                    </li>
                ))}
            </ul>
        </div>
    );
}