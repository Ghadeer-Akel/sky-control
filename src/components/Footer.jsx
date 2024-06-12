import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <footer className="fc-white">
        <div className="contained row flex-just-center">
          {/* FOOTER WEBSITE MOTO START */}
          <div className="col-quad">
            <h3 className="ff-damion">SKY CONTROL</h3>
            <p>
              At Sky Control, our mission is to deliver high-quality, customized
              software solutions that empower our clients to achieve their
              business goals. We are committed to excellence, innovation, and
              customer satisfaction, ensuring that every project we undertake is
              completed to the highest standards.
            </p>
          </div>
          {/* FOOTER WEBSITE MOTO END */}
          {/* FOOTER QUICK CONTACT START */}
          <div className="col-quad">
            <h3 className="ff-damion">Get in touch</h3>
            <Link
              to="#"
              className="display-block fc-white icon-link mt-10 mb-10 "
            >
              <i className="bi bi-envelope-fill  mr-10" />
              info@sky-control.net
            </Link>
            <Link
              to="#"
              className="display-block fc-white icon-link mt-10 mb-10"
            >
              <i className="bi bi-telephone-fill mr-10" />
              +0786 400 1100
            </Link>
            <Link
              to="#"
              className="display-block fc-white icon-link mt-10 mb-10"
            >
              <i className="bi bi-geo-alt-fill mr-10" />
              Irbil - actoz city - s6/15
            </Link>
            <Link
              to="https://www.facebook.com/share/zobThbNYJsczoAyP/?mibextid=qi2Omg"
              target="_blank"
              className="display-inblock fc-white icon-link mt-20"
              aria-label="Follow on facebook"
            >
              <i className="bi bi-facebook mr-10" />
            </Link>
            <Link
              to="https://www.linkedin.com/company/samaaalqiada/"
              target="_blank"
              className="display-inblock fc-white icon-link"
              aria-label="Follow on linkedin"
            >
              <i className="bi bi-linkedin mr-10" />
            </Link>
            <Link
              to="#"
              className="display-inblock fc-white icon-link"
              aria-label="Follow on twitter"
            >
              <i className="bi bi-twitter mr-10" />
            </Link>
            <Link
              to="#"
              className="display-inblock fc-white icon-link"
              aria-label="Follow on youtube"
            >
              <i className="bi bi-youtube mr-10" />
            </Link>
          </div>
          {/* FOOTER QUICK CONTACT END */}
          {/* FOOTER SCHEDULE START */}
          <div className="col-quad">
            <h3 className="ff-damion">Opening hours</h3>
            <p className="mt-10 mb-10 fw-bold">
              Saterday - thursday:
              <span className="fw-normal display-block">09:00 AM - 04:00 PM</span>
            </p>
          </div>
          {/* FOOTER SCHEDULE END */}
          {/* FOOTER USEFUL LINKS START */}
          <div className="col-quad">
            <h3 className="ff-damion">Useful Links</h3>
            <Link to={"/"} className="display-block fc-white mt-5 mb-5" onClick={scrollToTop}>
              <i className="bi bi-chevron-compact-right" />
              Home
            </Link>
            <Link to={"/about"} className="display-block fc-white mt-5 mb-5" onClick={scrollToTop}>
              <i className="bi bi-chevron-compact-right" />
              About
            </Link>
            <Link to={"/service"} className="display-block fc-white mt-5 mb-5" onClick={scrollToTop}>
              <i className="bi bi-chevron-compact-right" />
              Service
            </Link>
            {/* <Link
              to="industries.html"
              className="display-block fc-white mt-5 mb-5"
            >
              <i className="bi bi-chevron-compact-right" />
              Industries
            </Link>
            <Link
              to="blog/blog.html"
              className="display-block fc-white mt-5 mb-5"
            >
              <i className="bi bi-chevron-compact-right" />
              Blog
            </Link>
            <Link
              to="career/career.html"
              className="display-block fc-white mt-5 mb-5"
            >
              <i className="bi bi-chevron-compact-right" />
              Career
            </Link> */}
            <Link to={"/contact"} className="display-block fc-white mt-5 mb-5" onClick={scrollToTop}>
              <i className="bi bi-chevron-compact-right" />
              Contact
            </Link>
          </div>
          {/* FOOTER USEFUL LINKS END */}
        </div>
        <div className="copy ta-center fc-white">
          <small>© SKY CONTROL - Copyright 2024</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
