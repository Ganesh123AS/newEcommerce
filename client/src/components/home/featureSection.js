import React from 'react';
import grocery from "../../assets/img/grocery.webp";
import mobile from "../../assets/img/mobile.webp";
import fashion from "../../assets/img/fashion.webp";
import electronics from "../../assets/img/electronics.webp";
import appliance from "../../assets/img/grocery.webp";
import topoffers from "../../assets/img/topoffers.webp";

import "../../assets/css/home/featureSection.css";


const FeatureSection = () => {
  return (
    <div>
       <div className="feature-main">
            <div>
                <img src={grocery} alt="Grossery logo" srcset="" />
                <h4>Grossery</h4>
            </div>
            <div>
                <img src={mobile} alt="Mobbile logo" srcset="" />
                <h4>Mobile</h4>
            </div>
            <div>
                <img src={fashion} alt="Fashion logo" srcset="" />
                <h4>Fashion</h4>
            </div>
            <div>
                <img src={electronics} alt="Electronics logo" srcset="" />
                <h4>Electronics</h4>
            </div>
            <div>
                <img src={appliance} alt="Appliance logo" srcset="" />
                <h4>Appliance</h4>
            </div>
            <div>
             <img src={topoffers} alt="Top Offers logo" srcset="" />
                <h4>Top Offers</h4>
            </div>
        </div>
    </div>
  )
}

export default FeatureSection;