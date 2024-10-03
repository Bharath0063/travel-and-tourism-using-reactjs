import React from "react";
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from 'react-icons/hi';
import img7 from  './images/taj-mahal-4109110.jpg';
import img8 from './images/cellar-vault-258906_1280.jpg';
import img9 from  './images/diveevo-140542_1280.jpg';
import img10 from  './images/himalayan-yak-4690021_1280.jpg';
import img11 from  './images/moscow-1556561_1280.jpg';
import img12 from  './images/mountain-7858482_1280.jpg';

const Data = [
    {
        id: 7,
        imgSrc: img7, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 8,
        imgSrc: img8, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 9,
        imgSrc: img9, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 10,
        imgSrc: img10, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 11,
        imgSrc: img11, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
    {
        id: 12,
        imgSrc: img12, 
        destTitle: 'Bora Bora',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure odit cum eius beatae nobisquam facere ad. Sit, ut.'
    },
];

const Main2 = () => {
    return (
        <section className="text">
            <div  className="count">
                <h3 className="title">Most Visited Malay place</h3>
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

export default Main2;
