import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/index_assets/Layer 1.png";
import NavOpen from "@/public/utils_assets/Close.png";
import CloseBtn from "@/public/utils_assets/Menu.svg";
import CloseBtnNot from "@/public/utils_assets/NavC.svg";

import { useEffect, useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavOpen() {
    setNavOpen(true);
  }

  function handleCloseBtn() {
    setNavOpen(false);
  }

  // Set the grand opening date and time
  const grandOpeningDate = new Date("April 7, 2024 17:00:00").getTime();

  // Initialize state for the time remaining
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [closeNotification, setCloseNotification] = useState(false);
  // Function to calculate the time remaining until the grand opening
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const timeDifference = grandOpeningDate - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      if (now >= grandOpeningDate) {
        // If it's past the grand opening time, stop the timer
        clearInterval(interval);
      } else {
        // If it's before the grand opening time, update the time remaining
        setTimeRemaining(calculateTimeRemaining());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCloseNot = () => {
    setCloseNotification(true);
  };

  return (
    //Header section
    <header className="header">
      {timeRemaining.days >= 0 && (
        <div className={`notification ${closeNotification && "cln"}`}>
          <Image
            src={CloseBtnNot}
            onClick={handleCloseNot}
            className={`close_not`}
            alt="Close btn"
          ></Image>

          <b>Grand Opening:</b>
          <div>
            <p>
              {" "}
              <b>Days:</b> {timeRemaining.days}
            </p>
            <p>
              <b>Hours:</b> {timeRemaining.hours}
            </p>
            <p>
              <b>Minutes:</b> {timeRemaining.minutes}
            </p>
            <p>
              <b>Seconds:</b> {timeRemaining.seconds}
            </p>
          </div>
        </div>
      )}

      <div className={`overlay ${navOpen && "showOverlay"}`}></div>

      <div className="header__wrapper">
        <div className="header_c">
          <div className="header_c__l">
            <Link
              className="header-link"
              style={{ textDecoration: "none" }}
              href={"/"}
            >
              <h1 className="header_c__l__text">VERONICA&apos;S KITCHEN</h1>
            </Link>
          </div>
          <div className="header_c__logo">
            <div className="round">
              <Image
                src={LogoImage}
                className="logoMain"
                alt="Logo Image"
              ></Image>
            </div>
          </div>
          <nav className={`header_c__n ${navOpen && "open-nav"}`}>
            <Image
              src={CloseBtn}
              onClick={handleCloseBtn}
              className="close_nav"
              alt="Close btn"
            ></Image>
            <ul>
              <li>
                <Link
                  onClick={handleCloseBtn}
                  className="nav-link"
                  href="/our-story"
                >
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleCloseBtn}
                  className="nav-link"
                  href="/gallery"
                >
                  GALLERY
                </Link>
              </li>

              <li>
                <Link
                  onClick={handleCloseBtn}
                  className="nav-link"
                  href="/catering"
                >
                  CATERING
                </Link>
              </li>
              {/* <li>
                <Link
                  onClick={handleCloseBtn}
                  className="nav-link"
                  href="/reservations"
                >
                  RESERVATIONS
                </Link>
              </li> */}
              <li>
                <Link
                  onClick={handleCloseBtn}
                  className="nav-link"
                  href="/contact"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </nav>
          <div onClick={handleNavOpen} className="nav_menu">
            <Image className="nav_btn" alt="close btn" src={NavOpen}></Image>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
