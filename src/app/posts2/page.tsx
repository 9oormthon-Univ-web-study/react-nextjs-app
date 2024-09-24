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
    const res = await fetch(
        'http://127.0.0.1:8090/api/collections/posts/records',
        { cache: 'no-store' } /* 캐시 저장 안하도록 */
    );
    const data = await res.json();
    return data?.items as Post[];
};

const PostPage = async () => {
    const posts = await getPost();
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
        <Link href={`posts2/${id}`}>
            <div>
                <h3>{title}</h3>
                <p>{created}</p>
            </div>
        </Link>
    );
};
