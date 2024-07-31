import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { useModal } from "../Product/Modalcontext";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../Redux/CartSlice";
import { toast } from "react-toastify";

const ModalProduct = () => {
  const { isModalOpen, handleModal, selectedProduct } = useModal();

  const [mainImg, setMainImg] = useState(null);
  const [activeImg, setactiveImg] = useState(0);
  useEffect(() => {
    if (
      selectedProduct &&
      selectedProduct.productImage &&
      selectedProduct.productImage.length > 0
    ) {
      setMainImg(selectedProduct.productImage[0]);
      setactiveImg(0);
    }
  }, [selectedProduct]);
  const HandlechangeImage = (image, index) => {
    setactiveImg(index);
    setMainImg(image);
  };
  // Close Modal
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("overlay")) {
      handleModal(false);
    }
  };
  // ADD to cart
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const product = {
      productID: selectedProduct.productid,
      productName: selectedProduct.productName,
      productImage: selectedProduct.productImage[0],
      priceNew: selectedProduct.priceNew,
      quantity,
    };
    dispatch(addtoCart(product));
    toast.success("Thêm thành công", {
      position: "top-center", // Sử dụng chuỗi vị trí
      autoClose: 3000, // Tự động đóng sau 3 giây
    });
  };
  const [quantity, setQuantity] = useState(1);
  const handleInputChange = (event) => {
    const value = event.target.value;
    // Chỉ cho phép các giá trị số
    if (!isNaN(value) && value !== "") {
      setQuantity(parseInt(value, 10));
    } else if (value === "") {
      setQuantity("");
    }
    // console.log(value);
  };
  // Tăng số lượng
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity !== "" ? prevQuantity + 1 : 1));
  };
  //Giảm số lượng
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 1));
  };
  return (
    <div>
      {isModalOpen && (
        <div
          className={`overlay animate-__Modal   fixed inset-0 font-quicksand bg-black bg-opacity-50 
        transition-opacity w-full h-full flex items-center justify-center z-50`}
          onClick={handleOverlayClick}
        >
          <div className="bg-white w-[950px] p-9 rounded shadow-lg relative flex items-start justify-between gap-6">
            <button
              className="absolute top-4 right-4 "
              onClick={() => handleModal(false)}
            >
              <IoClose size={28} />
            </button>
            <div className="View_left">
              <div className="Image_main mb-4 rounded-md overflow-hidden border border-[#e9edf5] max-w-[357px] max-h-[357px]">
                <img className="w-full h-full" src={mainImg}></img>
              </div>
              <div className="Image_slider grid grid-cols-4 gap-4 ">
                {selectedProduct.productImage.map((data, index) => (
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
                    {selectedProduct.productName}
                  </h2>
                </div>
                <div className="view_status grid grid-cols-2 items-center flex-wrap gap-3 my-3">
                  <span className="">
                    Tình trạng: <span className="text-green">Còn Hàng</span>
                  </span>
                  <span>
                    Mã sản phẩm:{" "}
                    <span className="text-green">Đang cập nhật</span>
                  </span>
                </div>
                <div className="price_box my-3">
                  <span className="text-yellow text-[28px] font-bold">
                    <CurrencyFormat
                      value={selectedProduct.priceNew}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"₫"}
                    />
                  </span>
                  <del className="text-base text-[#a5a5a5] ml-3">
                    <CurrencyFormat
                      value={selectedProduct.priceOld}
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"₫"}
                    />
                  </del>
                </div>
                <div className="view_description my-3">
                  <p className="break-words max-w-[500px]">
                    {selectedProduct.Description
                      ? selectedProduct.Description
                      : "Đang cập nhật sản phẩm"}
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
                        <button
                          onClick={decrementQuantity}
                          className="rounded-tl-[25px] rounded-bl-[25px] border-r-0 border-[#7d7d7d] border hover:text-white hover:bg-green px-4 text-base "
                        >
                          -
                        </button>
                        <input
                          type="text "
                          value={quantity}
                          onChange={handleInputChange}
                          className="text-center leading-[45px] text-base border-b border-t border-[#7d7d7d] outline-none w-[50px] block"
                        />
                        <button
                          onClick={incrementQuantity}
                          className="px-4 text-base rounded-tr-[25px] border-l-0 hover:bg-green border-[#7d7d7d] border hover:text-white rounded-br-[25px]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="Btn__right  my-3 w-1/2">
                      <div className="btn__add  w-full leading-[50px] rounded-[25px] overflow-hidden">
                        <button
                          onClick={handleAddToCart}
                          className="w-full  bg-green text-white font-semibold hover:bg-yellow hover:text-black "
                        >
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
      )}
    </div>
  );
};

export default ModalProduct;
