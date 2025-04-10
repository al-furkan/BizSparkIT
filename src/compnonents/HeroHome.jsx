import React from 'react';

const HeroHome = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center text-white">
      <div className="container">
        <h1>
          Empowering lives through transformative IT solutions, convenient
          lifestyle services, and impactful mental health support.
        </h1>
        <hr
          style={{
            width: '90%',
            borderTop: '1px solid rgba(255, 255, 255, 0.25)',
          }}
        />
        <div className="sr d-flex justify-content-between align-items-center mt-4">
          <p>
            At BizSpark IT, we believe in improving lives by providing personalized
            solutions across various domains.
          </p>
          <a href="./Services.php" className="btn">
            Our Services →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
