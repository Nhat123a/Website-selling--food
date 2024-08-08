import { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../untils/router";
import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Redux/CartSlice";
import { toast } from "react-toastify";

const Cart = ({ isCartOpen, setIsCartOpen }) => {
  //sen_checkout
  const [quantity, setQuantity] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate(`${ROUTER.USER.Checkout}`);
  };
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);
  const RemoveItem = (productID) => {
    dispatch(removeFromCart({ productID }));
    toast.success("Xóa thành công", {
      position: "top-center",
      autoClose: 3000,
    });
  };
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.priceNew * item.quantity,
      0
    );
  }, [cartItems]);
  const handleInput = (productID, newQuantity) => {
    setQuantity((prevQuantities) => ({
      ...prevQuantities,
      [productID]: newQuantity,
    }));
    if (newQuantity > 0) {
      dispatch(
        increaseQuantity({ productID, newQuantity: Number(newQuantity) })
      );
    } else {
      dispatch(decreaseQuantity({ productID, newQuantity: 1 }));
    }
  };
  const handleIncrease = (productID) => {
    const currentQuantity = Number(
      quantity[productID] ||
        cartItems.find((item) => item.productID === productID).quantity
    );
    handleInput(productID, currentQuantity + 1);
  };

  const handleDecrease = (productID) => {
    const currentQuantity = Number(
      quantity[productID] ||
        cartItems.find((item) => item.productID === productID).quantity
    );
    if (currentQuantity > 1) {
      handleInput(productID, currentQuantity - 1);
    } else {
      RemoveItem(productID);
    }
  };
  return (
    <div
      className={`Cart__container transform transition-transform duration-500 ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } fixed right-0 top-0 bottom-0 bg-white w-[20%] h-full z-[10000] flex flex-col`}
    >
      <button
        onClick={() => setIsCartOpen(false)}
        className="p-1  mt-1 bg-gray absolute left-1 hover:bg-green hover:text-white  text-red text-center"
      >
        <IoMdClose size={24} />
      </button>
      <h2 className="text-center mt-1 font-semibold text-green text-[24px]">
        Giỏ hàng
      </h2>
      {cartItems.length > 0 ? (
        <>
          <div className="Cart__items flex-grow overflow-auto mt-5 mb-28">
            {cartItems.map((data, index) => (
              <div
                key={index}
                className="Cart__item px-2 pt-2 relative pb-4 flex items-start gap-2 w-full border-b border-[#EEEEEE]"
              >
                <div className="Cart__img w-20 h-20 overflow-hidden border border-[#F2F2F2] rounded-[5px]">
                  <img
                    className="w-full h-full"
                    src={data.productImage}
                    alt={data.productName}
                  />
                </div>
                <div className="Cart__info text-[14px] cursor-pointer">
                  <div className="Name__product font-semibold hover:text-green">
                    {data.productName}
                  </div>
                  {/* Delete */}
                  <div className="Cart__delete my-2 text-red font-semibold hover:text-green">
                    <Link
                      onClick={(e) => {
                        e.preventDefault();
                        RemoveItem(data.productID);
                      }}
                    >
                      Xóa
                    </Link>
                  </div>
                  {/* Số lượng */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="Quantity bg-transparent w-auto">
                      <div className="text-[13px] mb-2">Số lượng</div>
                      <div className="Input__quantity inline-flex">
                        <button
                          onClick={() => handleDecrease(data.productID)}
                          className="rounded-tl-[25px] text-center rounded-bl-[25px] border-r-0 border-[#7d7d7d] border hover:text-white hover:bg-green px-3 text-base"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={quantity[data.productID] || data.quantity}
                          onChange={(e) =>
                            handleInput(data.productID, e.target.value)
                          }
                          className="text-center text-[13px] leading-[30px] text-base border-b border-t border-[#7d7d7d] outline-none w-[40px] block"
                        />
                        <button
                          onClick={() => handleIncrease(data.productID)}
                          className="px-3 text-base rounded-tr-[25px] border-l-0 hover:bg-green border-[#7d7d7d] border hover:text-white rounded-br-[25px]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="price text-right text-red font-bold float-right">
                      <h2>
                        <CurrencyFormat
                          value={data.priceNew}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"₫"}
                        />
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-2 fixed bottom-0 right-0  left-0 ">
            <div className="text-base Total__price flex items-center justify-between">
              <h2 className="uppercase font-semibold">Tổng tiền:</h2>
              <h2 className="font-bold mr-3 text-red">
                <CurrencyFormat
                  value={totalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"₫"}
                />
              </h2>
            </div>
            <div
              onClick={handleCheckout}
              title="Thanh toán"
              className="btn__checkout p-2 mt-6 hover:bg-[#336600] rounded-[25px] w-full bg-green text-white text-center"
            >
              <button>Thanh toán</button>
            </div>
          </div>
        </>
      ) : (
        <div className="m-auto p-4 flex items-center justify-center flex-col gap-10">
          <div className="">
            <img src="https://www.espressoclubegypt.com/resources/assets/front/images/cartempty.png"></img>
          </div>
          <span className="text-center text-green text-lg font-semibold">
            Giỏ hàng đang trống
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
