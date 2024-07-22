import React, { Fragment } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { ModalContext, useModal } from "./Modalcontext";

const ModalProduct = () => {
  const image = [
    "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/hanh-tay12.jpg",
    "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/hanh-tay13.jpg",
    "https://bizweb.dktcdn.net/thumb/large/100/514/629/products/hanh-tay14.jpg",
  ];
  const [mainImg, setMainImg] = useState(image[0]);
  const [activeImg, setactiveImg] = useState(0);
  const HandlechangeImage = (image, index) => {
    setactiveImg(index);
    setMainImg(image);
  };
  // Close Modal
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <div className="fixed inset-0 font-quicksand bg-black bg-opacity-50 transition-opacity w-full h-full flex items-center justify-center z-50">
        <div className="bg-white w-[950px] p-12 rounded shadow-lg relative flex items-start justify-between gap-6">
          <button className="absolute top-4 right-4 " onClick={closeModal}>
            <IoClose size={28} />
          </button>
          <div className="View_left">
            <div className="Image_main mb-4 rounded-md overflow-hidden border border-[#e9edf5] max-w-[357px] max-h-[357px]">
              <img className="w-full h-full" src={mainImg}></img>
            </div>
            <div className="Image_slider grid grid-cols-4 gap-4 ">
              {image.map((data, index) => (
                <Fragment key={index}>
                  <div
                    className={`Image_children  rounded-md overflow-hidden 
                  ${index === activeImg ? " border-green" : "border-[#e9edf5]"}
                border border-[#e9edf5] max-w-[80px] max-h-[80px]`}
                    onClick={() => HandlechangeImage(data, index)}
                  >
                    <img className="p-1 w-full h-full" src={data}></img>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="View_right flex-grow">
            <div className="View_container">
              <div className="Title">
                <h2 className="text-2xl font-bold cursor-pointer hover:text-green">
                  Đậu bắp
                </h2>
              </div>
              <div className="view_status grid grid-cols-2 items-center flex-wrap gap-3 my-3">
                <span className="">
                  Tình trạng: <span className="text-green">Còn Hàng</span>
                </span>
                <span>
                  Mã sản phẩm: <span className="text-green">Đang cập nhật</span>
                </span>
              </div>
              <div className="price_box my-3">
                <span className="text-yellow text-[28px] font-bold">
                  31.000₫
                </span>
                <del className="text-base text-[#a5a5a5] ml-3">33.000₫</del>
              </div>
              <div className="view_description my-3">
                <p className="break-words max-w-[500px]">
                  Một số lợi ích sức khỏe từ đậu bắp: tốt cho tiêu hóa và tăng
                  cường miễn dịch; duy trì làn da sáng mịn khỏe đẹp; ngăn ngừa
                  thiếu máu, chống loãng xương ở người cao tuổi.
                </p>
              </div>
              <div className="Note__product mb-5">
                <div className="header font-semibold mb-1">Ghi chú:</div>
                <div className="Note__input relative  ">
                  <input
                    placeholder="Thêm ghi chú sản phẩm"
                    className="border border-[#7d7d7d] leading-[38px] pl-10 pr-10 w-full rounded-[38px]  outline-none"
                  />
                  <Link className="absolute top-0 left-0 w-10 h-10   flex items-center justify-center">
                    <AiOutlineEdit size={18} />
                  </Link>
                </div>
              </div>
              <div className="ClearFix__form my-3">
                <div className="Quantity__container ">
                  <div className="Quantity bg-transparent  w-auto">
                    <div className="Input__quantity inline-flex ">
                      <button className="rounded-tl-[25px] rounded-bl-[25px] border-r-0 border-[#7d7d7d] border hover:text-white hover:bg-green px-4 text-base ">
                        -
                      </button>
                      <input
                        type="text "
                        value={12}
                        className="text-center leading-[45px] text-base border-b border-t border-[#7d7d7d] outline-none w-[50px] block"
                      />
                      <button className="px-4 text-base rounded-tr-[25px] border-l-0 hover:bg-green border-[#7d7d7d] border hover:text-white rounded-br-[25px]">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="Btn__right  my-3 w-1/2">
                    <div className="btn__add  w-full leading-[50px] rounded-[25px] overflow-hidden">
                      <button className="w-full bg-green text-white font-semibold hover:bg-yellow hover:text-black ">
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduct;
