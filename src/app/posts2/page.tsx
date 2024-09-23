import Link from 'next/link';
import React from 'react';

interface Post {
    collectionId: string;
    collectionName: string;
    created: string;
    id: string;
    title: string;
    updated: string;
}

const getPost = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records');
    const data = await res.json();
    return data?.items as Post[];
};

const PostPage = async () => {
    const posts = await getPost();
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            {posts?.map((post) => {
                return <PostItem key={post.id} post={post} />;
            })}
        </div>
    );
};

export default PostPage;

const PostItem = ({ post }: { post: Post }) => {
    const { id, title, created } = post || {};
    return (
        <Link href={`posts/${id}`}>
            <div>
                <h3>{title}</h3>
                <p>{created}</p>
            </div>
        </Link>
    );
};
