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
      Avta: "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-1/427719953_10161219077072760_5274347504617261732_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeEkWguk9l56r9BBbBbFbOj_6vgAoFzaYMbq-ACgXNpgxm6aO7qDCx7AELPbqdhnFxg&_nc_ohc=GQVZwZ2YZjsQ7kNvgFHrETx&_nc_ht=scontent.fhan3-1.fna&oh=00_AYBUW59mKSDmYDzrFked1VxHzVnrAihOsbEvq4QYPufCiA&oe=669AFFDA",
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
