import React, { Fragment, useState, useRef, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
// import data from "./data";
const NavMobile = ({ title, isClosing, data, ToggleClose }) => {
  const SlideRef = useRef(null);
  useEffect(() => {
    const HandleClickOut = (event) => {
      if (SlideRef.current && !SlideRef.current.contains(event.target)) {
        ToggleClose();
      }
    };
    document.addEventListener("mousedown", HandleClickOut);
    return () => {
      document.removeEventListener("mousedown", HandleClickOut);
    };
  }, [ToggleClose]);
  return (
    <div className="fixed inset-0 lg:hidden bg-black bg-opacity-50 transition-opacity z-20 ">
      <div
        ref={SlideRef}
        className={`bg-white h-screen ${
          isClosing
            ? "animate-slideOut duration-300 ease-in-out delay-100"
            : "animate-slideIn duration-300 ease-in-out delay-100"
        }
             md:w-[50%] sm:w-[50%] fixed inset-0 w-[70%]   z-40 `}
      >
        <div className="flex items-center text-[#fff] justify-between bg-green">
          <div className="Title flex-grow">
            <h2 className="whitespace-nowrap text-center uppercase text-base font-bold leading-10 ">
              {title}
            </h2>
          </div>
          <div className="close pr-3" onClick={ToggleClose}>
            <IoCloseOutline size={24}></IoCloseOutline>
          </div>
        </div>
        {/* Item */}
        <div className="my-3">
          <ul>{title === "Menu" ? RenderMenu(data) : RenderCategory(data)}</ul>
        </div>
      </div>
    </div>
  );
};

const RenderMenu = (data) => {
  const navigate = useNavigate();
  const handleClick = (slug) => {
    navigate(slug, { state: { refresh: Date.now() } });
  };
  return (
    <>
      {data.map((item) => (
        <Fragment key={item.ID}>
          <li
            className="py-2 text-base font-semibold px-4 hover:text-green"
            onClick={() => handleClick(item.Slug)}
          >
            {item.Name}
          </li>
        </Fragment>
      ))}
    </>
  );
};
const RenderCategory = (data) => {
  const category = data.filter((item) => item.subLinks);
  const [openIndex, setOpenIndex] = useState(null);

  const showItem = (index) => {
    setOpenIndex(index);
  };
  return (
    <>
      {category.map((item) => (
        <Fragment key={item.ID}>
          <Link to={item.Slug}>
            <ul>
              {item.subLinks.map((subItem, index) => (
                <Fragment key={index}>
                  <li className="p-2 text-base  font-semibold cursor-pointer flex items-center justify-between ">
                    <span className="flex items-center gap-2">
                      <div className="text-xl">{subItem.icon}</div>{" "}
                      {subItem.Header}
                    </span>

                    {subItem.subLink && (
                      <div className="mr-3" onClick={showItem}>
                        <FiPlus size={24}></FiPlus>
                      </div>
                    )}
                  </li>
                  {subItem.subLink && (
                    <ul className="px-12">
                      {subItem.subLink.map((sublink, index) => (
                        <Link
                          key={index}
                          to={sublink.Slug}
                          className="block text-sm font-semibold mb-1"
                          onClick={() => showItem(index)}
                        >
                          {openIndex === index && <li>{sublink.Name}</li>}
                        </Link>
                      ))}
                    </ul>
                  )}
                </Fragment>
              ))}
            </ul>
          </Link>
        </Fragment>
      ))}
    </>
  );
};
export default NavMobile;
