import Link from "next/link";
import Image from "next/image";

function WhyUs({ image, title, desc, br }) {
  return (
    <>
      <div className="content__card">
        <Image className="why-img" src={image} alt="why_us"></Image>
        <div className="content-main">
          <h1>{title}</h1>
          <p>{desc}</p>
          {br && (
            <>
              <br />
              <br />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default WhyUs;
