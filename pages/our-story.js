import React from "react";
import HeroSection from "@/components/HeroSection";

function OurStory() {
  return (
    <>
      Hello
      <HeroSection
        title="Our Story"
        desc="Experience our captivating journey. Discover the passion behind our
            restaurant as we share our story, from humble beginnings to a
            beloved dining destination. Explore our culinary evolution and the
            vision that has shaped our unique dining experience."
      />
      <div className="about">
        <div className="about__wrapper">
          <div className="text">
            Veronica's Kitchen was born from a deep passion to delight the taste
            buds of immigrants from Nigeria, West Africa, and beyond, by serving
            authentic dishes that capture the essence of the motherland. As the
            beloved flavors of Veronica's Kitchen spread, our clientele expanded
            to embrace a diverse array of people from various demographics and
            races. However, our unwavering mission remains unchanged - to
            consistently deliver Nigerian and West African meals of the highest
            quality that evoke nostalgia and create a culinary journey like no
            other.
          </div>
          <div className="text">
            From humble beginnings, Veronica's Kitchen has evolved into a haven
            where cherished recipes are transformed into masterpieces. With each
            dish, we aim to transport our guests to the heart of Nigeria,
            offering a genuine taste of the rich cultural heritage and vibrant
            culinary traditions. It is this dedication to authenticity that has
            earned us the trust and loyalty of our patrons.
          </div>
          <div className="text">
            At Veronica's Kitchen, we believe that the soul of Nigerian and West
            African cuisine lies in the meticulous selection of fresh,
            high-quality ingredients, combined with time-honored cooking
            techniques passed down through generations. Our skilled chefs pour
            their passion and creativity into every dish, ensuring that flavors
            are harmoniously balanced and textures are exquisitely delightful.
          </div>
          <div className="text">
            We take pride in creating an inviting atmosphere that reflects the
            warmth and hospitality of our beloved continent.
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
