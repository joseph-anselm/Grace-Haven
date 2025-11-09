import React from 'react';
import { BookOpenIcon, ClockIcon, HeartIcon } from './Icons.js';

const DevotionalsHeader = () => {
  return (
    <header className="bg-[#EBF1F8] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1E293B] tracking-tight">
          Daily Devotionals
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Strengthen your faith with inspiring devotionals designed to guide you closer to God every day
        </p>
        <div className="mt-8 flex justify-center items-center gap-x-6 sm:gap-x-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <BookOpenIcon className="w-5 h-5" />
            <span>50+ Devotionals</span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="w-5 h-5" />
            <span>3-7 min reads</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon className="w-5 h-5" />
            <span>All ages</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DevotionalsHeader;