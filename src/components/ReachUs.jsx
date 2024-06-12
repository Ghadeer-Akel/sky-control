import React from "react";
import { Link } from "react-router-dom";

const ReachUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <>
      <section className="contained ta-center">
        <h2 className="section-title ff-damion">Reach us</h2>
        <p className="col-wide mlmr-a">
          Some text that would compel the user to hit that contact button if
          what the user have seen above is not enough, ofcourse you want as many
          potential clients as possible.
        </p>
        <Link to={"/contact"} className="btn-bg1 border-round mt-25" onClick={scrollToTop}>
          Get in touch
        </Link>
      </section>
    </>
  );
};

export default ReachUs;
