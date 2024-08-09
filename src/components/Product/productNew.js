import React from "react";
import { useRef } from "react";
import { Card__product } from "./Card__product";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import productdata from "../../Data/product";
import { Link } from "react-router-dom";

export const ProductNews = (props) => {
  const sliderRefs = useRef(null);
  const settingNew = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    ref: sliderRefs,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
  const Handleprev_btn = () => {
    sliderRefs.current.slickPrev();
  };
  const HandleNext_btn = () => {
    sliderRefs.current.slickNext();
  };
  return (
    <div className="Product__wrap bg-gray p-6  rounded-[10px]">
      {/* Title */}
      <div className="Title flex items-center justify-between">
        <h2 className=" cursor-pointer font-semibold text-[28px] hover:text-green">
          {props.Title}
        </h2>
        <div className="Button__ex flex items-center justify-center gap-2 ">
          <button
            onClick={Handleprev_btn}
            className=" bg-[#CCCCCC] p-3 rounded-full hover:bg-green hover:text-white "
          >
            <GrPrevious size={16} />
          </button>
          <button
            onClick={HandleNext_btn}
            className=" bg-[#CCCCCC] p-3 rounded-full hover:bg-green hover:text-white"
          >
            <GrNext size={16} />
          </button>
        </div>
      </div>
      {/* Product */}
      <div className="card__product  ">
        <Slider {...settingNew} ref={sliderRefs} className="">
          {productdata.map((index) => (
            <Card__product
              productid={index.productID}
              Status={index.Status}
              key={index.productID}
              priceNew={index.priceNew}
              priceOld={index.priceOld}
              productName={index.productName}
              productImage={index.productImage}
              Description={index.Description}
            />
          ))}
        </Slider>
      </div>
      <div
        className={`btn__more flex items-center justify-center mt-7 ${props.status} `}
      >
        <Link
          to="/Danh-muc-san-pham"
          className="border border-green text-base rounded-[30px] px-[30px] py-[6px]
           text-green font-semibold hover:bg-yellow hover:text-black transition-all duration-300 hover:border-yellow"
        >
          Xem tất cả
        </Link>
      </div>
    </div>
  );
};
