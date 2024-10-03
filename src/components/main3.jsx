import React from "react";
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import img13 from  './images/saint-isaac-cathedral-6871954_1280.jpg';
import img14 from  './images/seagulls-5473897_1280.jpg';
import img15 from  './images/uae-4010835_640.jpg';
import img16 from  './images/water-4165425_1280.jpg';
import img17 from  './images/arches-1851520_640.jpg';
import img18 from  './images/eiffel-tower-3349075_640.jpg';
import img19 from  './images/parachute-1843350_640.jpg';
import img20 from './images/switzerland-8056381_640.jpg';
import img21 from  './images/trees-1913364_640.jpg';

const Data = [
    {
        id: 13,
        imgSrc: img13, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 14,
        imgSrc: img14, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 15,
        imgSrc: img15, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 16,
        imgSrc: img16, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 17,
        imgSrc: img17, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 18,
        imgSrc: img18, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 19,
        imgSrc: img19, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 20,
        imgSrc: img20, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 21,
        imgSrc: img21, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },    
];

const Main3 = () => {
    return (
        <section className="text">
            <div  className="count">
                <h3 className="title">Most Visited Coastal area</h3>
            </div>
            <div className="basic">
                {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (
                    <div key={id} className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle} /> 
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className="continent flex">
                                <HiOutlineLocationMarker className="icon" />
                                <span className="name">{location}</span>
                            </span>

                            <div className="fees flex">
                                <div className="grade">
                                    <span>{grade}
                                        <small>+1</small>
                                    </span>
                                </div>
                                <div className="price">
                                    <h5>{fees}</h5>
                                </div>
                            </div>
                            <div className="desc">
                                <p>{description}</p>
                            </div>
                            <button className="btn flex important"> 
                                DETAILS <HiOutlineClipboardCheck className="icon" /> 
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Main3;
