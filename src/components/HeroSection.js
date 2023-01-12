import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import HeroSecMobile from "./ui/HeroSecMobile"

export default function HeroSection() {
  const [selected, setSelected] = useState("TR");

  const phones = {
    US: "+1",
    GB: "+44",
    DE: "+49",
    TR: "+90",
    IT: "+39",
    IN: "+91",
    FR: "+33",
  };

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="test25">
    <HeroSecMobile/>
  <div>

  </div>
       
<div className="carousel">
<div className="wrapper">
  <div className="test242">
      <div className="logo">
        <div>
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>
          <h3 className="minute-text">
            Dakikalar içinde <br /> kapınızda
          </h3>
        </div>
      </div>
      </div>
      <div className="phone">
        <h5 className="text-login"> Giriş yap veya kayıt ol</h5>
        <div className="phoneNumber">
          <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={ phones}
            onSelect={(code) => setSelected(code)}
            selected={selected}
            className="flag-select"
          />
          <div className="phone-number-text">
            <input className="deneme1" type="text" placeholder="Telefon Numarası" />
          </div>
          <button className="phone-go">Telefon numarası ile devam et</button>
        </div>
      </div>
  </div>
      <Slider {...settings}>
        
        <div className="carousel-1">
          <img
            className="img11"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          ></img>
        </div>
        <div className="carousel-2">
          <img
            className="img11"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          ></img>
        </div>
        <div className="carousel-3">
          <img
            className="img11"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          ></img>
        </div>


      </Slider>
     
    </div>
    </div>
    
  );
}
