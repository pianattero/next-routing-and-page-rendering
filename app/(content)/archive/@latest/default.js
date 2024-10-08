import NewsList from "@/components/news-list/news-list";
import { getLatestNews } from "@/lib/news"

export default async function LatestNewsPage() {
    const latestNews = await getLatestNews();

    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={latestNews}/>
        </>
    )
}

//! esta página siempre se va a mostrar en /archive/.. no importa el path que sea (mientras la ruta empiece con /archive)