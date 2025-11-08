import React from 'react';
import { UserGroupIcon, CheckCircleIcon, ArrowRightIcon, GraduationCapIcon } from './Icons';

const GlobeIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.75 9h16.5m-16.5 6h16.5M12 3v18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9a15.75 15.75 0 0116.5 0M3.75 15a15.75 15.75 0 0116.5 0" />
    </svg>
);


const ageGroups = [
  {
    tag: 'Building Foundation',
    tagColor: 'bg-blue-500 text-white',
    title: 'Kids (8-12)',
    description: 'Fun, colorful devotions with simple Bible stories, interactive games, and activities that help young children understand God\'s love and basic Christian values.',
    features: [
      'Illustrated Bible stories',
      'Fun activities & games',
      'Simple prayer guides',
      'Character building lessons',
    ],
    imageUrl: 'https://picsum.photos/seed/kids/600/400',
    icon: <GlobeIcon className="w-8 h-8 text-white" />,
    iconBg: 'bg-blue-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    tag: 'Discovering Purpose',
    tagColor: 'bg-purple-500 text-white',
    title: 'Teens (13-19)',
    description: 'Relevant, real-world devotions that address teenage challenges, relationships, identity, and faith questions with biblical wisdom and practical guidance.',
    features: [
      'Real-life applications',
      'Identity & purpose focus',
      'Peer relationship guidance',
      'Modern faith challenges',
    ],
    imageUrl: 'https://picsum.photos/seed/teens/600/400',
    icon: <UserGroupIcon className="w-8 h-8 text-white" />,
    iconBg: 'bg-purple-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    tag: 'Living Faith',
    tagColor: 'bg-green-500 text-white',
    title: 'Young Adults (19+)',
    description: 'Deep, thoughtful content for young adults navigating college, career, relationships, and life decisions while maintaining and growing their Christian faith.',
    features: [
      'Life transition guidance',
      'Career & calling focus',
      'Relationship wisdom',
      'Spiritual maturity growth',
    ],
    imageUrl: 'https://picsum.photos/seed/adults/600/400',
    icon: <GraduationCapIcon className="w-8 h-8 text-white" />,
    iconBg: 'bg-green-500',
    buttonColor: 'bg-blue-600 hover:bg-blue-700',
  },
];

const AgeSectionCard = ({ group, index }) => {
    const isReversed = index % 2 !== 0;

    return (
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            <div className="w-full lg:w-1/2 relative">
                <img src={group.imageUrl} alt={group.title} className="rounded-2xl shadow-lg w-full" />
                <div className={`absolute -top-6 ${isReversed ? 'lg:-right-6' : 'lg:-left-6'} ${isReversed ? '-right-4' : '-left-4'} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${group.iconBg}`}>
                    {group.icon}
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <span className={`inline-block px-4 py-1 text-sm font-semibold rounded-full ${group.tagColor}`}>{group.tag}</span>
                <h3 className="mt-4 text-3xl font-bold text-gray-900">{group.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{group.description}</p>
                <ul className="mt-6 space-y-3">
                    {group.features.map(feature => (
                        <li key={feature} className="flex items-center">
                            <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
                <button className={`mt-8 flex items-center justify-center gap-2 w-full sm:w-auto text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg ${group.buttonColor}`}>
                    <span>Explore {group.title.split(' ')[0]} Content</span>
                    <ArrowRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};


const AgeSections = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Devotions Tailored for Every <span className="text-blue-600">Age & Stage</span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            We understand that spiritual growth looks different at every age. Our content is specifically designed to meet young people where they are in their faith journey.
          </p>
        </div>
        <div className="mt-20 space-y-24">
            {ageGroups.map((group, index) => (
                <AgeSectionCard key={group.title} group={group} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AgeSections;