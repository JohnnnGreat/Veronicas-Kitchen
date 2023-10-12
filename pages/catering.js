import React from "react";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

const Catering = () => {
  return (
    <>
      <HeroSection
        title="Catering"
        desc="Choose from a wide variety of delicious dishes in 4 sizes - half tray, full tray, small cooler, and larger cooler - to feed your guests at any event, big or small. We can also create custom menus and sizes to fit your specific needs."
      >
        <br></br>
        <div className="download-pdf-container">
          You can as well
          <a
            href="/catering.pdf"
            data-aos="fade-up"
            data-aos-duration="1000"
            download="catering"
          >
            Download Our Catering Menu
          </a>
        </div>
      </HeroSection>
      <div className="inquiry-form">
        <div className="inquiry-form__wrapper">
          <p className="inquiry-form-header">Fill an inquiry form!</p>
          <div className="form-container">
            <form action="">
              <label htmlFor="name">Contact Name</label>
              <input type="text" placeholder="eg. John Doe" id="contact" />
              <label htmlFor="number">Phone Number.</label>
              <input type="text" id="number" placeholder="eg. +12737465" />
              <div className="form-flex">
                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    placeholder="eg. johndoe@email.com"
                    id="email"
                  />
                </div>
                <div>
                  <label htmlFor="contact">Date Order Needed</label>
                  <input type="datetime-local" id="contact" />
                </div>
              </div>
              <div className="form-flex">
                <div>
                  <label htmlFor="numberPeople">Number of People</label>
                  <input
                    placeholder="eg. 2, 4"
                    type="number"
                    id="numberPeople"
                  />
                </div>
                <div>
                  <label htmlFor="numberPeople">Delivery</label>
                  <select>
                    <option value="option1">Yes</option>
                    <option value="option2">No</option>
                  </select>
                </div>
              </div>
              <button className="catering-cta">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catering;
