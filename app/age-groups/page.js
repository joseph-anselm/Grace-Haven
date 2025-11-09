import React from 'react';
import AgeGroupHeader from '@/components/AgeGroupHeader.js';
import AgeGroupCards from '@/components/AgeGroupCard';


const AgeGroupPage = () => {
  return (
    <div className="bg-[#F3F6FA]">
      <AgeGroupHeader />
      <AgeGroupCards />
     
    </div>
  );
};

export default AgeGroupPage;