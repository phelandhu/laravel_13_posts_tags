import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({ post }) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        content: post.content,
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/posts/${post.id}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                />
                {errors.title && <div>{errors.title}</div>}
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea
                    value={data.body}
                    onChange={(e) => setData('body', e.target.value)}
                />
                {errors.content && <div>{errors.content}</div>}
            </div>
            <div>
                <label htmlFor="file">File</label>
                <input
                    type="file"
                    onChange={(e) => setData('file', e.target.files[0])}
                />
                {errors.file && <div>{errors.file}</div>}
            </div>
            <button type="submit" disabled={processing}>
                Update Post
            </button>
        </form>
    );
}