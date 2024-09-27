import Link from "next/link";
import { Suspense } from "react";

import NewsList from "@/components/news-list/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

async function FilteredNews({ year, month }) {
    let news;
    let newsContent = <p>No news found for the selected period.</p>;

    if (year && !month) news = await getNewsForYear(year); 
    else if (year && month) news = await getNewsForYearAndMonth(year, month); 

    if (news && news.length > 0 ) newsContent = <NewsList news={news} />;

    return newsContent
}

async function FilteredHeader({ year, month }) {
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;

    if (
        (year && !availableYears.includes(year)) ||
        (month && !getAvailableNewsMonths(year).includes(month))
    ) {
        throw new Error('Invalid filter')
    }
    
    if (year && !month) links = getAvailableNewsMonths(year);
    
    if (year && month) links = [];
    
    return (
        <header id="archive-header">
            <nav>
                <ul>
                    {links.map(link => {
                        const href = year ? `/archive/${year}/${link}` : `/archive/${link}` 

                        return (
                            <li key={link}>
                                <Link href={href}>{link}</Link>
                            </li>
                            );
                        })}
                </ul>
            </nav>
        </header>
    )
}

export default async function FilteredNewsPage({ params }) {
    const filter = params.filter;

    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    return (
        <>
            <Suspense fallback={<p>Loading filter...</p>}>
                <FilteredHeader year={selectedYear} month={selectedMonth}/>
            </Suspense>
            <Suspense fallback={<p>Loading news...</p>}>
                <FilteredNews year={selectedYear} month={selectedMonth} />
            </Suspense>
        </>
    )
}