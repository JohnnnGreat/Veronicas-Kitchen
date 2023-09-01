import Link from "next/link";
import Image from "next/image";
import Background from "../public/utils_assets/Testimonial.png";

function Subscribe() {
  return (
    <>
      <div className="subscribe">
        <div className="subscribe__wrapper">
          <div className="subscribe__wrapper__container">
            <Image src={Background} alt="overlay" className="bg-ov"></Image>
            <div>
              <h1
                className="subscribe-header"
                data-aos="fade-down"
                data-aos-duration="500"
              >
                Subscribe to our Newsletter
              </h1>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="subscribe-input-field"
              >
                <input type="text" placeholder="Enter your email" required />
                <Link className="sub-cta" href="/subscribe">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
