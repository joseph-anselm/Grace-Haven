import React from 'react';

const statsData = [
  { value: '500+', label: 'Devotional Content', colorClass: 'text-blue-600' },
  { value: '10K+', label: 'Active Users', colorClass: 'text-purple-600' },
  { value: '3', label: 'Age Groups Served', colorClass: 'text-green-600' },
];

const Stats = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 -mt-16 relative z-10">
        <dl className="grid grid-cols-1 gap-y-10 text-center sm:grid-cols-3 sm:gap-x-8">
          {statsData.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <dd className={`order-1 text-4xl font-extrabold ${stat.colorClass}`}>
                {stat.value}
              </dd>
              <dt className="order-2 mt-2 text-base leading-6 font-medium text-gray-500">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;
