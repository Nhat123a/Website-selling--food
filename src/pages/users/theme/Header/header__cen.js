import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import logo from "../../../../assets/users/logo.png";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import headerList from "./interface.tsx";
import { useSelector } from "react-redux";
import data from "./data.js";
import NavMobile from "./NavMobile.js";
const HeaderCenter = ({ setIsCartOpen }) => {
  // console.log(setIsCartOpen);
  const location = useLocation();

  useEffect(() => {}, [location]);
  const cartItems = useSelector((state) => state.cart.cart);
  const favorites = useSelector((state) => state.Favorite.Favorite);

  //Mobile menu
  const [isOpen, setOpen] = useState(false);
  const [isClosing, setClosing] = useState(false);

  const ToggleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 500);
  };

  // Props
  const [menuTitle, setMenuTitle] = useState("Menu");
  const [menuItems, setMenuItems] = useState(data);
  const showMenu = () => {
    setMenuTitle("Menu");
    setMenuItems(data);
    setOpen(!isOpen);
  };

  const showCategory = () => {
    setMenuTitle("Danh mục sản phẩm");
    setMenuItems(data);
    setOpen(true);
  };
  return (
    <div className="container lg:flex items-center gap-6 justify-between">
      {/* Logo group*/}
      <div className=" flex  justify-between items-center">
        {/* Menu bar*/}
        <div className="lg:hidden" onClick={showMenu}>
          <FaBars size={28}></FaBars>
        </div>
        {/* Logo */}
        <div className="header__logo  w-36 h-20 md:flex ">
          <Link to="/">
            <img className="w-full h-full" src={logo} alt="logo" />
          </Link>
        </div>
        {/* Cart icon */}
        <div className="lg:hidden relative">
          <HiOutlineShoppingBag size={32}></HiOutlineShoppingBag>
          <span
            className="rounded-full absolute top-[-5px] right-[-8px] bg-green text-white text-[10px] h-5 w-5 leading-5 flex
          items-center justify-center"
          >
            {cartItems.length}
          </span>
        </div>
      </div>

      {/* Mobile Menu  */}
      {isOpen && (
        <NavMobile
          title={menuTitle}
          data={menuItems}
          isClosing={isClosing}
          ToggleClose={ToggleClose}
        ></NavMobile>
      )}
      {/* END Mobile Menu */}
      {/* Mobile categoreies */}
      <div className="container lg:hidden">
        <div className="bg-white shadow  px-[10px] py-3 fixed bottom-0  lg:hidden z-10 left-0 right-0">
          <div className="Item ">
            <div className="flex items-center  justify-between">
              {headerList.slice(0, 5).map((item, index) => (
                <Link
                  key={item.ID}
                  to={item.slug}
                  onClick={() => item.name === "Danh mục" && showCategory()}
                >
                  <div className="flex relative items-center gap-1 flex-col ">
                    <div className="text-2xl">{item.icon}</div>
                    <span className="hover:text-green font-semibold">
                      {item.name}
                    </span>
                    {index >= 2 && (
                      <span
                        className="bg-green absolute top-[-5px] right-[-2px] text-[12px] text-white 
                        h-[18px] w-[18px] leading-[18px] rounded-full
                      flex items-center justify-center"
                      >
                        {item.total}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* END Mobile categoreies  */}
      <div className="header__right flex  gap-10 flex-grow justify-between  ">
        {/* Tìm kiếm */}
        <div className="header__search relative min-w-360px lg:flex:w-full flex-1 md:flex:w-full">
          <form className="flex items-center">
            <input
              className="pr-10 pl-4 rounded-3xl bg-white w-full h-10 placeholder-slate-900"
              type="text"
              placeholder="Bạn muốn tìm gì?"
            />
            <button className="absolute right-2 w-6 h-6">
              <CiSearch className="w-full h-full" />
            </button>
          </form>
        </div>
        {/* Items */}
        <div className="header__item lg:flex gap-10 cursor-pointer hidden">
          {headerList.slice(-4).map((item) => (
            <Link to={item.slug} key={item.ID}>
              <div
                onClick={() => item.name === "Giỏ hàng" && setIsCartOpen(true)}
                className={`header__icon  min-w-32 border border-solid border-[rgba(0,0,0,0.09)] 
              flex justify-center items-center px-4 py-[6px] space-x-1 rounded-[30px] bg-white hover:bg-yellow 
              
              `}
              >
                <div
                  className="text-[26px] relative"
                  style={{ filter: "brightness(1.5) contrast(0.8)" }}
                >
                  {item.icon}
                  {item.name === "Giỏ hàng" ? (
                    <span
                      className="badge absolute top-[-5px] right-[-5px] px-[3px] py-0
                    bg-[#008b4b] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center"
                    >
                      {cartItems.length}
                    </span>
                  ) : item.name === "Yêu thích" ? (
                    <span
                      className="badge absolute top-[-5px] right-[-5px] px-[3px] py-0
                    bg-[#008b4b] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center"
                    >
                      {favorites.length}
                    </span>
                  ) : item.name === "Hệ thống" ? (
                    <span
                      className="badge absolute top-[-5px] right-[-5px] px-[3px] py-0
                    bg-[#008b4b] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center"
                    >
                      {cartItems.length}
                    </span>
                  ) : (
                    item.total >= 0 && (
                      <span
                        className="badge absolute top-[-5px] right-[-5px] px-[3px] py-0
                      bg-[#008b4b] text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center"
                      >
                        {item.total}
                      </span>
                    )
                  )}
                </div>
                <span className="leading-[2px] text-[#000]">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
