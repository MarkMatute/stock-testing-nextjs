/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { News } from "../models/news";

interface NewsCardProps {
  news: News;
}

export function NewsCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-48 bg-gray-300 rounded"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
      </div>
      <div className="p-4">
        <div className="h-10 bg-gray-300 rounded w-32"></div>
      </div>
    </div>
  );
}

export default function NewsCard(props: NewsCardProps) {
  const {
    news: { title, summary, url, banner_image, authors, topics = [] },
  } = props;
  return (
    <div className="card bordered shadow-lg">
      <figure>
        <img src={banner_image} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-secondary">{authors.join(",")}</p>
        <p>{summary}</p>
        <div className="flex flex-wrap gap-2">
          {topics.map(({ topic }) => (
            <span key={topic} className="badge badge-secondary">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className="card-footer p-4">
        <Link className="btn btn-primary" href={url} target="_blank">
          Read more
        </Link>
      </div>
    </div>
  );
}
