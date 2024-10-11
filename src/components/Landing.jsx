import React, { useEffect } from "react";
import Logo from "../assets/img/logos/gdg-on-campus-soit.png";
import '../css/landing.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Landing = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="banner-landing" data-aos="zoom-in" data-aos-delay="300">
      <img src={Logo} alt="logo" className="gdsc-landing-logo md:h-[45%] md:w-auto h-auto w-[90%]" />
    </div>
  );
};

export default Landing;
