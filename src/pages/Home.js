import { useState } from "react";

import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

export default function Home() {
    const [posts, setPosts] = useState([])

    function handleSubmit({ history, userName }) {
        setPosts([
            {
                id: Math.random(),
                content: history,
                userName,
                publishedAt: new Date(),
            },
            ...posts,
        ]);
    }

    return (
        <>
            <PostForm onSubmit={handleSubmit} />
            <main>
                <Feed
                    posts={posts}
                    title="Seu feed"
                    subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
                />
            </main>
        </>
    )
}