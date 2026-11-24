import react, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/posts');
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
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
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
            <button type="submit">
                Create Post
            </button>
        </form>
    );
}