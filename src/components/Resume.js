import React from "react";

export default function Resume() {
  return (
    <section
      className="resume py-5 d-lg-flex justify-content-center align-items-center"
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <h2 className="mb-4">Experiences</h2>
            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2019</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Graphic Designer</span>
                    <small>- August 2019</small>
                  </h3>
                  <p>
                    - AdobePhotoShop, AdobeIllustrator <br/>
                    - Create banners for advertisements.
                  </p>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2020</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Full-Stack Developer</span>
                    <small>- February 2021</small>
                  </h3>
                  <p>
                    - HTML5, CSS3 and JavaScript <br/>
                    - Design backyard system for JobDay website.
                  </p>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2022</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Software Engineer, Backend</span>
                    <small>- Present</small>
                  </h3>
                  <p>
                    - Internship Program, Software Engineer, Backend (Python) at <a href="https://lmwn.com/">LINE MAN Wongnai</a> <br/>
                    - Develop <a href="https://www.investopedia.com/terms/e/erp.asp">ERP System</a> by improving the system and adding new features.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <h2 className="mb-4 mobile-mt-2">Educations</h2>
            <div className="timeline">
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2016</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Sciences and Mathematics Program</span>
                    <small>- May 2019</small>
                  </h3>
                  <p>
                    <a href="https://prakanong.ac.th/">Prakhanongpittayalai School</a>
                  </p>
                </div>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline-yr">
                  <span>2019</span>
                </div>
                <div className="timeline-info">
                  <h3>
                    <span>Bachelor of Information Engineering</span>
                    <small>- Present</small>
                  </h3>
                  <p>
                    <a href="https://www.kmitl.ac.th/">King Mongkut's Institute of Technology Ladkrabang</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
