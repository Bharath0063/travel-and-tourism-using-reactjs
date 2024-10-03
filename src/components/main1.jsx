import React from "react";
import './main1.css';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import img1 from  './images/cellar-vault-258906_1280.jpg';
import img2 from  './images/duomo-6808817_1920.jpg';
import img3 from  './images/mabry-mill-8184715_640.jpg';
import img4 from  './images/taj-mahal-4109110.jpg';
import img5 from  './images/mountains-7543273.jpg';
import img6 from   './images/nature-6817376_1920.jpg'; 
import certificate from './images/hello.png';


import side0 from './images/camera-8191564_1280.jpg';
import side1 from './images/couple-5000549_1280.jpg';
import side2 from './images/people-3359685_1280.jpg';
import side3 from './images/goose-1339241_1280.jpg';
import side4 from './images/girls-6369320_1280.jpg';
import side5 from './images/women-1838768_1280.jpg';
import side6 from './images/girl-4809433_1280.jpg';
import side7 from './images/mountains-8411045_1280.jpg';
import side8 from './images/vietnam-8560197_1280.jpg';
import side9 from './images/beach-5483065_1280.jpg';


const Data = [
    {
        id: 1,
        imgSrc: img1, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 2,
        imgSrc: img2, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 3,
        imgSrc: img3, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 4,
        imgSrc: img4, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 5,
        imgSrc: img5, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 6,
        imgSrc: img6, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },

];
const Main1 = () => {
    return (
        <section className="text">
            <div  className="count">
                <h3 className="title">Most Visited Destinations</h3>
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
            </div> <hr/>
            <div className="award">
                <img src={certificate} alt="" />
                
                <p>This award recognizes creative and playful travel company names that bring a sense of joy and humor to the travel experience. The winning names should embody a fun and memorable approach to travel, blending wit with adventure to create a unique and engaging brand identity.
                <span>"Thanks For This Award"</span></p>
             </div>
             <div className="flexer">
                <img src={side0} alt="" />
                <img src={side4} alt="" />
                <img src={side1} alt="" />
                <img src={side6} alt=""/>
                <img src={side9} alt="" />
                <img src={side7} alt="" />
                <img src={side5} alt="" />
                <img src={side3} alt="" />
                <img src={side8} alt="" />
                <img src={side2} alt="" />
               

             </div> <hr/>
        </section>
    );
};

export default Main1;