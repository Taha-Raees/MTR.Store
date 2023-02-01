import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";


const Slider = ()=>{
    const [currentSlide,setCurrentSlide]=useState(0);


    const data = [
    "https://img.freepik.com/premium-photo/gorgeous-bright-couple-brunette-women-black-white-dresses_149155-1238.jpg?w=996",
    "https://img.freepik.com/free-photo/shopping-day-coffee-break-attractive-young-woman-with-paper-bags-walking-city-street_231208-10921.jpg?w=996&t=st=1673445646~exp=1673446246~hmac=65fb282ea5ca5d45531cf3c883f081de4b30ed0deb97fa4a1c32656c3ff80bf1",
    "https://img.freepik.com/free-photo/fashionable-pale-brunette-long-green-dress-black-jacket-sunglasses-standing-street-during-daytime-against-wall-light-city-building_197531-24468.jpg?w=996&t=st=1673453852~exp=1673454452~hmac=c7b0caa017fee7e396206986450cc2a0408c5adbf31840ed1f5c5bc8e711e196",
    ];

    const prevSlide = ()=>{
    setCurrentSlide(currentSlide === 0? 2:(prev)=>prev-1)
    }

    const nextSlide = ()=>{
    setCurrentSlide(currentSlide === 2? 0:(prev)=>prev+1)
    }





  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  )
}

export default Slider