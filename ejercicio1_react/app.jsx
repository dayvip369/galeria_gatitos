function App() {
    return (
        <main className="min-h-screen bg-white py-12 px-6">

            {/* Cabecera */}
            <header className="max-w-7xl mx-auto mb-12 text-center">

                <h1 className="text-5xl font-bold text-zinc-900 mb-4">
                    Kitten's Galley
                </h1>

                <p className="text-lg text-zinc-500">
                    Consejos, curiosidades y todo lo que necesitas saber sobre tu gato
                </p>

            </header>

            {/* Posts */}
            <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {posts.map((post) => (
                    <Post
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        content={post.content}
                        image={post.image}
                        created_at={post.created_at}
                    />
                ))}

            </section>

        </main>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<App />);