function Post({ title, description, content, image, created_at }) {
    return (
        <article className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-zinc-700 transition duration-300 flex flex-col">

            {/* Imagen */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-1">

                {/* Fecha */}
                <p className="text-sm text-zinc-500 mb-3">
                    {created_at}
                </p>

                {/* Título */}
                <h2 className="text-2xl font-bold text-white mb-4">
                    {title}
                </h2>

                {/* Descripción */}
                <p className="text-zinc-300 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Contenido */}
                <p className="text-zinc-400 leading-relaxed text-sm mb-6">
                    {content}
                </p>

            </div>

        </article>
    );
}