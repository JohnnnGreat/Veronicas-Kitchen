import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import FoodOne from "../public/food_assets/food 1.png";
import FoodTwo from "@/public/food_assets/image 2 (1).png";
import FoodThree from "@/public/food_assets/food 3.png";
import { useEffect, useState } from "react";
import OrderComponent from "@/components/Orders";
import WhyUsComponent from "@/components/Why_us";
import SendMessage from "@/components/SendMessage";
import Subscribe from "@/components/subscribe";
import TracedImage from "@/public/utils_assets/Traced.svg";
import Head from "next/head";

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
import Background from "../public/utils_assets/Testimonial.png";

// import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

// import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import SwiperCore from "swiper";

import Preloader from "@/components/Preloader";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
// import Swiper from "swiper";
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  Autoplay,
} from "swiper/modules";

import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Autoplay]);
// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4500);
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [value, setValue] = useState(0);
  const Images = [FoodOne, FoodTwo, FoodThree];

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    let count = 1;
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
  const swiperParams = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  };
  return (
    <>
      <Head>
        <title>HOME | Veronica&apos;s Kitchen</title>
        <meta
          name="description"
          content="Veronica's Kitchen isn't just a restaurant; it's a
          cultural bridge that connects the vibrant spirit of Nigeria to the
          diverse tapestry of the world."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook Open Graph */}
        <meta
          property="og:url"
          content="https://web.facebook.com/veronicas.kitchen.3?_rdc=1&_rdr"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HOME | Veronica Kitchen" />
        <meta
          property="og:description"
          content="Veronica's Kitchen isn't just a restaurant; it's a
          cultural bridge that connects the vibrant spirit of Nigeria to the
          diverse tapestry of the world."
        />
        <meta
          property="og:image"
          // content="https://midwest-jack-greens-main.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c8df4b2a.png&w=256&q=75"
        />
      </Head>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="home">
          <div className="hero">
            <div className="trc-container">
              <Image
                src={TracedImage}
                className="trace-image"
                alt="traced image for the hero"
              ></Image>
            </div>

            <div className="hero__wrapper">
              <div className="hero_content">
                <div className="hero__first">
                  <h1 className="first_text">
                    Serving Nigeria&apos;s Delicious Cusine
                  </h1>
                  <p className="first_desc">
                    We understand the irreplaceable comfort of home, which is
                    why we have crafted an extraordinary dining experience that
                    brings the essence of home directly to you. Indulge in our
                    exquisite selection of tantalising Nigerian dishes,
                    meticulously prepared to satisfy your cravings and evoke
                    cherished memories.
                  </p>
                  <div className="first_cta">
                    {/* <Link className="cta-btn grey" href="/reservations">
                      MAKE RESERVATION
                    </Link> */}
                    <Link
                      className="cta-btn brown"
                      target="_blank"
                      href=" https://veronicaskitchen.hrpos.heartland.us/menu"
                    >
                      LIVE MENU
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
                <h1 c>Today&apos;s Special Offer</h1>
                <p>
                  Embark on a journey of culinary bliss with our selection of
                  the day&apos;s finest dishes. Indulge in the flavors that
                  reign supreme, crafted with passion and expertise, for an
                  unforgettable dining experience.
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
                    desc="Experience the delightful Seafood Okra, a delectable combination of fresh seafood and tender okra cooked in a scrumptious broth of tomatoes, onions, and traditional Nigerian spices..
              "
                    orderImage={OrderOne}
                  />
                </div>
                {/* <div>
              <OrderComponent
                price="150"
                title="Seafood Okra"
                desc="Experience the delightful Seafood Okra, a delectable combination of fresh seafood and tender okra cooked in a scrumptious broth of tomatoes, onions, and traditional Nigerian spices. Indulge in this savory dish showcasing the best of African coastal cuisine."
                orderImage={OrderOne}
              />
            </div> */}
              </div>
            </div>
          </div>
          <div className="why-us">
            <div className="why-us__wrapper">
              <div className="why-us__wrapper__header">
                <h1>
                  Why Choose Us <span style={{ color: "#5c6574" }}>?</span>
                </h1>
              </div>
              <div className="why-us__wrapper__content">
                <div data-aos="fade-down" data-aos-duration="1000">
                  <WhyUsComponent
                    title="Healthy Food"
                    image={First}
                    desc="Our commitment to your well-being ensures that we meticulously prepare each meal with the highest hygiene standards in mind. Enjoy a healthy dining experience that is both delicious and nourishing, ensuring your satisfaction and peace of mind."
                  />
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  {" "}
                  <WhyUsComponent
                    title="Quality Food"
                    image={Second}
                    desc="Experience the true essence of quality food as we curate each dish with utmost attention to detail. Indulge in our culinary creations made from the finest ingredients, delivering a dining experience that is both satisfying and memorable."
                  />
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <WhyUsComponent
                    title="Memorable Ambience"
                    image={Third}
                    br={true}
                    desc="Immerse yourself in a cozy ambiance that effortlessly combines comfort and elegance, providing the perfect setting to savor delightful flavors and create lasting memories."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="explore" data-aos="zoom-in" data-aos-duration="1000">
            <div className="explore__wrapper">
              <div className="explore__wrapper__header">
                <h1>Explore the Heaven that is Our Restaurant</h1>
                <p>
                  Explore our restaurant gallery, featuring stunning visuals
                  that showcase our inviting atmosphere, delectable culinary
                  creations, and warm hospitality.
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
              <div className="explore-container">
                <Link className="link" href="/gallery">
                  <SendMessage text="VIEW MORE IN OUR GALLERY" />
                </Link>
              </div>
            </div>
          </div>
          <div className="testimonials">
            {/* <div className="overlay"></div> */}
            <Image src={Background} alt="overlay" className="bg-ov"></Image>
            <div className="testimonials__wrapper">
              <div className="testimonials__wrapper__header">
                <h1>Discover What Our Ecstatic Customers Have to Say</h1>
              </div>
              <div className="testimonials__wrapper__contents">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={false}
                  pagination={{ clickable: true }}
                  scrollbar={false}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  autoplay={{ delay: 3000 }}
                  modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    EffectCube,
                  ]}
                >
                  <SwiperSlide className="swiper">
                    <div className="testimonials__card">
                      <div className="testimonial-content">
                        <i class="ri-double-quotes-l"></i>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Distinctio expedita impedit nesciunt inventore
                          illo, est eius voluptas facere eligendi earum veniam
                          cupiditate quos dignissimos sequi maiores quod
                          obcaecati laborum suscipit.
                        </p>

                        <h1>John Doe</h1>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper">
                    <div className="testimonials__card">
                      <div className="testimonial-content">
                        <i class="ri-double-quotes-l"></i>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Distinctio expedita impedit nesciunt inventore
                          illo, est eius voluptas facere eligendi earum veniam
                          cupiditate quos dignissimos sequi maiores quod
                          obcaecati laborum suscipit.
                        </p>

                        <h1>John Doe</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                {/* <MDBCarousel showControls dealy={3000} showIndicators>
                  <MDBCarouselItem
                    className="swiper"
                    itemId={1}
                    src="https://mdbootstrap.com/img/new/slides/041.jpg"
                    alt="..."
                  >
                    <div className="c-content">1</div>
                  </MDBCarouselItem>
                  <MDBCarouselItem
                    className="swiper"
                    itemId={2}
                    src="https://mdbootstrap.com/img/new/slides/042.jpg"
                    alt="..."
                  >
                    <div>2</div>
                  </MDBCarouselItem>
                  <MDBCarouselItem
                    className="swiper"
                    itemId={3}
                    src="https://mdbootstrap.com/img/new/slides/043.jpg"
                    alt="..."
                  />
                </MDBCarousel> */}
              </div>
            </div>
          </div>
          <Subscribe />
        </div>
      )}
    </>
  );
}
