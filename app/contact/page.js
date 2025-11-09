import React from 'react';
import ContactHeader from '@/components/ContactHeader.js';
import ContactInfo from '@/components/ContactInfo.js';
import ContactFormAndFaq from '@/components/ContactFormAndFaq.js';


const ContactPage = () => {
  return (
    <div className="bg-gray-50">
      <ContactHeader />
      <ContactInfo />
      <ContactFormAndFaq />

    </div>
  );
};

export default ContactPage;