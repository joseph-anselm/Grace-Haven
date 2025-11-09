import React from 'react';

const ContactHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>
    </header>
  );
};

export default ContactHeader;