import React from "react";

export default function MobileApp() {
  return (
    <div className="mobile-app">
      <div className="mobile-app-box">
        <div className="getir-text-cont">
          <h3 className="getir-text">Getir'i indirin!</h3>
          <p className="request-text">
            İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
          </p>
          <nav className="nav-img">
            <a href="#">
              <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
            </a>
            <a href="#">
              <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
            </a>
            <a href="#">
              <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
            </a>
          </nav>
        </div>

        <img
          className="img-gtr"
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"/>
      </div>
    </div>
  );
}
