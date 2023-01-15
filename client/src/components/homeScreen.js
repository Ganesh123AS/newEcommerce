import React from 'react';
import FeatureSection from './home/featureSection';
import Category from './home/category';
import Footer from './home/footer';

const HomeScreen = () => {
  return (
    <div>
       <FeatureSection />
        <Category />
        <Footer />
    </div>
  )
}

export default HomeScreen;