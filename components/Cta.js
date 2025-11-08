import React from 'react';
import { BookIcon, CalendarIcon, GameControllerIcon, FamilyIcon, DevicePhoneMobileIcon, HeadphonesIcon } from './Icons';

const ctaFeatures = [
    {
        icon: <BookIcon className="w-7 h-7 text-blue-600" />,
        title: 'Daily Devotionals',
        description: 'Age-appropriate devotions for kids, teens, and young adults'
    },
    {
        icon: <CalendarIcon className="w-7 h-7 text-blue-600" />,
        title: 'Weekly Bible Plans',
        description: 'Structured reading plans to guide your spiritual journey'
    },
    {
        icon: <GameControllerIcon className="w-7 h-7 text-blue-600" />,
        title: 'Interactive Activities',
        description: 'Fun games and activities that make learning engaging'
    },
    {
        icon: <FamilyIcon className="w-7 h-7 text-blue-600" />,
        title: 'Family Resources',
        description: 'Tools and guides for meaningful family devotion time'
    },
    {
        icon: <DevicePhoneMobileIcon className="w-7 h-7 text-blue-600" />,
        title: 'Mobile Access',
        description: 'Access your content anywhere with our mobile-friendly platform'
    },
    {
        icon: <HeadphonesIcon className="w-7 h-7 text-blue-600" />,
        title: 'Community Support',
        description: 'Join a community of families growing in faith together'
    },
];

const CtaFeatureCard = ({ icon, title, description }) => (
    <div className="bg-gray-100/60 p-8 rounded-2xl text-center flex flex-col items-center">
        <div className="w-16 h-16 bg-blue-100/70 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
);

const Cta = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Start Your <span className="text-blue-600">Free</span> Faith Journey Today
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        Join thousands of families who are growing in faith together. Get instant access to age-appropriate devotionals, interactive activities, and family resources - completely free!
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {ctaFeatures.map((feature) => (
                        <CtaFeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cta;
