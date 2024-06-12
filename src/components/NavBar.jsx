import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/art/SAMA-LOGO.png";

const NavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <main>
        <section className="hero-banner">
          <div className="hero-contained">
            <div className="hero-title fc-white">
              <h1
                style={{ fontWeight: "800px", fontSize: "50px" }}
              >
                SKY CONTROL
              </h1>

                <p class="typing-effect fs-h4 fw-normal">
                Welcome to Sky Control, where innovation meets precision in
                software development. 
                </p>
              <p className="fs-h4 fw-normal">
                As a leading programming company, we
                specialize in delivering cutting-edge solutions tailored to meet
                the unique needs of businesses across various industries.
              </p>
              <Link to={"/about"} className="btn-bg2 border-round mt-20">
                Learn More <i className="bi bi-chevron-compact-right"></i>
              </Link>
            </div>
          </div>
          <div className="hero-socials">
            <Link
              to="https://www.facebook.com/share/zobThbNYJsczoAyP/?mibextid=qi2Omg"
              target="_blank"
              className="mt-a icon-link"
              aria-label="Follow us on facebook"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/company/samaaalqiada/"
              target="_blank"
              className="icon-link mt-10"
              aria-label="Follow us on linkedin"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              to="#"
              className="icon-link mt-10"
              aria-label="Follow us on twitter"
            >
              <i className="bi bi-twitter"></i>
            </Link>
            <Link
              to="#"
              className="icon-link mt-10"
              aria-label="Follow us on youtube"
            >
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </section>
      </main>
      <nav>
        <div className="contained">
        <input type="checkbox" name="tablet-mobile-menu" class="tab-mob-menu" aria-label="tablet and mobile menu"/>

          <Link
            to="/"
            className="logo fc-primary ff-damion row flex-alig-center"
          >
            <img
              src={Logo}
              alt="logo"
              style={{ width: "50px", height: "50px", borderRadius: "0" }}
            />
          </Link>
          <div className="navigation-container">
            <Link to="/" style={{ textDecoration: "none" }} onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/about" onClick={scrollToTop}>About</Link>
            <Link to="/service" onClick={scrollToTop}>Service</Link>
            {/* <Link to="/">Industries</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Career</Link> */}
            <Link to="/contact" className="btn-bg1 border-round" onClick={scrollToTop}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
      <a to="#" className="btn-back-to-top" aria-label="Back to top button" onClick={scrollToTop}>
        <i className="bi bi-chevron-up"></i>
      </a>
    </>
  );
};

export default NavBar;
