import React, { memo, useRef, useState } from "react";
import banner from "../../../assets/users/Banner/banner.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { item__cate } from "./dataCate";
import { Cateitems } from "./dataCate";
import card__banner from "../../../Data/Card__banner.js";
import { ProductSelling } from "../../../components/Product/productSelling";
import { ProductNews } from "../../../components/Product/productNew";
import { Productsea } from "../../../components/Product/productsea.js";
import { NewCard } from "../../../components/New/NewCard.js";
import { Partner } from "./Partner.js";
import { ROUTER } from "../../../untils/router.js";
import "react-toastify/dist/ReactToastify.css";
const HomePages = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    ref: sliderRef,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // Chuyển đến slide trước
  };

  const handleNext = () => {
    sliderRef.current.slickNext(); // Chuyển đến slide tiếp theo
  };
  // Product Fillter
  const handleNavigation = (slug) => {
    window.location.href = `${ROUTER.USER.Category}${slug}`;
  };
  // Điều hướng

  return (
    <div className="container">
      {/* Slider */}
      <div className="mb-10 mt-3">
        <Link>
          <img
            alt="Slider"
            className="w-full rounded-2xl object-cover"
            src={banner}
          ></img>
        </Link>
      </div>
      {/* Danh mục nổi bật */}
      <div className="Category__home mb-5">
        {/* Tiêu đề */}
        <div className="title__cate flex flex-col md:flex-row relative justify-between items-start mb-5 md:items-center">
          <h2>
            <Link className="text-black  hover:text-green font-bold text-[28px]">
              Danh mục nổi bật
            </Link>
          </h2>
          <div className="item__cate  w-full md:w-auto">
            <ul className="flex  items-center gap-7">
              {item__cate.map((item_cate) => (
                <li
                  key={item_cate.ID}
                  className="hover:text-yellow text-base font-semibold"
                >
                  <Link to={item_cate.slug}>{item_cate.Title}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Nút điều hướng tùy chỉnh */}
          <div className="item__prev flex items-center absolute top-0 right-0 md:relative gap-2 ">
            <button
              onClick={handlePrev}
              className=" bg-gray p-3 rounded-full hover:bg-green hover:text-white "
            >
              <GrPrevious size={18} />
            </button>
            <button
              onClick={handleNext}
              className=" bg-gray p-3 rounded-full hover:bg-green hover:text-white"
            >
              <GrNext size={18} />
            </button>
          </div>
        </div>
        {/* Card_cate */}
        <div className="slider-container w-full">
          <Slider {...settings} ref={sliderRef}>
            {Cateitems.map((index) => (
              <Link
                className="card_cate border w-full card_home  border-gray hover:border-green  bg-gray  text-center rounded-[5px] p-[10px]
                  transition-all duration-300 overflow-hidden"
                key={index.id}
                onClick={() => handleNavigation(index.slug)}
              >
                <div className=" w-full">
                  <div className="image h-[130px] w-full md:h-[100px]">
                    <img
                      className=" object-cover w-full h-full"
                      src={index.image}
                      alt={index.Name}
                    ></img>
                  </div>
                  <h3 className="text-sm cate_name font-bold hover:text-green pb-2 whitespace-nowrap ">
                    {index.Name}
                  </h3>
                  <span className=" text-[12px]">{index.count} sản phẩm</span>
                </div>
              </Link>
            ))}{" "}
          </Slider>
        </div>
      </div>
      {/* Sản phẩm bán chạy */}
      <div>
        <ProductSelling
          Title="Bán chạy nhất hàng ngày"
          Image="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/noi_bat_bg.jpg?1718181939137"
          TabID={1}
        />
      </div>
      {/* Banner_home */}
      <div className="Card__banner mb-[30px]  ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between gap-5 w-full  ">
          {card__banner.map((banerCard) => (
            <div
              key={banerCard.ID}
              className="rounded-xl overflow-hidden relative h-auto  "
            >
              <div className="banner__cardImg w-full ">
                <img
                  src={banerCard.Image}
                  className="object-cover h-full w-full"
                  title={banerCard.Title}
                  alt={banerCard.Title}
                ></img>
              </div>
              <div className="Bannercard__text absolute top-1/2 left-[40%] transform -translate-x-1/2 -translate-y-1/2">
                <h2 className="text-xl font-semibold ">{banerCard.Title}</h2>
                <button
                  className="btn__xemngay border bg-green mt-5
                hover:text-black hover:bg-yellow hover:border-yellow text-white rounded-lg px-7 py-2 text-base font-semibold"
                >
                  Xem ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Sản phẩm nổi bật */}
      <div>
        <ProductSelling
          Title="Sản phẩm nổi bật trong Store"
          Image="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/noi_bat_bg_2.jpg?1718181939137"
          TabID={2}
        />
      </div>
      {/* Sản phẩm mới nhất */}
      <div className="mb-8">
        <ProductNews Title="Sản phẩm mới" />
      </div>
      {/* Hải sản */}
      <div className="mb-8">
        <Productsea />
      </div>
      {/* Banner */}
      <div className="banner_pro overflow-hidden mb-[32px] rounded-[10px]">
        <img
          className="  object-cover cursor-pointer transition-all duration-1000  hover:scale-110"
          src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_banner_index.jpg?1719303742734"
        ></img>
      </div>
      {/* Tin tức */}
      <div className="news">
        <NewCard />
      </div>
      <div className="Partner">
        <Partner Title="Đối tác của chúng tôi" />
      </div>
    </div>
  );
};

export default memo(HomePages);
