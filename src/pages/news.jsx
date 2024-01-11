import React from "react";
import { useQuery } from 'react-query';

const gnewsApiKey = import.meta.env.VITE_REACT_APP_GNEWS_API_KEY;

const fetchNews = async (NameNews) => {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=${NameNews}&token=${gnewsApiKey}&lang=en&max=8`
  );
  const data = await res.json();
  return data.articles;
};

const News = ({ NameNews }) => {
  const { data, error, isLoading } = useQuery(['news', NameNews], () => fetchNews(NameNews));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching news data: {error.message}</p>;
  }

  const handleReadMore = (url) => {
    window.location.href = url;
  };

  return (
    <div className="p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      {data.map((p, index) => (
        <div className="flex p-8" key={index}>
          <div className="max-w-sm flex flex-col rounded-lg overflow-hidden bg-gray-800">
            <img className="w-full" src={p.image} alt={p.title} />
            <div className="px-6 py-3">
              <div className="font-bold text-xl mb-2 text-gray-300">
                {p.title}
              </div>
              <p className="text-gray-400">{p.description}</p>
              <button
                className="mt-5 bg-gray-500 hover:bg-gray-400 rounded-full px-3 font-bold text-gray-900 text-xl"
                onClick={() => handleReadMore(p.url)}
              >
                Read more
              </button>
            </div>
            <div className="px-3 pt-3 pb-3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
