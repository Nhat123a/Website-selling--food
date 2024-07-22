import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Partner = (props) => {
  const sliderRefs = useRef(null);
  const settingPartner = {
    infinite: true,
    slidesToShow: 6,
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
  const PartNerData = [
    {
      ID: 1,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_1.png?1719377594344",
    },
    {
      ID: 2,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_2.png?1719377594344",
    },
    {
      ID: 3,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_3.png?1719377594344",
    },
    {
      ID: 4,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_4.png?1719377594344",
    },
    {
      ID: 5,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_5.png?1719377594344",
    },
    {
      ID: 6,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_6.png?1719377594344",
    },
    {
      ID: 7,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/img_brand_7.png?1719377594344",
    },
  ];
  return (
    <div className=" bg-gray p-6  rounded-[10px] mb-8">
      {/* Title */}
      <div className="Title flex flex-col items-start gap-3 md:flex-row justify-between">
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

      <div className="card__partner  ">
        <Slider {...settingPartner} ref={sliderRefs}>
          {PartNerData.map((Index) => (
            <div
              key={Index.ID}
              className="mt-3 rounded-[10px] overflow-hidden "
            >
              <Link to="">
                <img
                  src={Index.Image}
                  className="hover:scale-110 transition-all duration-300 object-cover"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
