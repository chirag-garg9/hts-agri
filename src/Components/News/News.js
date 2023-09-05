import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';

const News = () => {
  const [news, setNews] = useState([]);
  const apiKey = 'e3a55d07bc774104bf82cc9082d2461f'; // Replace with your API key

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = `https://newsapi.org/v2/everything?q=agriculture&apiKey=${apiKey}`;

    // Fetch news data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API response has an array of articles under the key 'articles'
        setNews(data.articles);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Agriculture News</h1>
      <NewsList news={news} />
    </div>
  );
};

export default News;