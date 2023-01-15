import React, { useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../assets/img/banner1.jpg";
import banner2 from "../../assets/img/banner2.jpg";
import banner3 from "../../assets/img/banner3.jpg";
import banner4 from "../../assets/img/banner4.jpg";


const Banner = () => {
  const [loading, setLoading] = useState();
  const [banner, setBanner] = useState(true);
  useEffect= ( () => {
    console.log("I am always called")
    // this hoook always call whenever any state variable off this component load/updates
  });

  useEffect( () => {
    console.log("on first mount")
    // this hook calla once on the component first mount
    let bannerData = [{
      _id: "",
      title: "Banner1",
      image: banner1,
      link: ""
    },
    {
      _id: "",
      title: "Banner2",
      image: banner2,
      link: ""
    },
    {
      _id: "",
      title: "Banner3",
      image: banner3,
      link: ""
    },
    {
      _id: "",
      title: "Banner4",
      image: banner4,
      link: ""
    }]
    setBanner(bannerData)
    setLoading(false);
  }, []);

  useEffect( () => {
    console.log("only on loading state")
      // when the loading state gets updated, this hook is called
  }, [loading]);

  return (
    <>
    <div>
    {
      loading ? "Loading..." : <div>
      <Carousel>
      <Carousel.Item>
        {
           banner && banner.map( (item,index) => {
            return(
            <div key={index}>
              <img src={item.image} alt={item.title} />
            </div>)
           })
        }
      </Carousel.Item>     
      </Carousel>
    </div>
    }
    </div>
    </>
    
    
    
  );
}

export default Banner;