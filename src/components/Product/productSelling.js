import React from "react";
import { useRef, useState, useEffect } from "react";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import productdata from "../../Data/product";
import { Card__product } from "./Card__product";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export const ProductSelling = (props) => {
  const sliderRefs = useRef(null);

  // console.log(productdata);

  const settingss = {
    infinite: true,
    slidesToShow: 4,
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

  const product__tab = [
    {
      TabID: 1,
      items: [
        { tabId: 1, tabName: "Rau củ" },
        { tabId: 2, tabName: "Trái cây" },
        { tabId: 3, tabName: "Đồ khô" },
      ],
    },
    {
      TabID: 2,
      items: [
        { tabId: 4, tabName: "Thịt Heo" },
        { tabId: 5, tabName: "Thịt Bò" },
        { tabId: 6, tabName: "Hải sản" },
      ],
    },
  ];
  const [Activetab, setActivetab] = useState(null);
  useEffect(() => {
    if (props.TabID) {
      const defaultCategory = product__tab.find((x) => x.TabID === props.TabID);
      if (defaultCategory && defaultCategory.items.length > 0) {
        setActivetab(defaultCategory.items[0].tabId);
      }
    }
  }, [props.TabID]);

  const handleActive = (tabId) => {
    setActivetab(tabId);
  };

  const productFilter = productdata.filter(
    (x) => x.TabID === props.TabID && x.tabId === Activetab
  );
  return (
    <div className="Product__selling flex flex-col  lg:flex-row gap-4 justify-between w-full rounded-2xl bg-gray overflow-hidden my-10 ">
      {/* Banner */}
      <div className="banner relative w-full  lg:w-[300px] ">
        <img
          src={props.Image}
          className="w-full h-[300px] lg:h-[488px]  object-cover"
        />
        <div className="banner__item absolute top-0 left-0 p-4 h-full w-full text-white ">
          <h2 className="text-[28px] font-extrabold mb-3 cursor-pointer leading-9 hover:text-yellow transition-all duration-300">
            {props.Title}
          </h2>
          <span className="text-base italic ">
            <u>Ưu đãi độc quyền - Giảm giá 20%</u>
          </span>
          <h3 className="text-xl font-bold leading-7 mt-3 mb-3">
            Mua sắm thoải mái chỉ từ 20.000 VNĐ
          </h3>
          <span className="text-base font-normal leading-[24px] ">
            Chỉ trong tuần này. Đừng bỏ lỡ...
          </span>
          <div className="btn__buy mt-3">
            <button className="hover:bg-yellow rounded-3xl px-4 py-2 font-semibold text-black bg-gray">
              Mua ngay
            </button>
          </div>
        </div>
      </div>
      {/* Product */}
      <div className="Product w-full lg:w-[calc(100%-300px)] px-2  h-full overflow-hidden ">
        <div className="product__title flex-col md:flex-row  flex justify-between items-start gap-4 mt-5">
          {productFilter.length > 0 && (
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
          )}
          <div className="Button__tab">
            <ul className="flex items-center justify-center gap-2">
              {product__tab
                .find((x) => x.TabID === props.TabID)
                ?.items.map((tabItem) => (
                  <li
                    onClick={() => handleActive(tabItem.tabId)}
                    key={tabItem.tabId}
                    className={`font-bold text-base whitespace-nowrap ${
                      Activetab === tabItem.tabId
                        ? "border-yellow text-yellow"
                        : "hover:border-yellow hover:text-yellow"
                    } border border-[#CCCCCC] rounded-3xl px-5 py-1 cursor-pointer`}
                  >
                    {tabItem.tabName}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* Card Product */}
        <div className="ProductCards w-full  grid grid-cols-1 justify-between gap-3 slider-container h-full ">
          {productFilter.length > 0 ? (
            <Slider {...settingss} ref={sliderRefs}>
              {productFilter.map((product) => (
                <Card__product
                  productid={product.productID}
                  Status={product.Status}
                  key={product.productID}
                  priceNew={product.priceNew}
                  priceOld={product.priceOld}
                  productName={product.productName}
                  productImage={product.productImage}
                  Description={product.Description}
                />
              ))}
            </Slider>
          ) : (
            <div className="text-center text-white font-medium bg-yellow p-3 mt-8 text-xl">
              Sản phẩm hiện không có sẵn !
            </div>
          )}
        </div>
        {productFilter.length > 0 && (
          <div className="btn__more flex items-center justify-center my-7">
            <Link
              to="/Danh-muc-san-pham"
              className="border border-green text-base rounded-[30px] px-[30px] py-[6px]
           text-green font-semibold hover:bg-yellow hover:text-black transition-all duration-300 hover:border-yellow"
            >
              Xem tất cả
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
