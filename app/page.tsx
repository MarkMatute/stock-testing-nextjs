"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { getNews } from "./services/news";
import NewsCard, { NewsCardSkeleton } from "./components/news-card";
import { News } from "./models/news";
import ButtonNewsFilter from "./components/button-news-filter";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function Home() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const paramsTickers = searchParams.get("tickers") || "AAPL";
  const paramsTopics = searchParams.get("topics") || "earnings";

  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<News[]>([]);

  const getNewsData = useCallback(
    async ({ tickers, topics = [] }: { tickers: string; topics: string[] }) => {
      const data = await getNews({
        tickers,
        topics,
      });
      setNews(data);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    getNewsData({ tickers: paramsTickers, topics: paramsTopics.split(",") });
  }, [getNewsData, paramsTickers, paramsTopics]);

  useEffect(() => {
    getNewsData({ tickers: paramsTickers, topics: paramsTopics.split(",") });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleFilter({
    tickers,
    topics = [],
  }: {
    tickers: string;
    topics: string[];
  }) {
    const urlparams = new URLSearchParams(searchParams);
    if (tickers) {
      urlparams.set("tickers", tickers);
    } else {
      urlparams.delete("tickers");
    }

    if (topics.length) {
      urlparams.set("topics", topics.join(","));
    } else {
      urlparams.delete("topics");
    }

    replace(`${pathname}?${urlparams.toString()}`);
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Latest News</h1>
        <ButtonNewsFilter handleFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading &&
          [...Array(6)].map((_, index) => <NewsCardSkeleton key={index} />)}
        {!loading &&
          news.map((item) => <NewsCard key={item.title} news={item} />)}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
