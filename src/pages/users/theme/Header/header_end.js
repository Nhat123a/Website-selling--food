import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import data from "./data";
const HeaderEnd = () => {
  const [active, setActive] = useState(1);
  const [hoverItem, setHoverItem] = useState(null);
  const [subHovered, setSubHovered] = useState(false);
  const category = data.filter((item) => item.subLinks);
  const [hoverCate, sethoverCate] = useState(false);
  const categoryRef = useRef(null);

  const [hoveredHeader, setHoveredHeader] = useState(null);

  const handleactive = (id) => {
    setActive(id);
  };

  // Click out in cate
  const handleClickOut = (event) => {
    if (categoryRef.current && !categoryRef.current.contains(event.target)) {
      sethoverCate(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOut, true);
    return () => {
      document.removeEventListener("click", handleClickOut, true);
    };
  }, []);

  return (
    <div className="container hidden lg:flex  ">
      <div className="flex items-center justify-between gap-20 w-full">
        {/* Danh mục */}
        <div
          className="max-w-60 w-full relative "
          ref={categoryRef}
          onClick={() => {
            sethoverCate((prev) => !prev);
          }}
        >
          <div
            className="Header__Category w-full px-2 flex items-center gap-2 justify-center  rounded-md
             bg-yellow h-10 cursor-pointer "
          >
            <div className="Category__bar">
              <FaBarsStaggered size={20} />
            </div>
            <span className="font-semibold whitespace-nowrap">
              Danh mục sản phẩm
            </span>
          </div>
          {hoverCate && (
            <div className="Category__item bg-white shadow-lg absolute w-full z-50">
              {category.map((item, index) => (
                <div key={index}>
                  <ul className="relative">
                    {item.subLinks.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="hover:bg-yellow w-full py-2 "
                      >
                        <Link
                          to={subItem.Slug}
                          className="flex items-center justify-start text-base gap-5"
                          onMouseEnter={() => setHoveredHeader(subItem.Header)}
                        >
                          <span className="ml-4 text-xl">{subItem.icon}</span>
                          {subItem.Header}
                          {/* Ensure subItem has subLink and it's not empty */}
                          {subItem.subLink && subItem.subLink.length > 0 && (
                            <span className="absolute right-2">
                              <FaAngleRight size={15} />
                            </span>
                          )}
                        </Link>
                        <div
                          className={`absolute bg-white gap-3 text-center  grid grid-cols-4  top-0 left-[203px] h-full w-[700px] px-3 py-1 shadow-lg ${
                            hoveredHeader === subItem.Header
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {subItem.subLink.map((sublink, index) => (
                            <div key={index}>
                              <Link
                                className="text-base font-semibold text-green "
                                to={sublink.Slug}
                              >
                                {sublink.Name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Item navbar*/}
        <div className="Header__navbar float-right  whitespace-nowrap flex gap-3 ">
          <div>
            <ul className=" flex justify-between gap-3 font-semibold">
              {data.map((item) => (
                <div className="relative" key={item.ID}>
                  <Link
                    to={item.Slug}
                    className={`py-[8px] px-6  hover:bg-green hover:text-white rounded-3xl ${
                      active === item.ID
                        ? "bg-green text-[#fff]"
                        : "bg-[#F1FAF6]"
                    }`}
                    onClick={() => handleactive(item.ID)}
                    onMouseEnter={() => setHoverItem(item.ID)}
                    onMouseLeave={() => {
                      if (!subHovered) {
                        setSubHovered(true);
                      }
                    }}
                  >
                    <span className="">{item.Name}</span>
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderEnd;
