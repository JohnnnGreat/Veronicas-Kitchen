import React from "react";
import HeroSection from "@/components/HeroSection";

function Contact() {
  return (
    <>
      <HeroSection
        title="Contact Us"
        desc="Get in touch with us to elevate your dining experience. Contact our team for inquiries, special requests, or feedback. Reach out to us using the contact information provided below, and let us create memorable moments together."
      />

      <div className="contact">
        <div className="contact__wrapper">
          <div className="contact__wrapper__content">
            <div className="first__contact-details">
              <form className="contact-form" action="">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Email" required />
                <textarea name="message" cols="30" rows="10"></textarea>
              </form>
            </div>
            <div className="second__contact-details"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
