import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { ROUTER } from "../../untils/router";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addtoCart } from "../../Redux/CartSlice";
import { useModal } from "../Modal/Product/Modalcontext";
import { addFavorite, RemoveFavorite } from "../../Redux/FavoriteSlice";

export const Card__product = ({
  productid,
  productName,
  priceNew,
  priceOld,
  Status,
  productCount,
  productImage,
  Description,
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
  // Thêm sản phẩm yêu thích
  const HandleAddFavorite = () => {
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
    dispatch(addFavorite(product));
    toast.success("Đã thêm sản phẩm yêu thích", {
      position: "top-center", // Sử dụng chuỗi vị trí
      autoClose: 3000, // Tự động đóng sau 3 giây
    });
  };
  const favorites = useSelector((state) => state.Favorite.Favorite);
  const isFavorite = favorites.some((x) => x.productID === productid);

  // Xóa
  const HandleRemovefavorite = (productID) => {
    dispatch(RemoveFavorite({ productID }));
    toast.success("Đã xóa sản phẩm yêu thích", {
      position: "top-center",
      autoClose: 3000,
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

  const { handleModal } = useModal();

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
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleModal(true, {
                    productid,
                    productName,
                    productImage,
                    priceNew,
                    priceOld,
                    Description,
                  });
                }}
              >
                <li
                  className="border border-gray text-green p-2 bg-white hover:text-yellow"
                  title="Xem nhanh"
                >
                  <MdOutlineRemoveRedEye size={20} />
                </li>
              </Link>

              {isFavorite ? (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    HandleRemovefavorite(productid);
                  }}
                >
                  <li
                    className="border border-gray text-yellow p-2 bg-white "
                    title="Bỏ yêu thích"
                  >
                    <FaHeart size={20} />
                  </li>
                </Link>
              ) : (
                <Link
                  onClick={(e) => {
                    e.preventDefault();
                    HandleAddFavorite();
                  }}
                >
                  <li
                    className="border border-gray text-green hover:text-yellow p-2 bg-white  "
                    title="Thêm vào yêu thích"
                  >
                    <CiHeart size={20} />
                  </li>
                </Link>
              )}

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
          <Link
            to={`${ROUTER.USER.Details}/${encodeURIComponent(
              productName
            )}/${productid}`}
            className="hover:text-green"
          >
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
