import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { ROUTER } from "../../untils/router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtoCart } from "../../Redux/CartSlice";

export const Card__product = ({
  productid,
  productName,
  priceNew,
  priceOld,
  Status,
  productCount,
  productImage,
  tabId,
}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      productID: productid,
      productName: productName,
      productImage: productImage[0],
      priceNew: priceNew,
      priceOld: priceOld,
      status: Status,
      productCount: productCount,
      tabId: tabId,
    };
    dispatch(addtoCart(product));
    toast.success("Thêm thành công", {
      position: "top-center", // Sử dụng chuỗi vị trí
      autoClose: 3000, // Tự động đóng sau 3 giây
    });
  };
  const [active, setActive] = useState(false);
  // Giảm giá
  const Sale = () => {
    if (priceOld && priceNew) {
      if (priceNew < priceOld) {
        const count = ((priceOld - priceNew) / priceOld) * 100;
        return Math.round(count);
      }
    }
    return "";
  };
  const handleMouseEnter = () => {
    setActive(true);
  };
  const handleMouseLeave = () => {
    setActive(false);
  };
  const HandleClickProduct = () => {
    window.location.href = `${ROUTER.USER.Details}/${encodeURIComponent(
      productName
    )}/${productid}`;
  };

  return (
    <div
      className="Card__box bg-white   rounded-[10px] w-full  group overflow-hidden border border-gray shadow-sm mt-3 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="image m-auto transition-opacity duration-300 group-hover:opacity-50 w-full h-110">
        <img
          src={productImage}
          alt={productName}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="CardItem">
        {active && (
          <div
            className={`Items__hover absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 ${
              active ? "opacity-100 transition-all duration-500 delay-500" : ""
            }`}
          >
            <ul className="lg:flex items-center hidden justify-center border border-[#bce3c9] rounded-[20px] transition-all duration-300">
              <li
                className="border border-gray text-green p-2 bg-white hover:text-yellow"
                title="Xem nhanh"
              >
                <Link>
                  <MdOutlineRemoveRedEye size={20} />
                </Link>
              </li>
              <li
                className="border border-gray text-green p-2 bg-white  hover:text-yellow"
                title="Thêm vào yêu thích"
              >
                <Link>
                  <CiHeart size={20} />
                </Link>
              </li>
              <li
                className="border border-gray text-green p-2 bg-white  hover:text-yellow"
                title="So sánh"
              >
                <Link>
                  <MdOutlineCompareArrows size={20} />
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="Bage absolute top-3 left-1 transition-opacity duration-300 group-hover:opacity-50">
          {Sale() !== "" && (
            <span className="bg-red px-[13px] text-center text-sm py-[2px] rounded-3xl text-white font-normal">
              {Sale()}%
            </span>
          )}
        </div>
      </div>
      <div className="Card__info text-center mb-3 leading-7">
        <div className="Product__Name font-semibold text-base whitespace-nowrap">
          <Link onClick={HandleClickProduct} className="hover:text-green">
            {productName}
          </Link>
        </div>
        <div className="price__box flex items-center justify-center gap-3">
          {priceOld && (
            <span className="price__old line-through text-xs text-[#838383]">
              <CurrencyFormat
                value={priceOld}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"₫"}
              />
            </span>
          )}
          {priceNew && (
            <span className="price__new text-green font-semibold">
              <CurrencyFormat
                value={priceNew}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"₫"}
              />
            </span>
          )}
        </div>
        <div className="btnn__add">
          <button
            onClick={handleAddToCart}
            className="bg-green whitespace-nowrap text-white font-medium rounded-[30px] text-center text-sm py-[6px] px-6 hover:bg-yellow hover:text-black transition-all duration-300 mt-3"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </div>
  );
};
