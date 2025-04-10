import React from 'react';

const About = () => {
  return (
    <section className="about-us-section py-5">
      <div className="container text-white">
        <div className="hr">
          <h2 className="section-title">About Us</h2>
        </div>

        <p className="section-text">
          BizSparkIT is more than just a business conglomerate; we are a
          vision-driven enterprise committed to transforming ideas into
          impactful realities. Rooted in innovation and guided by values, we
          strive to deliver excellence across all our ventures – technology,
          creativity, and strategy. With a global outlook and local expertise,
          we empower businesses to thrive in an ever-changing world.
        </p>
        <a href="./aboutUs" className="btn btn-learn-more mt-3">
          Learn More →
        </a>
      </div>
    </section>
  );
};

export default About;
