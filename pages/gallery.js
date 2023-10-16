import React from "react";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import Head from "next/head";

//Explore Images
import ExOne from "@/public/explore_assets/Frame 8428.png";
import ExTwo from "@/public/explore_assets/Frame 8429.png";
import ExThree from "@/public/explore_assets/Frame 8430.png";
import ExFour from "@/public/explore_assets/Frame 8431.png";
import ExFive from "@/public/explore_assets/Frame 8432.png";

function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery | Veronicas Kitchen</title>
      </Head>
      <HeroSection
        title="Explore the Heaven that is Our Restaurant"
        desc="Explore our restaurant gallery, featuring stunning visuals that showcase our inviting atmosphere, delectable culinary creations, and warm hospitality."
      />
      <div className="gallery">
        <div className="gallery__wrapper">
          <div className="gallery__wrapper__contents">
            <div className="one grid">
              <Image
                src={ExOne}
                className="exp_image"
                alt="explore images"
              ></Image>
              <Image
                className="exp_image"
                src={ExTwo}
                alt="explore images"
              ></Image>
            </div>
            <div className="one">
              <Image
                className="exp_image middle"
                src={ExFive}
                alt="explore images"
              ></Image>
            </div>
            <div className="one grid">
              <Image
                className="exp_image"
                src={ExFour}
                alt="explore images"
              ></Image>
              <Image
                className="exp_image"
                src={ExThree}
                alt="explore images"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
