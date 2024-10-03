import React from "react";
import './package.css';
import india from './images/temple-3181803_1280.jpg';
import international from './images/Blue and White International Civil Aviation Day Instagram Post.png';
import honeymoon from './images/beach-5483068.jpg';
import education from './images/beach-1866992_1280.jpg';
import friends from './images/beach-1836467_1920.jpg';

const Package = () => {
    return (
        <div className="ppfull">
            <hr />
            <h1 className="popular">All Round Package - Suggestion</h1>
            <div className="part1">
                <div className="image-container">
                    <img src={india} alt="India Image" className="india one" />
                    <div className="homeContext act1">
                        <h1 className="pic-inside">India's Package</h1>
                        <button className="pic-button">247 TOURS</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={international} alt="International Image" className="inter two" />
                    <div className="homeContext act2">
                        <h1 className="pic-inside">International's Package</h1>
                        <button className="pic-button">216 TOURS</button>
                    </div>
                </div>
            </div>
            <div className="part2">
                <div className="image-container">
                    <img src={friends} alt="Friends Image" className="people three" />
                    <div className="homeContext act3">
                        <h1 className="pic-inside">Friend's Package</h1>
                        <button className="pic-button">12 TOURS</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={education} alt="Education Image" className="people four" />
                    <div className="homeContext act4">
                        <h1 className="pic-inside">Education's Package</h1>
                        <button className="pic-button">18 TOURS</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={honeymoon} alt="Honeymoon Image" className="people five" />
                    <div className="homeContext act5">
                        <h1 className="pic-inside">Honeymoon Package</h1>
                        <button className="pic-button">30 TOURS</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Package;
