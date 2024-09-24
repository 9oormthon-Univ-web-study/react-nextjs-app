'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const router = useRouter(); // 새로고침되게 선언
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await fetch(`http://127.0.0.1:8090/api/collections/posts/records`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
            }),
        });
        setTitle('');
        router.refresh(); // 새로고침 호출(state 손실 X)
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={handleInput} />
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
