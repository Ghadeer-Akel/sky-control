import React from "react";
import { Web } from "./Web";
import MobileDevelpmentImg from "./MobileDevelpmentImg";
import DatabaseImg from "./DatabaseImg";
import { Link } from "react-router-dom";

const Service = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div>
      <section className="bg-primary-foot ta-center">
        <h2 className="section-title ff-damion bg-primary-foot">Service</h2>
        <div className="contained">
          <p className="col-wide mlmr-a">
            Discover our exceptional range of services, crafted to provide
            quality and affordability tailored to your needs. Experience the
            difference today—dive in and explore what we have to offer.
          </p>
        </div>
        <div className="contained row flex-just-center">
          <div className="col-full">
            <hr />
          </div>
          <div className="col-tri">
            <Web />
            <h3 className="mt-10 ff-damion">Web Application Development</h3>
            <p>
              Creation of dynamic and interactive web applications that enhance
              user experience and enable businesses to reach their target
              audience online.
            </p>
          </div>
          <div className="col-tri">
            <MobileDevelpmentImg />
            <h3 className="mt-10 ff-damion">
              Mobile App Development (iOS, Android)
            </h3>
            <p>
              Development of mobile applications for iOS and Android platforms,
              providing seamless user experiences and access to services on the
              go.
            </p>
          </div>
          <div className="col-tri">
            <DatabaseImg/>
            <h3 className="mt-10 ff-damion">
              Enterprise Resource Planning (ERP) Solutions
            </h3>
            <p>
              Integrated software solutions designed to streamline business
              processes, manage resources efficiently, and improve overall
              productivity across various departments within an organization.
              Our ERP implementation expertise includes but is not limited 
              {/* <ul style={{listStyleType: 'none'}}>
                <li> Financials (GL, AP, AR, FA, CM)</li>
                <li> Supply Chain Management</li>
                <li>Process Manufacturing</li>
                <li>Discrete Manufacturing - Business Intelligence</li>
                <li>Enterprise Asset Management</li>
                <li>Customer Relationship Management</li>
                <li>Project Management - Business Intelligence </li>
              </ul> */}
            </p>
          </div>
        </div>
        <Link to="/service" className="btn-bg2 border-round mt-25" onClick={scrollToTop}>
          View our services
        </Link>
      </section>
    </div>
  );
};

export default Service;
