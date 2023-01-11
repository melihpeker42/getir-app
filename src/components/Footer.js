import React from "react";
import Menu from "./ui/Menu";
import {FaFacebook, FaTwitter,FaInstagram} from "react-icons/fa"
import {FiGlobe} from "react-icons/fi"

export default function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Teknoloji Kariyerleri",
        },
        {
          title: "İletişim",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];

  return (
    <div className="footer-cont">
      <div className="footer">
        <div className="foot">
          <section>
            <h6 className="getir-down-text">Getir'i indirin!</h6>
            <nav className="footer-img">
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
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
          
          <div className="qr-kod">
        <img className="qr-kod-img" src="https://cdn.getir.com/getirweb-images/common/etbis.png"/>
        </div>
          
        </div>
        <div className="footer_2023">
          <div className="text-footer-2023">
            &copy; 2023 Getir
            <a href="#" className="content-society"> Bilgi Toplumu Hizmetleri</a>
          </div>
          <nav className="footer-icons">
            <a href="#" >
              <FaFacebook className="facebook-icons"/>
            </a>
            <a href="#">
              <FaTwitter className="twitter-icons"/>
            </a>
            <a href="#">
              <FaInstagram className="instagram-icons"/>
            </a>
            <a href="#">
              <FiGlobe className="globe-icons"/>
            </a>
          </nav>
        </div>
        
      </div>
    </div>
  );
}
