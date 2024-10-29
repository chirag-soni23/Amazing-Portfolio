import React from 'react';
import { Data } from '../context/Data.js';

const Blog = () => {
  return (
    <div className="w-full mt-20 flex items-center flex-col gap-10 px-4">
      <h1 className="uppercase font-bold text-2xl md:text-3xl text-white text-center">
        My <span className="text-[#08D665]">blog</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl cursor-pointer uppercase">
        {Data.map((ele, i) => (
          <div key={i} className="group bg-black text-white rounded-lg overflow-hidden transition-shadow duration-300 shadow-gray-600 shadow-2xl">
            <img src={ele.image} alt={ele.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2 group-hover:text-[#08D665] transition-colors duration-300">{ele.title}</h1>
              <small className="text-gray-400"><span className='text-[#08D665]'>{ele.completed}</span> | Design</small>
              <p className="mt-2 text-sm">{ele.paragraph}</p>
              <button className="bg-[#08D665] rounded-full p-2 text-white mt-4 transition-transform transform hover:scale-105 px-8">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
