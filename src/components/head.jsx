import React,{useEffect} from "react";
import './head.css';
import video from './images/140111-774507949_small.mp4';
import {GrLocation} from 'react-icons/gr';
import {HiFilter} from 'react-icons/hi';
import {TbApps} from 'react-icons/tb';
import {FaListAlt} from 'react-icons/fa';
import {FaTripadvisor} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';


import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[]
    )


    return (
        <section className="home">
            <video src={video} muted autoPlay loop></video>
            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holiday
                    </h1>
                </div>
                <div data-aos="fade-up" className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here....."></input>
                            <GrLocation  className="icon"/>
                        </div>
                    </div>
                    <div className="dateInput">
                        <label htmlFor="city">Search your date:</label>
                        <div className="input flex">
                            <input type="date"></input>
                            
                        </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000"></input>
                        </div>
                    </div>
                    <div className="searchOptions flex">
                    <HiFilter  className="icon"/>
                    <span>MORE FILTERS</span>
                    </div>
                </div>
                <div data-aos="fade-up" className="div homeFooterIcons flex">
                    <div className="div rightIcons">
                    <FiFacebook className="icon"/>
                    <AiOutlineInstagram className="icon"/>
                    <FaTripadvisor  className="icon"/>
                    </div>
                    <div className="div leftIcons">
                    <FaListAlt className="icon"/>
                    <TbApps className="icon"/>
                    </div>
                </div>
            </div>
            

            
        </section>
    );
};

export default Home;
