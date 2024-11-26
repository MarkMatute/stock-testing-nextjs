export const NewsTopics = [
  { value: "blockchain", label: "Blockchain" },
  { value: "earnings", label: "Earnings" },
  { value: "ipo", label: "IPO" },
  { value: "mergers_and_acquisitions", label: "Mergers & Acquisitions" },
  { value: "financial_markets", label: "Financial Markets" },
  { value: "economy_fiscal", label: "Economy - Fiscal Policy" },
  { value: "economy_monetary", label: "Economy - Monetary Policy" },
  { value: "economy_macro", label: "Economy - Macro/Overall" },
  { value: "energy_transportation", label: "Energy & Transportation" },
  { value: "finance", label: "Finance" },
  { value: "life_sciences", label: "Life Sciences" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "real_estate", label: "Real Estate & Construction" },
  { value: "retail_wholesale", label: "Retail & Wholesale" },
  { value: "technology", label: "Technology" }
];

interface Topic {
  topic: string;
}

export interface News {
  title: string;
  url: string;
  time_published: string;
  authors: string[];
  summary: string;
  banner_image: string;
  source: string;
  category_within_source: string;
  source_domain: string;
  topics: Topic[];
  overall_sentiment_score: number;
  overall_sentiment_label: string;
  ticker_sentiment: string[];
}
