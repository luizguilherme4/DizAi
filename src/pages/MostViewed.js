import Feed from "../components/Feed"

export default function MostViewed() {
    const posts = [{
        id: Math.random(),
        content: 'Olá! Esse é meu novo projeto React :)',
        userName: 'Luiz Desenvolvedor Front-End',
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