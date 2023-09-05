import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ news }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {news.map((article, index) => (
        <NewsCard key={index} title={article.title} content={article.content} />
      ))}
    </div>
  );
};

export default NewsList;
