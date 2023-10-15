import React from "react";
import Link from "next/link";
import Image from "next/image";

// Icons Assets
import Arrow from "@/public/icons_assets/Vector (2).png";

function SendMessage({ text, success }) {
  return (
    <>
      <button className="exp_btn">
        <div className="explore-link">
          {success && (
            <div className="loader">
              <div className="boxes">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
          )}

          <p>{text}</p>
          <div className="rounder">
            <Image className="arrow_img" src={Arrow} alt="exp-arrow"></Image>
          </div>
        </div>
      </button>
    </>
  );
}

export default SendMessage;
