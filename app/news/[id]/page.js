export default function NewsDetailPage({ params }) {
    const newsId = params.id
    return (
        <main>
            <h1>News Detail Page</h1>
            <p>{newsId}</p>
        </main>
    )
}