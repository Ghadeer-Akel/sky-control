import React from "react";
import hero1 from "../assets/art/hero1.jpg";
import hero2 from "../assets/art/hero2.png";
import blob from "../assets/svg/blob.svg";
import { Link } from "react-router-dom";


const AboutSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <>
     <section className="contained row" id="about">
            <h2 className="section-title ff-damion">About us</h2>
            <div className="col-balance">
                <span className="fc-primary fs-h2">
                    We are a top notch placholder text dedicated to make your vision comes to life! Ofcourse this
                    comes with limitations.
                </span>
                <p>
                    Here at Roundazzle, our mission is crystal clear: to transform your dreams into reality. 
                    We're not just good; we're extremely good, and we're dedicated to making your vision come to life. 
                    Did we mention that we're in the business of turning your vision into reality?
                </p>
                <p>
                    Our vision is your vision and we are good at envisioning vision that you are envisioning and we'll make
                    that vision you are envisioning comes true and we are really good at it yeah believe this placeholder text.
                </p>
                <p>
                    As a placeholder text in the 'About' section, my mission is to captivate your interest. 
                    And what better way to captivate your interest than by entertaining you with visions, missions, 
                    and a dash of whimsy? Or was it mission-vision, vision-mission, a vision that turned into a mission, 
                    itching to become real?
                </p>
                <p>
                    Yes we are a top notch high quality, another top notch and high I wonder where we are 
                    now, in space probably.
                </p>
                <Link to={"/about"} className="btn-bg1  border-round" onClick={scrollToTop}>Find Out More</Link>
            </div>
            <div className="col-balance">
                <div className="sticky-img-dual">
                    <img src={hero1} alt=""/>
                    <img src={blob} alt="" className="blob"/>
                    <img src={hero2} alt=""/>
                </div>
            </div>
            <div className="sticky-img-dual-spacer"></div>
        </section>
    </>
  );
};

export default AboutSection;
