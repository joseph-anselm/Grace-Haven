import React from 'react';

const SubscriptionCta = () => {
  return (
    <section className="bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Never Miss a Devotional
        </h2>
        <p className="mt-4 text-lg text-white">
          Get daily devotionals delivered to your inbox and grow in faith every day
        </p>
        <form className="mt-8 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-white text-black">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white rounded-md sm:rounded-r-none border-white text-base"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md sm:rounded-l-none text-blue-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-yellow-400"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-blue-200">
          Join 15,000+ families growing in faith together
        </p>
      </div>
    </section>
  );
};

export default SubscriptionCta;