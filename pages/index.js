import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import FoodOne from "../public/food_assets/food 1.png";
import FoodTwo from "@/public/food_assets/image 2 (1).png";
import FoodThree from "@/public/food_assets/food 3.png";
import { useEffect, useState } from "react";
import OrderComponent from "@/components/Orders";
import WhyUsComponent from "@/components/Why_us";

//Special Food Orders
import OrderOne from "@/public/special_assets/foodOne.png";

//Why Us?
import First from "@/public/why_us_assets/Fork.png";
import Second from "@/public/why_us_assets/Knife.png";
import Third from "@/public/why_us_assets/Deli.png";

//Explore Images
import ExOne from "@/public/explore_assets/Frame 8428.png";
import ExTwo from "@/public/explore_assets/Frame 8429.png";
import ExThree from "@/public/explore_assets/Frame 8430.png";
import ExFour from "@/public/explore_assets/Frame 8431.png";
import ExFive from "@/public/explore_assets/Frame 8432.png";

//Icons Assets
import Arrow from "@/public/icons_assets/Vector (2).png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [value, setValue] = useState(0);
  const Images = [FoodOne, FoodTwo, FoodThree];
  let count = 1;
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 3) count = 0;
      setValue(count);
      count = count + 1;

      // setActiveIndex((prevIndex) => prevIndex + 1);
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="home">
      <div className="hero">
        <div className="hero__wrapper">
          <div className="hero_content">
            <div className="hero__first">
              <h1 className="first_text">Serving Nigeria’s Delicious Cusine</h1>
              <p className="first_desc">
                We understand the irreplaceable comfort of home, which is why we
                have crafted an extraordinary dining experience that brings the
                essence of home directly to you. Indulge in our exquisite
                selection of tantalising Nigerian dishes, meticulously prepared
                to satisfy your cravings and evoke cherished memories.
              </p>
              <div className="first_cta">
                <Link className="cta-btn grey" href="/reservations">
                  MAKE RESERVATION
                </Link>
                <Link className="cta-btn brown" href="/reservations">
                  MAKE ORDER
                </Link>
              </div>
            </div>
            <div className="hero__second">
              <div
                className={`food_container  ${
                  value == 0 ? "foodCOne" : "closeOne"
                }`}
              >
                <div>
                  <Image
                    src={FoodOne}
                    className={`food foodOne`}
                    alt="Food One"
                  ></Image>
                </div>
              </div>
              <div
                className={`food_container twoShift ${
                  value == 1 ? "foodCTwo" : "closeTwo"
                }`}
              >
                <div>
                  {" "}
                  <Image
                    src={FoodTwo}
                    className="food foodTwo"
                    alt="Food Two"
                  ></Image>
                </div>
              </div>
              <div
                className={`food_container shift ${
                  value == 2 ? "foodCThree" : "closeThree"
                }`}
              >
                <div>
                  <Image
                    src={FoodThree}
                    className={`food foodThree`}
                    alt="Food Three"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="special">
        <div className="special__wrapper">
          <div className="special__wrapper__header">
            <h1 c>Today's Special Offer</h1>
            <p>
              Embark on a journey of culinary bliss with our selection of the
              day's finest dishes. Indulge in the flavors that reign supreme,
              crafted with passion and expertise, for an unforgettable dining
              experience.
            </p>
          </div>
          <div className="special__wrapper__order">
            <div>
              <OrderComponent
                price="150"
                title="Egusi"
                desc="Enjoy the rich and flavorful Egusi Soup, a traditional delicacy known for its blend of ground egusi seeds simmered in a savory broth with assorted meats, vegetables, and aromatic spices."
                orderImage={OrderOne}
              />
            </div>
            <div>
              <OrderComponent
                price="150"
                title="Jollof Rice"
                desc="Savor the irresistible Jollof Rice, a vibrant blend of seasoned long-grain rice cooked with tomatoes, onions, peppers, and exotic spices. Experience the essence of West African cuisine in every bite.
              "
                orderImage={OrderOne}
              />
            </div>
            <div>
              <OrderComponent
                price="150"
                title="Seafood Okra"
                desc="Experience the delightful Seafood Okra, a delectable combination of fresh seafood and tender okra cooked in a scrumptious broth of tomatoes, onions, and traditional Nigerian spices. Indulge in this savory dish showcasing the best of African coastal cuisine."
                orderImage={OrderOne}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="why-us">
        <div className="why-us__wrapper">
          <div className="why-us__wrapper__header">
            <h1>Why Choose Us</h1>
          </div>
          <div className="why-us__wrapper__content">
            <WhyUsComponent
              title="Healthy Food"
              image={First}
              desc="Our commitment to your well-being ensures that we meticulously prepare each meal with the highest hygiene standards in mind. Enjoy a healthy dining experience that is both delicious and nourishing, ensuring your satisfaction and peace of mind."
            />
            <WhyUsComponent
              title="Quality Food"
              image={Second}
              desc="Experience the true essence of quality food as we curate each dish with utmost attention to detail. Indulge in our culinary creations made from the finest ingredients, delivering a dining experience that is both satisfying and memorable."
            />
            <WhyUsComponent
              title="Memorable Ambience"
              image={Third}
              desc="Immerse yourself in a cozy ambiance that effortlessly combines comfort and elegance, providing the perfect setting to savor delightful flavors and create lasting memories."
            />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="explore__wrapper">
          <div className="explore__wrapper__header">
            <h1>Explore the Heaven that is Our Restaurant</h1>
            <p>
              Explore our restaurant gallery, featuring stunning visuals that
              showcase our inviting atmosphere, delectable culinary creations,
              and warm hospitality.
            </p>
          </div>
          <div className="explore__wrapper__contents">
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
          <div className="exp_btn">
            <Link className="explore-link" href={"/"}>
              <p>VIEW MORE IN OUR GALLERY</p>
              <div className="rounder">
                {" "}
                <Image
                  className="arrow_img"
                  src={Arrow}
                  alt="exp-arrow"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="testimonials">
        {/* <div className="overlay"></div> */}
        <div className="testimonials__wrapper">
          <div className="testimonials__wrapper__header">
            <h1>Discover What Our Ecstatic Customers Have to Say</h1>
          </div>
          <div className="testimonials__wrapper__contents">
            <div className="testimonials__card">
              <h1></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe">
        <div className="subscribe__wrapper">
          <div className="subscribe__wrapper__container">
            <div>
              <h1 className="subscribe-header">Subscribe to our Newsletter</h1>
              <div className="subscribe-input-field">
                <input type="text" placeholder="Enter your email" required />
                <Link className="sub-cta" href="/subscribe">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
