import Feed from "../components/Feed"

export default function MostViewed() {
    const posts = [{
        id: Math.random(),
        content: 'content',
        userName: 'Luiz',
        publishedAt: new Date(),
    }
];

    return (
        <main>
            <Feed 
            posts={posts}
            title="Mais vistos"
            subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade" 
            />
        </main>
    );
}