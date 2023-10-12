import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/index_assets/Layer 1.png";
import NavOpen from "@/public/utils_assets/Close.png";
import CloseBtn from "@/public/utils_assets/Menu.svg";
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavOpen() {
    setNavOpen(true);
  }

  function handleCloseBtn() {
    setNavOpen(false);
  }
  return (
    //Header section
    <header className="header">
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
              <li>
                <Link
                  onClick={handleCloseBtn}
                  className="nav-link"
                  href="/reservations"
                >
                  RESERVATIONS
                </Link>
              </li>
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
