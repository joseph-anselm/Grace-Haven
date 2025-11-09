import React from 'react';
import DevotionalsHeader from '@/components/SubHeaders.js';
import FilterBar from '@/components/FilterBar';
import DevotionalsList from '@/components/DevotionalList';
import SubscriptionCta from '@/components/SubscriptionCTA';
import Pricing from '@/components/Pricing';


const DevotionalsPage = () => {
  return (
    <>
      <DevotionalsHeader />
      <FilterBar />
      <DevotionalsList />      
      <Pricing />
      <SubscriptionCta />
      
    </>
  );
};

export default DevotionalsPage;
