import React from 'react';

const Card = ({ image, title, subtitle, description, link}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200 bg-opacity-60">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-center">{title}</div>
        <p className="text-gray-700 text-base mb-2 flex justify-center">{subtitle}</p>
        <p className="text-gray-600 text-sm flex justify-center">{description?description.slice(0,250): " "}</p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <a href={link} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex justify-center">Read More</a>       
      </div>
    </div>
  );
};

export default Card;
