import React from 'react';

const Footer = () => {
  return (
    <section className="bg">
      {/* Hero Section */}
      <section className="hero-section2 text-center text-white">
        <div className="container d-flex flex-column">
          <h2>Have a project?</h2>
          <h1>Let’s make it!</h1>
          <button className="btn btn-outline-light mt-4">Tell us about your project</button>
        </div>
      </section>

      <hr className="my-4" />

      {/* Footer Section */}
      <footer className="footer-section text-white">
        <div className="container py-4">
          <div className="row">

            {/* Logo */}
            <div className="col-md-3 mb-4">
              <img
                src="./image/logo2.png"
                alt="Logo"
                style={{ marginBottom: '30px' }}
                className="img-fluid footer-logo"
              />
               <h5 class="mb-3">BizSpark IT</h5>
            </div>

            {/* Quick Links */}
            <div className="col-md-3 mb-4">
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="./" className="text-white">Home</a></li>
                <li><a href="/aboutUs" className="text-white">About Us</a></li>
                <li><a href="/project" className="text-white">Our Projects</a></li>
                <li><a href="/services" className="text-white">Service</a></li>
                <li><a href="/blog" className="text-white">Blog</a></li>
                <li><a href="/contactUs" className="text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-md-3 mb-4">
              <h6>Contact Us</h6>
              <p>Email: <a href="mailto:info@trimindis.com" className="text-white">info@trimindis.com</a></p>
              <p>Phone: <a href="tel:+8801534888889" className="text-white">+880 1534888889</a></p>
              <p>Uttara, Dhaka-1230, Bangladesh</p>
            </div>

            {/* Social Media */}
            <div className="col-md-3 mb-4">
              <h6 className="text-right">Follow Us</h6>
              <ul className="list-unstyled d-flex justify-content-between">
                <li><a href="https://www.facebook.com/trimindis"><img src="./image/facebook.png" alt="Facebook" /></a></li>
                <li><a href="https://www.instagram.com/trimindis.co/"><img src="./image/instagram.png" alt="Instagram" /></a></li>
                <li><a href="https://x.com/trimindis_"><img src="./image/twitter.png" alt="X" /></a></li>
                <li><a href="https://www.linkedin.com/company/trimindis/"><img src="./image/linkedin.png" alt="LinkedIn" /></a></li>
              </ul>

              <ul className="list-unstyled d-flex justify-content-between mt-5">
                <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Privacy Policy</a></li>
                <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <p className="text-center">© TriMindis | 2025 | All Rights Reserved</p>

          <div className="lastlogo">
            <img src="./image/FOOTER.png" alt="backimg" />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
