import Link from "next/link";

function Subscribe() {
  return (
    <>
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
    </>
  );
}

export default Subscribe;
