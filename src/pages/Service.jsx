import React from "react";
import hero1 from "../assets/art/hero1.jpg";
import hero2 from "../assets/art/hero2.png";
import hero3 from "../assets/art/hero3.png";
import healthImg from "../assets/art/Healthcare-Software-Solutions.avif";
import mobileDeveoper from "../assets/art/mobileDeveloper.png";
import CRM from "../assets/art/CRM.jpeg";
import eCommerce from "../assets/art/e-commerce.jpg";
import database from "../assets/art/database.webp";

const Service = () => {
  return (
    <div>
      <section className="contained">
        <h2 className="section-title ff-damion">Service</h2>
        <div className="col-wide mlmr-a ta-center">
          <span className="fc-primary fs-h2">
            Experience top notch, high quality, over the top, range of services.
          </span>
          <p>
            We are now in space, our service is so high, and top we've reached
            the ever expanding universe. Here's our range of exceptional
            services, designed to meet your needs with both quality and
            affordability in mind. Don't hesitate to experience the difference
            today. Go ahead, listen to this placeholder text.
          </p>
        </div>
        <div className="row">
          <div className="col-wide contained">
            {/* INDIVIDUAL SERVICES FEATURE START */}
            <div className="d-flex">
              <img
                src={healthImg}
                className="img-unheight col-wide"
                alt
                id="service-dev"
              />
              <div className="col-wide">
                <span className="fs-h3 mt-25 ">
                  Healthcare and Medical Software Solutions
                </span>
                <p>
                  Advanced and sophisticated software solutions for managing
                  warehouses and scientific offices, as well as solutions for
                  managing medical clinics, hospitals, and specialized centers
                  in the medical field.
                </p>
              </div>
            </div>
            <hr />

            {/* INDIVIDUAL SERVICES FEATURE END */}
            {/* INDIVIDUAL SERVICES FEATURE START */}
            <div className="d-flex">
              {" "}
              <img
                src={hero2}
                className="img-unheight mt-50"
                alt
                id="service-data"
              />
              <div className="col-wide">
                <span className="fs-h3 mt-25">Web Application Development</span>
                <p>
                  Creation of dynamic and interactive web applications that
                  enhance user experience and enable businesses to reach their
                  target audience online.
                </p>
              </div>
            </div>

            <hr />
            {/* INDIVIDUAL SERVICES FEATURE END */}
            {/* INDIVIDUAL SERVICES FEATURE START */}
            <div className="d-flex">
              <img
                src={mobileDeveoper}
                className="img-unheight mt-50"
                alt
                id="service-design"
              />
              <div className="col-wide">
                {" "}
                <span className="fs-h3 mt-25">
                  Mobile App Development (iOS, Android)
                </span>
                <p>
                  Development of mobile applications for iOS and Android
                  platforms, providing seamless user experiences and access to
                  services on the go.
                </p>
              </div>
            </div>

            <hr />

            <div className="d-flex">
              <img
                src={CRM}
                className="img-unheight mt-50"
                alt
                id="service-CRM"
              />
              <div className="col-wide">
                {" "}
                <span className="fs-h3 mt-25">
                  Customer Relationship Management (CRM) Systems
                </span>
                <p>
                  Systems designed to help businesses manage interactions with
                  current and potential customers, optimizing sales, marketing,
                  and customer service processes.
                </p>
              </div>
            </div>
            <hr />

            <div className="d-flex">
              <img
                src={eCommerce}
                className="img-unheight mt-50"
                alt
                id="service-eCommerce"
              />
              <div className="col-wide">
                {" "}
                <span className="fs-h3 mt-25">E-commerce Platforms</span>
                <p>
                  Solutions for building online stores and managing e-commerce
                  operations, including inventory management, payment
                  processing, and order fulfillment.
                </p>
              </div>
            </div>
            <hr/>

            <div className="d-flex">
              <img
                src={database}
                className="img-unheight mt-50"
                alt
                id="service-database"
              />
              <div className="col-wide">
                {" "}
                <span className="fs-h3 mt-25">Database Management.</span>
                <p>
                  Database Management involves the organization, storage,
                  retrieval, and protection of data within a database system. It
                  encompasses tasks such as designing, implementing, and
                  maintaining databases to ensure data integrity, security, and
                  accessibility. Database management includes activities like
                  data modeling, schema design, query optimization, backup and
                  recovery, user access control, and performance tuning. The
                  goal is to efficiently manage data to support the needs of an
                  organization and its applications while ensuring data
                  reliability and consistency..
                </p>
              </div>
            </div>
            <hr/>

            <div className="d-flex">
              <img
                src={hero3}
                className="img-unheight mt-50"
                alt
                id="service-design"
              />
              <div className="col-wide">
                {" "}
                <span className="fs-h3 mt-25">Custom Software Development</span>
                <p>
                  Tailored software solutions designed to meet specific business
                  needs and requirements, offering flexibility, scalability, and
                  efficient performance.
                </p>
              </div>
            </div>
            <hr />
            {/* INDIVIDUAL SERVICES FEATURE END */}
          </div>
          {/* SERVICES SIDE BAR SHORTCUT LINKS START */}
          <div className="col-slim order-tab-1">
            <div className="card-side card-side-navigation">
              <h3 className="no-margin ff-damion">Services</h3>
              <hr />
              <a href="#service-dev" className="mb-25">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  01
                </span>
                Healthcare and Medical Software Solutions
              </a>
              <a href="#service-data">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  02
                </span>
                Web Application Development
              </a>
              <a href="#service-design">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  03
                </span>
                Mobile App Development (iOS, Android)
              </a>
              <a href="#service-CRM">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  04
                </span>
                (CRM) Systems
              </a>

              <a href="#service-eCommerce">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  05
                </span>
                E-commerce Platforms
              </a>

              <a href="#no-sauce-available">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  06
                </span>
                Database Management.
              </a>

              <a href="#service-data">
                <span
                  style={{
                    backgroundColor: "gold",
                    borderRadius: "100%",
                    padding: "5px",
                    margin: "5px",
                    width: "30px",
                  }}
                >
                  07
                </span>
                Custom Software Development
              </a>
            </div>
          </div>
          {/* SERVICES SIDE BAR SHORTCUT LINKS END */}
        </div>
      </section>
    </div>
  );
};

export default Service;
