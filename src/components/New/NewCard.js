import React from "react";
import { Link } from "react-router-dom";
import Newdata from "../../Data/News";
import Slider from "react-slick";
export const NewCard = () => {
  //   console.log(Newdata);
  const person = [
    {
      ID: 1,
      Name: "Đặng chinh Đức",
      Conten:
        "Đặt hàng buối sáng, hẹn chiều giao để đi công trình. Vừa ăn trưa xong, hàng giao luôn tới công trình. Rất nhanh chóng, tiện lợi cho công việc.",
      Role: "Đầu bếp",
      Avta: "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/image_danh_gia_1.jpg?1719303742734",
    },
    {
      ID: 2,
      Name: "Đoàn Trọng Nhất",
      Conten:
        "Đặt hàng buối sáng, hẹn chiều giao để đi công trình. Vừa ăn trưa xong, hàng giao luôn tới công trình. Rất nhanh chóng, tiện lợi cho công việc.",
      Role: "Developer",
      Avta: "data:image/jpeg;base64,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",
    },
    {
      ID: 3,
      Name: "Nguyễn văn Hùng",
      Conten:
        "Đặt hàng buối sáng, hẹn chiều giao để đi công trình. Vừa ăn trưa xong, hàng giao luôn tới công trình. Rất nhanh chóng, tiện lợi cho công việc.",
      Role: "Devoloper",
      Avta: "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/image_danh_gia_2.jpg?1719303742734",
    },
  ];
  const setingNewcard = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    speed: 2000,
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
  return (
    <div className=" mb-8 grid grid-cols-1  lg:grid-cols-4 gap-5 ">
      <div className="Newcard__left rounded-[10px]   p-8 bg-gray col-span-1 lg:col-span-3">
        {/* Title */}
        <div className="New__title flex items-center justify-start">
          <h2 className="font-semibold text-[28px] hover:text-green hover:cursor-pointer">
            Tin tức mới nhất
          </h2>
        </div>
        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mt-3">
          {Newdata.map((index) => (
            <div className="Card__new bg-white rounded-xl" key={index.NewID}>
              <div className="card__img overflow-hidden rounded-xl">
                <img
                  className="inline-block  hover:scale-110 transition-all duration-500 object-cover"
                  src={index.Image}
                ></img>
              </div>
              <div className="Card__info p-3">
                <h2 className="font-semibold text-base hover:text-green leading-6 cursor-pointer">
                  <Link to="">{index.Title}</Link>
                </h2>
                <p className="text-sm cursor-pointer mt-3 leading-6">
                  {index.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn__more flex items-center justify-center mt-7">
          <button
            className="border border-green text-base rounded-[30px] px-[30px] py-[6px]
           text-green font-semibold hover:bg-yellow hover:text-black transition-all duration-300 hover:border-yellow"
          >
            Xem tất cả
          </button>
        </div>
      </div>
      <div className="Newcard__right  col-span-1 rounded-[10px] bg-gray py-8 px-3">
        <div className="Title">
          <h2 className="font-semibold text-[28px] cursor-pointer">Đánh giá</h2>
        </div>
        <Slider {...setingNewcard}>
          {person.map((newcard, index) => (
            <div
              key={index}
              className="Review__info bg-white p-3 mt-3 rounded-[10px]  cursor-pointer"
            >
              <div className="info__Image flex items-center justify-center m-3 ">
                <img
                  className="rounded-full w-[100px] h-[100px]"
                  src={newcard.Avta}
                />
              </div>
              <div className="info__conten text-center text-base leading-6">
                <span>{newcard.Conten}</span>
              </div>
              <h2 className="text-center text-lg block uppercase text-green font-semibold mt-4">
                {newcard.Name}
              </h2>
              <span className="flex items-center justify-center my-2 ">
                <img
                  className="w-[100px]"
                  src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/gach2.png?1719303742734"
                />
              </span>
              <span className="text-base text-center block mb-4">
                {newcard.Role}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
