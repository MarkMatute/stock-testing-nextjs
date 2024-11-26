"use server";

import { News } from "../models/news";
import { ApiResponse } from "./api-response";
import NodeCache from "node-cache";

const newsCache = new NodeCache({ stdTTL: 60 * 60 }); // 1 hour

interface GetNewsParams {
  tickers: string;
  topics?: string[];
  sort?: string;
}

export async function getNews(params: GetNewsParams): Promise<News[]> {
  const { tickers, topics = [], sort } = params;

  let baseQueryString = `function=NEWS_SENTIMENT&apikey=${process.env.API_KEY}&limit=10&tickers=${tickers}`;

  if (topics.length) {
    baseQueryString += `&topics=${topics.join(',')}`
  }

  if (sort) {
    baseQueryString += `&sort=${sort}`;
  } 
  
  // serving from cache
  const cachedResponse = newsCache.get(baseQueryString);
  if (cachedResponse) {
    return cachedResponse as News[];
  }

  const response = await fetch(
    `https://www.alphavantage.co/query?${baseQueryString}`
  );

  const data = (await response.json()) as ApiResponse<News[]>;
  console.log(data);
  if (!data.feed) {
    return [];
  }
  
  newsCache.set(baseQueryString, data.feed);
  return data.feed;
}
