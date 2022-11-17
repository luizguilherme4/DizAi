import { useState } from "react";

// importando os componentes
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';

export default function Home() {
    // posts é o estado e setPosts é a função que modifica o estado
    // note que o estado inicial é um array vazio
    const [posts, setPosts] = useState([])
    
    function handleSubmit({ history, userName }) {
        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName,
                publishedAt: new Date(),
            }
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