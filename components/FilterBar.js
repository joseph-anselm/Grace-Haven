"use client"
import React, { useState } from 'react';
import { SearchIcon, GridIcon, FaithIcon, HeartIcon, PrayerIcon, CourageIcon, GratitudeIcon, WisdomIcon, HopeIcon, ServiceIcon, UserGroupIcon, ChildIcon, TeenIcon, AdultIcon } from './icons.js';

const topics = [
  { name: 'All Topics', icon: <GridIcon className="w-5 h-5" /> },
  { name: 'Faith', icon: <FaithIcon className="w-5 h-5" /> },
  { name: 'Love', icon: <HeartIcon className="w-5 h-5" /> },
  { name: 'Prayer', icon: <PrayerIcon className="w-5 h-5" /> },
  { name: 'Courage', icon: <CourageIcon className="w-5 h-5" /> },
  { name: 'Gratitude', icon: <GratitudeIcon className="w-5 h-5" /> },
  { name: 'Wisdom', icon: <WisdomIcon className="w-5 h-5" /> },
  { name: 'Hope', icon: <HopeIcon className="w-5 h-5" /> },
  { name: 'Service', icon: <ServiceIcon className="w-5 h-5" /> },
];

const ageGroups = [
  { name: 'All Ages', icon: <UserGroupIcon className="w-5 h-5" /> },
  { name: 'Children', icon: <ChildIcon className="w-5 h-5" /> },
  { name: 'Teens', icon: <TeenIcon className="w-5 h-5" /> },
  { name: 'Adults', icon: <AdultIcon className="w-5 h-5" /> },
];

const FilterButton = ({ name, icon, isActive, onClick }) => {
  const baseClasses = "flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-colors duration-200 text-sm";
  const activeClasses = "bg-blue-600 text-white shadow-md";
  const inactiveClasses = "bg-gray-200 text-gray-700 hover:bg-gray-300";
  const activeAgeClasses = "bg-green-600 text-white shadow-md";
  
  let finalActiveClasses = activeClasses;
  if (name.includes("Ages")) {
    finalActiveClasses = activeAgeClasses;
  }

  return (
    <button
      onClick={() => onClick(name)}
      className={`${baseClasses} ${isActive ? finalActiveClasses : inactiveClasses}`}
    >
      {icon}
      <span>{name}</span>
    </button>
  );
};

const FilterBar = () => {
  const [activeTopic, setActiveTopic] = useState('All Topics');
  const [activeAgeGroup, setActiveAgeGroup] = useState('All Ages');

  return (
    <section className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="p-3 border border-gray-300 rounded-lg">
              <SearchIcon className="w-6 h-6 text-gray-500" />
            </div>
            <span className="font-semibold text-gray-800 hidden lg:block">Topics:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {topics.map(topic => (
              <FilterButton
                key={topic.name}
                name={topic.name}
                icon={topic.icon}
                isActive={activeTopic === topic.name}
                onClick={setActiveTopic}
              />
            ))}
          </div>
          
          <div className="border-l border-gray-300 h-12 mx-4 hidden lg:block"></div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span className="font-semibold text-gray-800 hidden lg:block">Age Group:</span>
             <div className="flex flex-wrap items-center gap-3">
                {ageGroups.map(age => (
                  <FilterButton
                    key={age.name}
                    name={age.name}
                    icon={age.icon}
                    isActive={activeAgeGroup === age.name}
                    onClick={setActiveAgeGroup}
                  />
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
