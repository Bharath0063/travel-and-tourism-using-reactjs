import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/head';
import Main1 from './components/main1';
import Package from './components/package';

import Main2 from './components/main2';
import FeedbackSlider from "./components/client";
import Connect from "./components/connect";
import Main3 from "./components/main3";
const App=()=>{
    return(
        <>
        <Navbar/>
        <Home/>
        <Package />
        <Main1/>
        <Main2 />
    
        <FeedbackSlider />
        <Connect />
        <Main3 />
        <Footer/>
        
        </>
    )
}
export default App