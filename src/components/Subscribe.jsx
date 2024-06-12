import React from "react";

const Subscribe = () => {
  return (
    <div>
      <section
        className="subscribe bg-primary-foot"
        style={{ backgroundImage: 'url("../assets/art/overlay.webp")' }}
      >
        <div className="contained row ta-center">
          <div className="col-balance fc-white">
            <h3 className="mb-a ff-damion mt-a">
              Subscribe to our newsletter:
            </h3>
          </div>
          <div className="col-balance">
            <form action="#">
              <input
                type="email"
                id="subscribe-email"
                aria-label="Subscribe to our email news"
                placeholder="Email"
                required
              />
              <button className="btn-bg2">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
