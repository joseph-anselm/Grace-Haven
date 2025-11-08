import React from 'react';
import { UserGroupIcon, CalendarIcon, HeartIcon, PlayIcon, BookOpenIcon, ChevronDownIcon } from './icons';

const FeatureCard = ({ icon, title, description, color }) => {
  return (
    <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl text-center flex flex-col items-center border border-white/10 h-full">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300 flex-grow">{description}</p>
    </div>
  );
};

const features = [
  {
    title: 'Age-Appropriate',
    description: 'Content tailored for kids, teens, and young adults',
    color: 'bg-blue-500/80',
  },
  {
    title: 'Daily Guidance',
    description: 'Fresh devotional content delivered every day',
    color: 'bg-purple-500/80',
  },
  {
    title: 'Faith Building',
    description: 'Interactive activities and practical applications',
    color: 'bg-emerald-500/80',
  },
];

const icons = [
  <UserGroupIcon key="user" className="w-7 h-7 text-white" />,
  <CalendarIcon key="calendar" className="w-7 h-7 text-white" />,
  <HeartIcon key="heart" className="w-7 h-7 text-white" />,
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/faith/1920/1080')" }}
      ></div>
      <div className="absolute inset-0 w-full h-full bg-black/60"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white p-4 sm:p-8 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center flex-grow">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
              Growing Faith, <br className="sm:hidden" />
              <span className="text-yellow-400">One Day at a Time</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-200">
              Discover engaging Christian devotionals designed specifically for children, teens, and young adults. Build a stronger relationship with God through age-appropriate content that inspires and guides.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg">
                <PlayIcon className="w-5 h-5" />
                <span>Start Your Journey</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border-2 border-white/50 hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                <BookOpenIcon className="w-5 h-5" />
                <span>Browse Devotionals</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.title}
                  icon={icons[index]}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                />
              ))}
            </div>
        </div>
        
        <div className="absolute bottom-6 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;