import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <section className="contained">
        <h2 className="section-title ff-damion">Get in touch</h2>
        <p className="col-wide ta-center mlmr-a">
          Some text that would compel the user to contact you if what the user
          have seen across the page wasn't not enough, ofcourse you want as many
          potential clients as possible.
        </p>
        <div className="row">
          {/* EMBEDED MAP IFRAME START */}
          <div className="col-balance map-embed">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1608.82476308516!2d44.02069662158735!3d36.248006814073925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDE0JzUyLjgiTiA0NMKwMDEnMTAuNiJF!5e0!3m2!1sar!2siq!4v1717665232691!5m2!1sar!2siq"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* EMBEDED MAP IFRAME END */}
          {/* CONTACT INFO START */}
          <div className="col-balance">
            <span className="fs-h4 mb-15 mt-25 fc-primary">Where to go:</span>
            <Link to="#" className="display-inblock">
              <i className="bi bi-geo-alt-fill" />
              Irbil - actoz city - s6/15
            </Link>
            <span className="fs-h4 mb-15 mt-25 fc-primary">Say hello:</span>
            <Link to="#" className="display-inblock">
              <i className="bi bi-envelope-fill" />
              info@sky-control.net
            </Link>
            <Link to="#" className="display-inblock">
              <i className="bi bi-telephone-fill" />
              +0786 400 1100
            </Link>
            <span className="fs-h4 mb-15 mt-25 fc-primary">Follow:</span>
            <Link
              to="https://www.facebook.com/share/zobThbNYJsczoAyP/?mibextid=qi2Omg"
              target="_blank"
              className="display-inblock mr-10"
            >
              <i className="bi bi-facebook" />
              Facebook
            </Link>
            <Link
              to="https://www.linkedin.com/company/samaaalqiada/
"              target="_blank"
              className="display-inblock mr-10"
            >
              <i className="bi bi-linkedin" />
              Linkedin
            </Link>
            <Link to="#" className="display-inblock mr-10">
              <i className="bi bi-twitter" />
              Twitter
            </Link>
            <Link to="#" className="display-inblock mr-10">
              <i className="bi bi-youtube" />
              Youtube
            </Link>
            <form action="#" className="message-form mt-50 mb-25">
              <span className="fs-h4 fc-primary mb-15">Send us a message</span>
              <div className="row mb-20">
                <input
                  type="text"
                  id="message-name"
                  placeholder="Your name"
                  aria-label="Input for your name"
                  required
                />
                <input
                  type="email"
                  className="ml-a"
                  id="message-email"
                  placeholder="Your email"
                  aria-label="Input for email"
                  required
                />
              </div>
              <input
                type="text"
                id="message-subject"
                aria-label="Input for your message subject"
                className="mb-20"
                placeholder="Subject"
              />
              <textarea
                id="message-message"
                rows={5}
                placeholder="Write a message"
                aria-label="Input for writing message"
                defaultValue={""}
              />
              <button type="submit" className="btn-bg1 border-round mt-20">
                Send message
              </button>
            </form>
          </div>
          {/* CONTACT INFO END */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
