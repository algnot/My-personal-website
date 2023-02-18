import React from "react";

export default function Contact() {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1937.934073817112!2d100.76917246983497!3d13.726431551539678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d675dfaca7905%3A0x9e7e8db95be1f8d7!2z4Lir4Lit4Lit4Lit4Lih4Liq4Li04LiZIOC5gOC4geC4geC4teC4h-C4suC4oSAy!5e0!3m2!1sth!2sth!4v1676688788946!5m2!1sth!2sth"
                width={400}
                height={300}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">Connect with me!</h3>
                <p className="footer-text mb-0">+6664 661 4513</p>
                <p>
                  <a href="mailto:hello@company.co">thanawat.k2000@gmail.com</a>
                </p>
              </div>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/glatnw/"
                    className="uil uil-facebook"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Dribbble"
                  />
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/algnott/"
                    className="uil uil-instagram"
                    data-toggle="tooltip"
                    data-placement="left"
                    title="Instagram"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">Interested to work together? Let's talk </h2>
              <form>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your Name"
                      id="name"
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      rows={6}
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="ml-lg-auto col-lg-5 col-12">
                    <input
                      type="submit"
                      className="form-control submit-btn"
                      defaultValue="Send Button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
