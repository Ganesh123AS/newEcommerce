import React from 'react';
import "../../index.css";
import Banner from "../../components/home/banner";
import FeatureSection from "../../components/home/featureSection";
import NavBar from "../../components/home/navBar";
import Category from "../../components/home/category";
import Footer from "../../components/home/footer";
import HomeScreen from '../../components/homeScreen';

const Homepage = () => {
  return (
    <div>
        {/* Nav Bar Start */}
        <NavBar />
        {/* Nav Bar Ends */}
        <HomeScreen />

    </div>
  )
}

export default Homepage;