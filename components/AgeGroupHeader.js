"use client"
import React, { useState } from 'react';

const ageFilters = ['All Ages', 'Children', 'Teens', 'Young', 'Adults', 'Seniors'];

const AgeGroupHeader = () => {
  const [activeFilter, setActiveFilter] = useState('All Ages');

  return (
    <header className="bg-[#F3F6FA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
          Devotionals for Every Age
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Discover age-appropriate devotionals designed to meet you exactly where you are in your faith journey
        </p>
        <div className="mt-8 flex justify-center items-center flex-wrap gap-3">
          {ageFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors duration-200 text-base
                ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default AgeGroupHeader;