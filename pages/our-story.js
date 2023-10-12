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
            Step into Veronica&apos;s Kitchen, a culinary gem nestled in Los
            Angeles, where the soulful allure of Nigerian cuisine has thrived
            for over three decades. Our story is woven with the passion and
            dedication of Veronica, a visionary who set out to bring the taste
            of home to Nigerians near and far, and to introduce the world to the
            enchantment of fufu.
          </div>
          <div className="text">
            Veronica&apos;s Kitchen isn&apos;t just a restaurant; it&apos;s a
            cultural bridge that connects the vibrant spirit of Nigeria to the
            diverse tapestry of the world. Our commitment is to honor tradition
            while embracing innovation, all while serving up the delectable
            essence of Nigeria.
          </div>
          <div className="text">
            In Veronica&apos;s Kitchen, we recognize that food is a catalyst for
            shared experiences, and our viral &apos;Fufu Challenge&apos; on
            TikTok is a testament to that. Veronica&apos;s passion for spreading
            joy through food transcends borders and generations, making us a
            cherished destination for food enthusiasts and culture seekers
            alike.
          </div>
          <div className="text">
            Whether you&apos;re a connoisseur of Nigerian dishes or embarking on
            a journey of discovery, our meticulously crafted recipes will
            transport your senses to a place of pure gastronomic delight. Come,
            join us at Veronica&apos;s Kitchen, and let the rich and captivating
            flavors of Nigeria become a part of your own narrative.
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStory;
