import React, { useState } from 'react';
import Slider from 'react-slick';
import feed1 from './images/portrait-1601516_1280.jpg';
import feed2 from './images/sugar-1876037_1280.jpg';
import feed3 from './images/boy-840046_1280.jpg';
import feed4 from './images/altar-boy-2900206_1280.jpg';
import feed5 from './images/african-american-7175046_1280.jpg';
import feed6 from './images/kid-1720745_1280.jpg';
import feed7 from './images/baby-7213274_1280.jpg';
import feed8 from './images/camera-8191564_1280.jpg';
import feed9 from './images/ai-generated-8723499_1280.jpg';
import feed10 from './images/boy-1846704_1280.jpg';


import './client.css';

const FeedbackSlider = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const NextArrow = () => {
    return (
      <h1
        className="custom-arrow next-arrow" 
        onClick={() => sliderRef.slickNext()}
      >
        {`>`}
      </h1>
    );
  };

  const PrevArrow = () => {
    return (
      <h1 
        className="custom-arrow prev-arrow" 
        onClick={() => sliderRef.slickPrev()}
      >
        {'<'}
      </h1>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const feedbacks = [
    { image: feed1, name: "Praveen", title: "",desc:"Great travel company! They made our trip enjoyable and stress-free. Will use them again!"},
    { image: feed2, name: "Deva", title: "" ,desc:"Excellent service! Our trip was perfectly organized and hassle-free. Loved every moment!"},
    { image: feed3, name: "Muthukumaran", title: "" ,desc:"Wonderful experience! Flawless itinerary and amazing customer service. Will use again!"},
    { image: feed4, name: "Sham", title: "" ,desc:"Highly recommend! Perfectly planned, stress-free trip with great communication throughout."},
    { image: feed5, name: "Veeramani", title: "" ,desc:"Excellent company! Well-organized and fun vacation. Will definitely book with them again."},
    { image: feed6, name: "Mugesh", title: "" ,desc:"Great travel agency! Our trip was perfect from start to finish. Highly recommend."},
    { image: feed7, name: "Naveen", title: "" ,desc:"Fantastic service! Trip exceeded expectations and well experience advisor. Will book again soon!"},
    { image: feed8, name: "Tharun", title: "" ,desc:"Top-notch agency! They made our trip enjoyable and hassle-free. Excellent service all around!"},
    { image: feed9, name: "NeyaPrakash", title: "" ,desc:"Fantastic travel agency! They planned everything perfectly,and vacation was truly unforgettable."},
    { image: feed10, name: "Gokulraj", title: "" ,desc:"Perfect trip!The company made everything easy.Will definitely book with them again!"},
     
  ];

  return (
    
    <div className="feedback-container"> <hr/>
      <h1 className="feedback-title">Our Happy Clients</h1>
      <div className="slider-wrapper">
        <div className="with">
        <Slider ref={slider => setSliderRef(slider)} {...settings}>
          {feedbacks.map((feedback, index) => (
            <div className="feedback-card" key={index}>
              <img src={feedback.image} alt={feedback.name} className="feedback-image" />
              <p className="feedback-text">{feedback.desc}</p>
              <h2 className="feedback-name">{feedback.name}</h2>
              
            </div>
          ))}
        </Slider>
        </div>
      </div><hr/>
    </div>
  );
}

export default FeedbackSlider;
