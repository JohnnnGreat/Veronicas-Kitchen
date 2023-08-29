import Link from "next/link";
import Image from "next/image";

function Orders({ price, orderImage, title, desc }) {
  return (
    <>
      <div className="order-card">
        <div className="circle">
          <Image
            className="food_img"
            src={orderImage}
            alt="Order image"
          ></Image>
          <div className="price_tag">
            <p>${price}</p>
          </div>
        </div>
        <div className="content">
          <h1 className="food_title">{title}</h1>
          <p className="food_desc">{desc}</p>
        </div>

        <div className="btn-orders">
          <Link className="btn-cta" href="/orders">
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Orders;
