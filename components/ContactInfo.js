import React from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from './Icons.js';

const contactDetails = [
  {
    icon: <MapPinIcon className="w-8 h-8 text-white" />,
    title: 'Visit Us',
    lines: ['123 Faith Street', 'Grace Haven, Lagos', 'Nigeria'],
  },
  {
    icon: <PhoneIcon className="w-8 h-8 text-white" />,
    title: 'Call Us',
    lines: ['+234 801 234 5678', '+234 802 345 6789'],
  },
  {
    icon: <EnvelopeIcon className="w-8 h-8 text-white" />,
    title: 'Email Us',
    lines: ['hello@gracehaven.ng', 'support@gracehaven.ng'],
  },
  {
    icon: <ClockIcon className="w-8 h-8 text-white" />,
    title: 'Office Hours',
    lines: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
  },
];

const ContactInfoCard = ({ icon, title, lines }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 text-center flex flex-col items-center">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
    <div className="mt-2 text-base text-gray-600">
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail) => (
            <ContactInfoCard key={detail.title} {...detail} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;