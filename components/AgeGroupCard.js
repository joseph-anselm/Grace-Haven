import React from 'react';
import { CheckIcon } from './Icons.js';

const ageGroupsData = [
  {
    tag: 'Children (5-12)',
    tagColor: 'bg-orange-100 text-orange-800',
    imageUrl: 'https://picsum.photos/seed/child-art/400/200',
    title: 'Children (5-12)',
    description: 'Fun, interactive devotionals that help young hearts discover God\'s love through stories, activities, and simple truths.',
    stats: [
      { value: 25, label: 'Devotionals', color: 'text-blue-600' },
      { value: 40, label: 'Activities', color: 'text-green-600' },
      { value: 15, label: 'Topics', color: 'text-purple-600' },
    ],
    features: [
      'Colorful Illustrations',
      'Interactive Activities',
      'Simple Language',
      'Memory Verses',
      'Fun Quizzes',
    ],
    buttonText: 'Explore Children Devotionals',
  },
  {
    tag: 'Teens (13-18)',
    tagColor: 'bg-purple-100 text-purple-800',
    imageUrl: 'https://picsum.photos/seed/teen-group/400/200',
    title: 'Teens (13-18)',
    description: 'Real-world devotionals addressing the challenges teens face while building a strong foundation of faith.',
    stats: [
      { value: 30, label: 'Devotionals', color: 'text-blue-600' },
      { value: 25, label: 'Activities', color: 'text-green-600' },
      { value: 20, label: 'Topics', color: 'text-purple-600' },
    ],
    features: [
      'Real-Life Applications',
      'Peer Discussions',
      'Identity & Purpose',
      'Relationship Guidance',
      'Leadership Skills',
    ],
    buttonText: 'Explore Teens Devotionals',
  },
  {
    tag: 'Young Adults (19-35)',
    tagColor: 'bg-blue-100 text-blue-800',
    imageUrl: 'https://picsum.photos/seed/young-adult/400/200',
    title: 'Young Adults (19-35)',
    description: 'Navigate life transitions, career decisions, and relationships with devotionals focused on purpose and growth.',
    stats: [
      { value: 35, label: 'Devotionals', color: 'text-blue-600' },
      { value: 20, label: 'Activities', color: 'text-green-600' },
      { value: 25, label: 'Topics', color: 'text-purple-600' },
    ],
    features: [
      'Career Guidance',
      'Relationship Wisdom',
      'Life Transitions',
      'Financial Stewardship',
      'Community Building',
    ],
    buttonText: 'Explore Young Devotionals',
  },
  {
    tag: 'Adults (36-55)',
    tagColor: 'bg-green-100 text-green-800',
    imageUrl: 'https://picsum.photos/seed/adult-group/400/200',
    title: 'Adults (36-55)',
    description: 'Deepen your faith while managing family, career, and life responsibilities with practical wisdom.',
    stats: [
      { value: 40, label: 'Devotionals', color: 'text-blue-600' },
      { value: 15, label: 'Activities', color: 'text-green-600' },
      { value: 30, label: 'Topics', color: 'text-purple-600' },
    ],
    features: [
      'Family Leadership',
      'Parenting Wisdom',
      'Marriage Enrichment',
      'Work-Life Balance',
      'Spiritual Maturity',
    ],
    buttonText: 'Explore Adults Devotionals',
  },
  {
    tag: 'Seniors (55+)',
    tagColor: 'bg-indigo-100 text-indigo-800',
    imageUrl: 'https://picsum.photos/seed/senior-group/400/200',
    title: 'Seniors (55+)',
    description: 'Reflect on God\'s faithfulness through life\'s seasons and find peace, wisdom, and continued purpose.',
    stats: [
      { value: 28, label: 'Devotionals', color: 'text-blue-600' },
      { value: 12, label: 'Activities', color: 'text-green-600' },
      { value: 22, label: 'Topics', color: 'text-purple-600' },
    ],
    features: [
      'Life Reflection',
      'Legacy Building',
      'Health & Healing',
      'Grandparent Guidance',
      'Eternal Perspective',
    ],
    buttonText: 'Explore Seniors Devotionals',
  },
];

const AgeCard = ({ data }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
    <div className="relative">
      <img src={data.imageUrl} alt={data.title} className="w-full h-48 object-cover" />
      <span className={`absolute top-4 left-4 px-3 py-1 text-sm font-semibold rounded-full ${data.tagColor}`}>
        {data.tag}
      </span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-900">{data.title}</h3>
      <p className="mt-2 text-sm text-gray-600 flex-grow">{data.description}</p>
      
      <div className="grid grid-cols-3 text-center my-6">
        {data.stats.map(stat => (
          <div key={stat.label}>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <ul className="space-y-3">
        {data.features.map(feature => (
          <li key={feature} className="flex items-center">
            <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
        {data.buttonText}
      </button>
    </div>
  </div>
);


const AgeGroupCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {ageGroupsData.map(group => (
            <AgeCard key={group.title} data={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupCards;