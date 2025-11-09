import React from 'react';
import { CheckIcon, ShieldCheckIcon, ArrowPathIcon, HeadphonesIcon } from './Icons.js';

const plans = [
    {
        name: 'Monthly',
        price: '₦1,500',
        period: '/month',
        description: 'Perfect for trying out',
        features: [
            '50+ Daily Devotionals',
            'All Age Groups',
            'New Content Weekly',
            'Offline Reading',
            'Cancel Anytime',
        ],
        buttonText: 'Start Monthly Plan',
        buttonClass: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        trialInfo: '7-day free trial',
    },
    {
        name: 'Quarterly',
        price: '₦3,600',
        period: '/3 months',
        oldPrice: '₦4,500',
        save: 'Save 20%',
        perMonth: '₦1,200 per month',
        description: '',
        features: [
            '50+ Daily Devotionals',
            'All Age Groups',
            'New Content Weekly',
            'Offline Reading',
            'Priority Support',
            'Exclusive Content',
        ],
        buttonText: 'Start Quarterly Plan',
        buttonClass: 'bg-blue-600 text-white hover:bg-blue-700',
        trialInfo: '7-day free trial • Save ₦900',
        badge: 'Most Popular',
        badgeClass: 'bg-blue-500 text-white',
        isFeatured: true,
    },
    {
        name: 'Annual',
        price: '₦12,000',
        period: '/year',
        oldPrice: '₦18,000',
        save: 'Save 33%',
        perMonth: '₦1,000 per month',
        description: '',
        features: [
            '50+ Daily Devotionals',
            'All Age Groups',
            'New Content Weekly',
            'Offline Reading',
            'Priority Support',
            'Exclusive Content',
            'Family Sharing',
        ],
        buttonText: 'Start Annual Plan',
        buttonClass: 'bg-green-500 text-white hover:bg-green-600',
        trialInfo: '7-day free trial • Save ₦6,000',
        badge: 'Best Value',
        badgeClass: 'bg-green-500 text-white',
    },
];

const trustBadges = [
    { text: 'Secure Payment', icon: <ShieldCheckIcon className="w-5 h-5 text-gray-400" /> },
    { text: 'Cancel Anytime', icon: <ArrowPathIcon className="w-5 h-5 text-gray-400" /> },
    { text: '24/7 Support', icon: <HeadphonesIcon className="w-5 h-5 text-gray-400" /> },
];

const PricingCard = ({ plan }) => (
    <div className={`bg-white rounded-2xl p-8 shadow-sm ${plan.isFeatured ? 'border-2 border-blue-500 relative' : ''}`}>
        {plan.badge && (
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold rounded-full ${plan.badgeClass}`}>
                {plan.badge}
            </div>
        )}
        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
        <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-extrabold text-blue-600">{plan.price}</span>
            <span className="text-gray-500 font-medium">{plan.period}</span>
        </div>
        {plan.oldPrice && (
            <div className="mt-2 flex items-center gap-2">
                <span className="text-gray-500 line-through">{plan.oldPrice}</span>
                <span className="text-sm font-bold bg-green-100 text-green-800 px-2 py-0.5 rounded-md">{plan.save}</span>
            </div>
        )}
        <p className="mt-2 text-sm text-gray-600 h-5">
            {plan.description || plan.perMonth}
        </p>
        <ul className="mt-8 space-y-4">
            {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                </li>
            ))}
        </ul>
        <button className={`w-full py-3 mt-8 font-semibold rounded-lg transition-colors duration-300 ${plan.buttonClass}`}>
            {plan.buttonText}
        </button>
        <p className="mt-3 text-xs text-gray-500 text-center">{plan.trialInfo}</p>
    </div>
);


const Pricing = () => {
    return (
        <section className="py-16 sm:py-24 bg-[#EFF4FF]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        Choose Your Subscription Plan
                    </h2>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">
                        Get unlimited access to our complete library of devotionals for all ages
                    </p>
                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-3 items-start">
                    {plans.map((plan) => (
                        <PricingCard key={plan.name} plan={plan} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600">All plans include a 7-day free trial. Cancel anytime.</p>
                    <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                        {trustBadges.map(badge => (
                            <div key={badge.text} className="flex items-center gap-2">
                                {badge.icon}
                                <span className="text-sm font-medium text-gray-600">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
