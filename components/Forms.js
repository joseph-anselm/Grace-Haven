import React from 'react';
import { CheckIcon, ClockIcon, ChevronDownIcon } from './Icons.js';

const Form = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get Instant Free Access
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
            No credit card required. No hidden fees. Just pure, meaningful content to help your family grow closer to God.
          </p>

          <form className="mt-8 max-w-md mx-auto space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full py-3 px-4 bg-white text-gray-900 rounded-lg border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white placeholder-gray-500"
                aria-label="Your Name"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full py-3 px-4 bg-white text-gray-900 rounded-lg border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white placeholder-gray-500"
                aria-label="Your Email Address"
              />
            </div>
            <div className="relative">
              <select 
                className="w-full py-3 px-4 bg-white text-gray-700 rounded-lg border-transparent appearance-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                aria-label="Select Primary Age Group"
              >
                <option>Select Primary Age Group</option>
                <option>Kids (8-12)</option>
                <option>Teens (13-19)</option>
                <option>Young Adults (19+)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                <ChevronDownIcon className="w-5 h-5" />
              </div>
            </div>
            <div>
              <button 
                type="submit"
                className="w-full py-3 px-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Get Instant Access
              </button>
            </div>
          </form>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <CheckIcon className="w-4 h-4" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <CheckIcon className="w-4 h-4" />
              <span>No Spam</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <ClockIcon className="w-4 h-4" />
              <span>Instant Access</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Form;