import React from "react";
import './footer.css';
import {FiSend} from 'react-icons/fi';
import {PiGreaterThanBold} from 'react-icons/pi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import video2 from './images/8784-214209705_small.mp4';
import {RiGlobalLine} from 'react-icons/ri';
import {FaYoutube} from 'react-icons/fa';
import {AiFillGoogleSquare} from 'react-icons/ai';
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'



const Footer=()=>{
    return(
        <section className="Footer">
            
            <div className="compo">
            <video src={video2} muted autoPlay loop></video>
                <div className="settwo">
                    <div className="headerto">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDivide">
                        <input type="text" placeholder="Enter Email Address" className="now"/>
                        <button className="btn" type="submit">SEND <FiSend className="icon"/>
                        </button>
                    </div>
                </div>
                <div className="footerCard">
                    <div className="footerIntro">
                        <div className="para">
                            <a href="#" className=""><MdOutlineTravelExplore  className="icon"/>MerryMiles.</a>
                        </div>
                        <div className="footerParagraph">we’re dedicated to providing unforgettable travel experiences. With expert guides, personalized itineraries, and unmatched customer service, we go above and beyond to make every trip extraordinary. Whether you're seeking adventure or relaxation, we ensure every journey is seamless, exciting, and tailored to your needs.</div>
                        
                    </div>
                    <div className="footerLinks">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                OUR SERVIES
                            </span>
                            <li className="footerList">
                            <PiGreaterThanBold className="icon"/> Services
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Insurance
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold className="icon"/> Travel Partner
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Agency
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Communication
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Tourism
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Payment
                            </li>
                            
                            
                        </div>
                    </div>
                    <div className="footerLinks">
                        <div className="linkGroup">
                            <span className="groupTitle">
                                PLACES
                            </span>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Dubai
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold className="icon"/>SriLanka
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>China
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Pakisthan
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Thailand
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Pattaya
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Russia
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Canada
                            </li>
                        </div>
                    </div>
                    <div className="footerLinks">
                        <div className="linkGroup like">
                            <span className="groupTitle">
                                BRANCH
                            </span>
                            <li className="footerList">
                            <PiGreaterThanBold className="icon"/> Coimbatore
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Chennai
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Salem
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Kallakurichi
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Madurai
                            </li>
                            <li className="footerList">
                            <PiGreaterThanBold  className="icon"/>Palakkad
                            </li>
                        </div>
                        
                    </div>
                    <div className="footerSocials">
                        <FaInstagramSquare className="myicons"/>
                        <FaFacebookSquare className="myicons"/>
                        <FaWhatsappSquare className="myicons"/>
                        <AiFillGoogleSquare className="myicons"/>
                        <FaYoutube className="myicons"/>
                        <RiGlobalLine className="myicons"/>
                        <h1 className="mmail">merrymiles@gamil.com</h1>
                        <div className="vl"></div>
                        <h1 className="num">+91 9080706050</h1>
                    </div>
                    
                    </div>
                    
                    </div>
                    <div className="footerDiv hello">
                        <small className="best">MERRYMILES - BEST TRAVEL WEBSITE  </small>
                        <small className="hicet">COPYRIGHTS RESERVED - HICET 2022</small>
                    </div>
                

        </section>
    )
}
export default Footer