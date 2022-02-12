import { Link } from "react-router-dom";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const MobileNav = ({ showMobilenav }) => {
  const [products, setProducts] = useState(false);
  return (
    <div id="mobilenav">
      <div className="mobilenav-header">
        <img
          src="https://res.cloudinary.com/wizzle3d/image/upload/v1644689063/samples/logo_k1gepb.svg"
          alt=""
          width="54"
        />
        <BsXLg id="mobilenav-toggle" onClick={() => showMobilenav(false)} />
      </div>
      <div className="mobile-menu">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/" className="link" onClick={() => setProducts(!products)}>
          Products
          <IoIosArrowDown
            style={{ float: "right", fontSize: 20, color: "black" }}
          />
          {products && (
            <div className="mobile-drop-down">
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
        <Link to="/" className="link">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
