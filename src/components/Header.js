import { useState } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import MobileNav from "./MobileNav";

const Header = () => {
  const [products, setProducts] = useState(false);
  const [mobilenav, showMobilenav] = useState(false);
  return (
    <header>
      <img
        src="https://res.cloudinary.com/wizzle3d/image/upload/v1644689063/samples/logo_k1gepb.svg"
        alt=""
        width="54"
      />
      <BsList id="mobilenav-toggle" onClick={() => showMobilenav(!mobilenav)} />
      {mobilenav && <MobileNav showMobilenav={showMobilenav} />}
      <nav id="main-nav">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link" onClick={() => setProducts(!products)}>
          {products && (
            <div className="drop-down">
              <Link
                to="/"
                className="dropdown-link"
                onClick={() => setProducts(false)}
              >
                Stocks
              </Link>
              <Link
                to="/"
                className="dropdown-link"
                onClick={() => setProducts(false)}
              >
                Real Estate
              </Link>
              <Link
                to="/"
                className="dropdown-link"
                onClick={() => setProducts(false)}
              >
                Fixed Income
              </Link>
              <Link
                to="/"
                className="dropdown-link"
                onClick={() => setProducts(false)}
              >
                Build Wealth
              </Link>
            </div>
          )}
          Products
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginLeft: 5 }}
          >
            <path
              d="M5 0C4.724 0 4.5 0.224 4.5 0.5V10.4747L0.861999 6.65525C0.671749 6.4555 0.355499 6.44725 0.154999 6.638C-0.0450011 6.8285 -0.0527511 7.14475 0.137749 7.34475L4.29275 11.707C4.48175 11.896 4.73275 12 5 12C5.267 12 5.51825 11.896 5.7155 11.6982L9.862 7.34475C10.0525 7.14475 10.0445 6.8285 9.84475 6.638C9.645 6.44725 9.3285 6.45525 9.138 6.65525L5.5 10.4908V0.5C5.5 0.224 5.276 0 5 0Z"
              fill="#07969E"
            />
          </svg>
        </Link>
        <Link to="/" className="link">
          Investment Club
        </Link>
        <Link to="/" className="link">
          About Us
        </Link>
        <Link to="/" className="link">
          FAQs
        </Link>
        <Link to="/" className="link" style={{ marginRight: 0 }}>
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
