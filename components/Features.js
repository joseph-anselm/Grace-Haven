import React from 'react';
import { BookIcon, UserGroupIcon, GameControllerIcon, CalendarCheckIcon, HeartIcon, FamilyIcon } from './Icons'

const features = [
  {
    icon: <BookIcon className="w-6 h-6 text-white" />,
    bgColor: 'bg-blue-500',
    title: 'Daily Devotionals',
    description: 'Fresh, engaging content every day that speaks to young hearts and minds with biblical wisdom and practical life applications.',
  },
  {
    icon: <UserGroupIcon className="w-6 h-6 text-white" />,
    bgColor: 'bg-purple-500',
    title: 'Age-Specific Content',
    description: 'Carefully crafted devotions for different age groups - from children (8-12) to teens (13-19) and young adults (19+).',
  },
  {
    icon: <GameControllerIcon className="w-6 h-6 text-white" />,
    bgColor: 'bg-green-500',
    title: 'Interactive Activities',
    description: 'Fun games, puzzles, and creative exercises that make learning about faith enjoyable and memorable for young people.',
  },
  {
    icon: <CalendarCheckIcon className="w-6 h-6 text-white" />,
    bgColor: 'bg-orange-500',
    title: 'Reading Plans',
    description: 'Structured Bible reading plans designed to guide young believers through Scripture in an age-appropriate way.',
  },
  {
    icon: <HeartIcon className="w-6 h-6 text-white" />,
    bgColor: 'bg-pink-500',
    title: 'Prayer Guides',
    description: 'Simple, meaningful prayer templates and guides that help children and teens develop a personal relationship with God.',
  },
  {
    icon: <FamilyIcon className="w-6 h-6 text-white" />,
    bgColor: 'bg-indigo-500',
    title: 'Family Resources',
    description: 'Tools and content for families to grow together in faith, including discussion questions and family devotion ideas.',
  },
];

const FeatureCard = ({ icon, bgColor, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${bgColor}`}>
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-base text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Everything You Need for <span className="text-blue-600">Spiritual Growth</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Our comprehensive platform provides all the tools and resources needed to nurture faith in children, teens, and young adults through engaging, age-appropriate content.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;