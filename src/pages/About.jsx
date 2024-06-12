import React from "react";
import hero1 from "../assets/art/hero1.jpg";
import hero2 from "../assets/art/hero2.png";
import blob from "../assets/svg/blob.svg";
import team from "../assets/art/team.webp";
import { Web } from "../components/Web";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import Methodology from "../components/Methodology";

const About = () => {
  return (
    <div className="contained px-large">
      <div>
        <section className="contained row">
          <div className="col-balance">
            <h2 className="section-title ff-damion">About us</h2>
            <span className=" fs-h2">About Sky Control</span>
            <p>
              Welcome to Sky Control, where innovation meets precision in
              software development. As a leading programming company, we
              specialize in delivering cutting-edge solutions tailored to meet
              the unique needs of businesses across various industries.
            </p>
          </div>
          <div className="col-balance mb-25">
            <div className="sticky-img-dual">
              <img src={hero1} alt />
              <img src={blob} alt className="blob" />
              <img src={hero2} alt />
            </div>
          </div>
          <div
            className="slide-in"
            style={{
              border: "2px solid #525f8014",
              margin: "10px",
              marginTop: "20px",
            }}
          >
            <div className="pl-30 d-flex mt-25">
              <Mission />
              <h2 className="ml-10">Our Mission</h2>
            </div>
            <div
              style={{
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              Our mission is to become a strategic and preferred partner for
              organizations in the Middle East and Levant Region for their ICT
              projects to meet their functional and geographical needs.
            </div>
          </div>

          <div
            style={{
              border: "2px solid #525f8014",
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
              width: "100%",
            }}
          >
            <div className=" pl-30 d-flex">
              <Web />
              <h2 className="ml-10">What We Do</h2>
            </div>
            <div className="d-flex">
              <h1
                style={{
                  backgroundColor: "gold",
                  borderRadius: "100%",
                  padding: "10px",
                  margin: "10px",
                  width: "50px",
                }}
              >
                01
              </h1>
              <span>
                <h4>Healthcare and Medical Software Solutions</h4>
                <p>
                  Advanced and sophisticated software solutions for managing
                  warehouses and scientific offices, as well as solutions for
                  managing medical clinics, hospitals, and specialized centers
                  in the medical field.
                </p>
              </span>
            </div>

            <div className="d-flex">
              <h1
                style={{
                  backgroundColor: "gold",
                  borderRadius: "100%",
                  padding: "10px",
                  margin: "10px",
                  width: "50px",
                }}
              >
                02
              </h1>
              <span>
                <h4>Web Application Development</h4>
                <p>
                  Creation of dynamic and interactive web applications that
                  enhance user experience and enable businesses to reach their
                  target audience online.
                </p>
              </span>
            </div>

            <div className="d-flex">
              <h1
                style={{
                  backgroundColor: "gold",
                  borderRadius: "100%",
                  padding: "10px",
                  margin: "10px",
                  width: "50px",
                }}
              >
                03
              </h1>
              <span>
                <h4>Mobile App Development (iOS, Android)</h4>
                <p>
                  Development of mobile applications for iOS and Android
                  platforms, providing seamless user experiences and access to
                  services on the go.
                </p>
              </span>
            </div>

            <div className="d-flex">
              <h1
                style={{
                  backgroundColor: "gold",
                  borderRadius: "100%",
                  padding: "10px",
                  margin: "10px",
                  width: "50px",
                }}
              >
                04
              </h1>
              <span>
                <h4>Customer Relationship Management (CRM) Systems</h4>
                <p>
                  Systems designed to help businesses manage interactions with
                  current and potential customers, optimizing sales, marketing,
                  and customer service processes.
                </p>
              </span>
            </div>

            <div className="d-flex">
              <h1
                style={{
                  backgroundColor: "gold",
                  borderRadius: "100%",
                  padding: "10px",
                  margin: "10px",
                  width: "50px",
                }}
              >
                05
              </h1>
              <span>
                <h4>Content Management Systems (CMS)</h4>
                <p>
                  Platforms that enable businesses to create, manage, and
                  publish digital content easily, facilitating website
                  management and content delivery.
                </p>
              </span>
            </div>
          </div>

          <div
            style={{
              border: "2px solid #525f8014",
              margin: "10px",
              marginTop: "20px",
            }}
          >
            <div className=" pl-30 d-flex">
              <Vision />
              <h2 className="ml-10">Our Vision</h2>
            </div>
            <div
              style={{
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              At SKY Control, our vision is to grow and expand our businesses
              through strategic investment alliances and ventures to become one
              of the leading of Software and Service groups in the region.
            </div>
          </div>

          <div
            style={{
              border: "2px solid #525f8014",
              margin: "10px",
              marginTop: "20px",
            }}
          >
            <div className=" pl-30 d-flex">
              <Methodology />
              <h2 className="ml-10">Methodology</h2>
            </div>
            <div
              style={{
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              We focus on building long term relationships with our customers
              through righteous delivery, continuous follow up, and exceptional
              after sales support. Our strategy is to provide customers with
              solutions based on their needs rather than on specific vendors.
              With our competent team of certified engineers and technicians, we
              are able to provide turnkey solutions that address every
              requirement.
            </div>
          </div>
        </section>

        <section className="contained">
          <h2 className="section-title ff-damion">Our team</h2>
          <p className="col-wide mlmr-a ta-center">
            Our team composes of highly competitive cloned individual with the
            same name too, they are top notch motivaded individual dedicated to
            give hundred and ten percent effort to make your vision comes to
            life.
          </p>
          <div className="row flex-just-center">
            <div className="col-tri">
              <article className="card-team">
                <img src={team} alt />
                <h3 className="title ff-damion">Johnny Doe</h3>
                <div className="info">
                  <h3 className="ff-damion">Frontend Developer</h3>
                  <p>
                    When I gaze upon the stars' gentle embrace, I glimpse a
                    universe of dreams slipping into space, but dreamers must
                    awaken to a stark and empty place.
                  </p>
                  <p>
                    Whispering in the language of forgotten dreams, I hear the
                    echoes of desires lost in silent streams.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-tri">
              <article className="card-team">
                <img src={team} alt />
                <h3 className="title ff-damion">Johnny Doe</h3>
                <div className="info">
                  <h3 className="ff-damion">Frontend Developer</h3>
                  <p>
                    When I gaze upon the stars' gentle embrace, I glimpse a
                    universe of dreams slipping into space, but dreamers must
                    awaken to a stark and empty place.
                  </p>
                  <p>
                    Whispering in the language of forgotten dreams, I hear the
                    echoes of desires lost in silent streams.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-tri">
              <article className="card-team">
                <img src={team} alt />
                <h3 className="title ff-damion">Johnny Doe</h3>
                <div className="info">
                  <h3 className="ff-damion">Frontend Developer</h3>
                  <p>
                    When I gaze upon the stars' gentle embrace, I glimpse a
                    universe of dreams slipping into space, but dreamers must
                    awaken to a stark and empty place.
                  </p>
                  <p>
                    Whispering in the language of forgotten dreams, I hear the
                    echoes of desires lost in silent streams.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <br />
        </section>
      </div>
    </div>
  );
};

export default About;
