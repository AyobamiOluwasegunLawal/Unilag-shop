import { TiShoppingCart } from "react-icons/ti";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import unilagLogo from "../assets/unilagLogo.png";
import { useState } from "react";
import ProductCategory from "./ProductCategory";

const Nav = ({ onProductClick, productClick, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onhamClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="logo">
        <img
          src={unilagLogo}
          alt="Uinlag Logo"
          className="w-[8rem] h-[8rem] object-contain"
        />
      </div>

      <ul className="nav-links">
        {links.map((link, idx) => (
          <li key={idx}>
            {link === "Product" ? (
              <a
                href="#"
                className="flex justify-center items-center"
                onClick={onProductClick}
              >
                {link}{" "}
                {productClick ? (
                  <div>
                    <RiArrowDropDownLine className="h-[2rem] w-[2rem]" />
                    <productCategory className="block" />
                  </div>
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
        <div className="flex gap-2">
          <CiSearch className="w-[2rem] h-[2rem]" />
          <input
            type="text"
            placeholder="Search"
            className="border-[2.5px] rounded-full px-2 outline-none text-sm"
          />
        </div>
        <a href="#">
          {isOpen ? (
            <IoMdClose
              onClick={onhamClick}
              className="w-[2rem] h-[2rem] md:hidden"
            />
          ) : (
            <RxHamburgerMenu
              onClick={onhamClick}
              className="w-[2rem] h-[2rem] md:hidden "
            />
          )}
          <TiShoppingCart className="w-[2rem] h-[2rem] hidden md:block" />
        </a>

        <button className="hover:bg-black hover:text-white px-2 py-1 rounded-md">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
