import React from 'react';
import { StarIcon, TeenIcon, AdultIcon, ChildIcon, ArrowRightIcon, HeartIcon, ShareIcon, ChevronDownIcon } from './Icons.js';

const featuredDevotionals = [
  {
    id: 1,
    category: 'Faith',
    readTime: '5 min',
    ageGroup: 'Teens',
    date: 'Jan 15',
    title: 'Walking in Faith',
    description: "Discover how to trust God's plan even when the path seems unclear. Learn to take steps of faith in your daily walk.",
    image: 'https://picsum.photos/seed/faith-d/400/200',
  },
  {
    id: 2,
    category: 'Prayer',
    readTime: '7 min',
    ageGroup: 'Adults',
    date: 'Jan 13',
    title: 'Finding Peace in Prayer',
    description: 'Learn how prayer can bring calm to your anxious heart and connect you deeper with God’s presence.',
    image: 'https://picsum.photos/seed/prayer-d/400/200',
  },
  {
    id: 3,
    category: 'Wisdom',
    readTime: '6 min',
    ageGroup: 'Adults',
    date: 'Jan 10',
    title: 'Wisdom for Decisions',
    description: "Learn how to seek God's wisdom when making important choices in life and relationships.",
    image: 'https://picsum.photos/seed/wisdom-d/400/200',
  },
];

const allDevotionals = [
    ...featuredDevotionals,
  {
    id: 4,
    category: 'Love',
    readTime: '3 min',
    ageGroup: 'Children',
    date: 'Jan 14',
    title: "God's Love Never Fails",
    description: "Explore the unconditional love of God and how it transforms our hearts and relationships with others.",
    image: 'https://picsum.photos/seed/love-d/400/200',
  },
  {
    id: 5,
    category: 'Courage',
    readTime: '4 min',
    ageGroup: 'Teens',
    date: 'Jan 12',
    title: 'Courage for Today',
    description: "Discover how God gives us strength and courage to face each day's challenges with confidence.",
    image: 'https://picsum.photos/seed/courage-d/400/200',
  },
  {
    id: 6,
    category: 'Gratitude',
    readTime: '3 min',
    ageGroup: 'Children',
    date: 'Jan 11',
    title: 'Gratitude Changes Everything',
    description: 'Explore how a thankful heart transforms our perspective and brings joy to everyday moments.',
    image: 'https://picsum.photos/seed/gratitude-d/400/200',
  },
  {
    id: 7,
    category: 'Hope',
    readTime: '5 min',
    ageGroup: 'Teens',
    date: 'Jan 9',
    title: 'Hope in Hard Times',
    description: 'Find encouragement and hope when facing difficult seasons, knowing God is always with you.',
    image: 'https://picsum.photos/seed/hope-d/400/200',
  },
    {
    id: 8,
    category: 'Service',
    readTime: '4 min',
    ageGroup: 'Children',
    date: 'Jan 8',
    title: 'Serving Others with Joy',
    description: "Discover the joy that comes from serving others and how it reflects God's heart for humanity.",
    image: 'https://picsum.photos/seed/service-d/400/200',
  },
];

const AgeIcon = ({ ageGroup }) => {
    switch (ageGroup) {
        case 'Teens': return <TeenIcon className="w-4 h-4" />;
        case 'Adults': return <AdultIcon className="w-4 h-4" />;
        case 'Children': return <ChildIcon className="w-4 h-4" />;
        default: return null;
    }
}

const DevotionalCard = ({ devotional, isFeatured }) => (
    <div className={`rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 flex flex-col ${isFeatured ? 'bg-white border-4 border-yellow-400' : 'bg-white'}`}>
        <div className="relative">
            {isFeatured && (
                <div className="absolute top-0 left-0 bg-yellow-400 px-3 py-1 flex items-center gap-1.5 rounded-br-lg z-10">
                    <StarIcon className="w-4 h-4 text-yellow-900" />
                    <span className="text-xs font-bold text-yellow-900">Featured</span>
                </div>
            )}
            <img className="w-full h-48 object-cover" src={devotional.image} alt={devotional.title} />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
                <span className="bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full">{devotional.category}</span>
                <span className="bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-full">{devotional.readTime}</span>
            </div>
        </div>
        <div className="p-5 flex flex-col flex-grow">
            <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                <div className="flex items-center gap-1.5">
                    <AgeIcon ageGroup={devotional.ageGroup} />
                    <span>{devotional.ageGroup}</span>
                </div>
                <span>{devotional.date}</span>
            </div>
            <h3 className={`text-lg font-bold ${isFeatured ? 'text-blue-600' : 'text-gray-900'}`}>{devotional.title}</h3>
            <p className="text-gray-600 text-sm mt-1 flex-grow">{devotional.description}</p>
            <div className="flex justify-between items-center mt-4">
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    Read More <ArrowRightIcon className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                    <button className="hover:text-pink-500"><HeartIcon className="w-5 h-5" /></button>
                    <button className="hover:text-blue-500"><ShareIcon className="w-5 h-5" /></button>
                </div>
            </div>
        </div>
    </div>
);


const DevotionalsList = () => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Devotionals */}
        <section>
          <div className="flex items-center gap-2">
            <StarIcon className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-900">Featured Devotionals</h2>
          </div>
          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredDevotionals.map(d => <DevotionalCard key={d.id} devotional={d} isFeatured />)}
          </div>
        </section>

        {/* All Devotionals */}
        <section className="mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">All Devotionals ({allDevotionals.length})</h2>
            <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-sm font-medium text-gray-700">Sort by:</label>
                <div className="relative">
                    <select id="sort" className="pl-3 pr-8 py-2 text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                        <option>Newest First</option>
                        <option>Oldest First</option>
                        <option>Most Popular</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <ChevronDownIcon className="w-4 h-4" />
                    </div>
                </div>
            </div>
          </div>
          <div className="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {allDevotionals.map(d => <DevotionalCard key={d.id} devotional={d} />)}
          </div>
        </section>
      </div>
    </main>
  );
};

export default DevotionalsList;
