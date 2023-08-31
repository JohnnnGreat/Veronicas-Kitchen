import React from "react";
import HeroSection from "@/components/HeroSection";
import SendMessage from "@/components/SendMessage";
import Subscribe from "@/components/subscribe";

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
                <textarea
                  name="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                ></textarea>

                <SendMessage text="SEND A MESSAGE" />
              </form>
            </div>
            <div className="second__contact-details">
              <h1 className="second-header">FOLLOW US</h1>
              <div className="social-media"></div>
              <div className="contact-phone">Phone No.: 000 000 0000</div>
              <div className="contact-email">Email Address: Fill</div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
}

export default Contact;
