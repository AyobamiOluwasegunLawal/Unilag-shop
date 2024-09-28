import { TiShoppingCart } from "react-icons/ti";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const links = ["Home", "Product", "Contact"];
const Nav = () => {
  const [productClick, setProductClick] = useState(false);
  const handleProductClick = () => {
    setProductClick((prev) => !prev);
  };

  return (
    <nav>
      <div className="logo">
        <p>Unilag shop</p>
      </div>

      <ul className="nav-links">
        {links.map((link, idx) => (
          <li key={idx}>
            {link === "Product" ? (
              <a
                href="#"
                className="flex justify-center items-center"
                onClick={handleProductClick}
              >
                {link}{" "}
                {productClick ? (
                  <RiArrowDropDownLine className="h-[2rem] w-[2rem]" />
                ) : (
                  <RiArrowDropUpLine className="h-[2rem] w-[2rem]" />
                )}
              </a>
            ) : (
              <a href="#">{link}</a>
            )}
          </li>
        ))}
      </ul>

      <div className="cart-nav flex gap-4">
        <a href="#">
          <TiShoppingCart className="w-[2rem] h-[2rem]" />
        </a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Nav;
