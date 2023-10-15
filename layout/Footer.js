import "remixicon/fonts/remixicon.css";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__wrapper__first-container">
          <div className="item">
            <h1 className="item__header">OPENING HOURS</h1>
            <ul className="item__lists">
              <li>Monday - Friday</li>
              <li>8:00 am to 9:00 pm</li>
            </ul>
          </div>
          <div className="item">
            <br />
            <ul className="item__lists mt">
              <li>Saturday</li>
              <li>8:00 am to 9:00 pm</li>
            </ul>
          </div>
          <div className="item">
            <br />
            <ul className="item__lists mt">
              <li>SUNDAY</li>
              <li>CLOSED</li>
            </ul>
          </div>
          <div className="item">
            <h1 className="item__header">NAVIGATION</h1>
            <ul className="item__lists">
              <li>Our Story</li>
              <li>Gallery</li>
              <li>Reservation</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="item">
            <h1 className="item__header">Follow Us</h1>
            <div className="social_media">
              <div>
                <Link
                  href="  https://web.facebook.com/veronicas.kitchen.3?_rdc=1&_rdr"
                  target="_blank"
                >
                  {" "}
                  <i class="ri-facebook-fill"></i>
                </Link>
              </div>
              <div>
                <Link
                  href="mailto:contact@veronicas-kitchen.com"
                  target="_blank"
                >
                  {" "}
                  <i class="ri-mail-line"></i>
                </Link>
              </div>
              <div>
                <Link href=''></Link>
                <i class="ri-instagram-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__wrapper__second-container">
          <div className="divider"></div>
          <div className="all-reserved">
            <p>
              2022 Restaurants. All Right Reserved. Powered by MacGroup Tech
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
