import React from "react";

export default function About() {
  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container">
        <div className="row gap-20">
            <div className="col-lg-5 col-md-12 col-12">
            <center className="about-image svg">
              <img
                src="images/undraw/ezgif-1-34da609c52.gif"
                className="img-fluid"
                alt="me image"
              />
            </center>
          </div>
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">
                Welcome to{" "}
                <span className="mobile-block">my portfolio website!</span>
              </small>
              <h1 className="animated animated-text">
                <span className="mr-2">Hello World, I'm </span>
                <div className="animated-info">
                  <span className="animated-item">Tongla.</span>
                  <span className="animated-item">Developer.</span>
                  <span className="animated-item">JS lover.</span>
                </div>
              </h1>
              <p>
                Diligent and patient engineering student with fundamental
                knowledge of software design development.
              </p>
              <div className="custom-btn-group mt-4">
                <a href="#" className="btn mr-lg-2 custom-btn">
                  <i className="uil uil-file-alt" /> Download Resume
                </a>
                <a
                  href="#contact"
                  className="btn custom-btn custom-btn-bg custom-btn-link"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
