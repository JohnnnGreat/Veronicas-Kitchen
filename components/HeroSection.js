import React from "react";

function HeroSection({ title, desc, children }) {
  return (
    <div className="hero-default">
      <div className="hero-default__wrapper">
        <div className="hero-default__wrapper__content">
          <h1 className="hero-d-title">{title}</h1>
          <p className="hero-d-desc">{desc}</p>
          {children && <>{children}</>}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
