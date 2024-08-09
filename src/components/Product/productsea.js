import React, { useRef } from "react";
import { Card__product } from "../../components/Product/Card__product";
import productData from "../../Data/product";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Productsea = () => {
  const productFilter = productData.filter((x) => x.Type === 1);
  const SlideRef = useRef(null);
  const settingSea = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    ref: SlideRef,
    prevArrow: null,
    nextArrow: null,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Handleprev_btn = () => {
    SlideRef.current.slickPrev();
  };
  const HandleNext_btn = () => {
    SlideRef.current.slickNext();
  };
  return (
    <div className="bg-gray rounded-[10px] p-8">
      <div className="Sea__Title">
        <h2 className="font-semibold hover:text-green text-[28px] cursor-pointer">
          Hải sản tươi
        </h2>
      </div>
      <div className="box__sea grid grid-cols-4 items-center overflow-hidden h-auto">
        <div className=" h-auto col-span-4 lg:col-span-3  w-full mr-10 relative ">
          <div className="mt-5">
            {
              <Slider {...settingSea} ref={SlideRef}>
                {productFilter.map((index) => (
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
            }
          </div>
          <>
            <div className="Button__ex flex items-center justify-center gap-2 ">
              <button
                onClick={Handleprev_btn}
                className=" bg-[#CCCCCC] p-3 absolute left-0 top-[40%] rounded-full hover:bg-green hover:text-white "
              >
                <GrPrevious size={16} />
              </button>
              <button
                onClick={HandleNext_btn}
                className=" bg-[#CCCCCC] absolute top-[40%] right-0 p-3 rounded-full hover:bg-green hover:text-white"
              >
                <GrNext size={16} />
              </button>
            </div>
          </>
          <div>
            <div className="btn__more flex items-center justify-center mt-7">
              <Link
                to="/Danh-muc-san-pham"
                className="border border-green text-base rounded-[30px] px-[30px] py-[6px]
           text-green font-semibold hover:bg-yellow hover:text-black transition-all duration-300 hover:border-yellow"
              >
                Xem tất cả
              </Link>
            </div>
          </div>
        </div>
        {/* Banner */}
        <div className="image__banner space-y-5 hidden lg:block px-2 relative ml-3 hover:overflow-hidden">
          <div className="box-border overflow-hidden rounded-xl ">
            <img
              src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/product3_img.jpg?1719303742734"
              className=" box-border object-cover cursor-pointer transition-all duration-1000 hover:scale-150 "
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/product32_img.jpg?1719303742734"
              className=" box-border  object-cover cursor-pointer transition-all duration-1000  hover:scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
