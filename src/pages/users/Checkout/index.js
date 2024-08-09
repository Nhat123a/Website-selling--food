import React, { memo, useMemo } from "react";
import logo from "../../../assets/users/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { MdPayment } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { GrFormPreviousLink } from "react-icons/gr";
import {
  CallApiprovinces,
  CallApidistrics,
  CallApiward,
} from "../../../API/callApi";

import { useDispatch, useSelector } from "react-redux";
import CurrencyFormat from "react-currency-format";
import { CiLogout } from "react-icons/ci";

const Checkout = () => {
  // Vận chuyển
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setSelected(selected);
  };
  // Thanh toán
  const itemPay = [
    {
      idPay: 1,
      Medthod: "Chuyển khoản",
      Icon: <MdPayment />,
    },
    {
      idPay: 2,
      Medthod: "Thu hộ (COD)",
      Icon: <MdOutlinePayments />,
    },
  ];
  const [selectedPay, setSelectedPay] = useState(null);
  const handleChangePay = (ipay) => {
    setSelectedPay(ipay);
    // console.log(ipay);
  };
  // Voucher
  const [input, setInput] = useState("");
  const handleChangeInput = (event) => {
    setInput(event.target.value);
    // console.log(input);
  };
  // Tỉnh thành
  const [provinces, setProvinces] = useState([]);
  const [districs, setDistrics] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  useEffect(() => {
    CallApiprovinces()
      .then((data) => {
        const Data = data.data;
        setProvinces(Data);
        // console.log(Data);
      })
      .catch((error) => {
        console.log("Lỗi:", error);
      });
  }, []);
  // Huyện
  useEffect(() => {
    if (selectedProvince) {
      CallApidistrics(selectedProvince)
        .then((data) => {
          const Datadisstrics = data.data;
          setDistrics(Datadisstrics);
          // console.log(Datadisstrics);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      CallApiward(selectedDistrict).then((data) => {
        const Data = data.data;
        setWards(Data);
      });
    }
  }, [selectedDistrict]);
  const handleProvinceChange = (e) => {
    const provinceId = e.target.value;
    setSelectedProvince(provinceId);
    setSelectedDistrict(null);
    setSelectedWard(null);
  };
  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);
    setSelectedWard(null);
  };
  const handleWard = (e) => {
    const wardID = e.target.value;
    setSelectedWard(wardID);
  };
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [name, setName] = useState("");
  // const HandleVaildinput = () => {
  //   if (!email || !phone || !name) {
  //     console.log("Chưa điền đủ thông tin");
  //   } else {
  //     console.log("ok");
  //   }
  // };
  const Cartitem = useSelector((state) => state.cart.cart);
  // console.log(Cartitem);
  const Provisional = useMemo(() => {
    return Cartitem.reduce(
      (toltal, item) => toltal + item.priceNew * item.quantity,
      0
    );
  }, [Cartitem]);
  const total = useMemo(() => {
    return Provisional + 40000;
  });
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);
  // console.log(user);
  const HandleLogout = () => {
    localStorage.removeItem("LoggedInUser");
    navigate("/");
  };
  return (
    <div
      className="container  "
      style={{
        fontFamily: "Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      <div className="wrap__container grid grid-cols-3 gap-5 min-h-screen">
        <div className="wrap__left  col-span-3 lg:col-span-2">
          <div className="main__header pb-3 flex items-center justify-center">
            <div className="logo cursor-pointer w-38 h-20 overflow-hidden ">
              <img src={logo} className="w-full h-full"></img>
            </div>
          </div>
          <div className="main__conten grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="Main__input">
              <div className="Header__input flex items-center justify-between ">
                <h2 className="font-semibold text-[1.15rem]">
                  Thông tin nhận hàng
                </h2>
                {user ? (
                  <div>
                    <Link
                      onClick={HandleLogout}
                      to="/"
                      className="flex items-center text-__blue gap-1 "
                    >
                      <span>
                        <CiLogout size={18} />
                      </span>
                      <span className="text-base">Đăng xuất</span>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link
                      to="/dang-nhap"
                      className="flex items-center text-__blue gap-1 "
                    >
                      <span>
                        <FaUserCircle size={18} />
                      </span>
                      <span className="text-base">Đăng nhập</span>
                    </Link>
                  </div>
                )}
              </div>
              <div className="input__main mt-2 flex flex-col gap-4 text-[#999]">
                <div className="input_email ">
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className={`border pl-3 transform transition-all duration-1000 block outline-1 outline-__blue 
                    text-base  w-full h-[44px] border-[#d9d9d9] rounded-[4px]`}
                  />
                </div>
                <div className="input_Name ">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Họ và tên"
                    className="border pl-3 transform transition-all duration-1000 block text-base outline-1 outline-__blue w-full h-[44px] border-[#d9d9d9] rounded-[4px]"
                  />
                </div>
                <div className="input_Phone ">
                  <input
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    type="text"
                    placeholder="Số điện thoại"
                    className="border pl-3 transform transition-all duration-1000 block text-base outline-1 outline-__blue w-full h-[44px] border-[#d9d9d9] rounded-[4px]"
                  />
                </div>
                <div className="input_Adress ">
                  <input
                    type="text"
                    placeholder="Địa chỉ (tùy chọn)"
                    className="border pl-3 transform transition-all duration-1000 block text-base outline-1 outline-__blue w-full h-[44px] border-[#d9d9d9] rounded-[4px]"
                  />
                </div>
                <div className="select__province">
                  <select
                    onChange={handleProvinceChange}
                    className="block appearance-none w-full text-base   h-[44px] border pl-3 border-[#d9d9d9] rounded-[4px] outline-1 outline-__blue  focus:shadow-outline"
                  >
                    <option>Chọn tỉnh thành</option>
                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}{" "}
                  </select>
                </div>
                <div className="select__District">
                  <select
                    onChange={handleDistrictChange}
                    className="block appearance-none w-full text-base   h-[44px] border pl-3 border-[#d9d9d9] rounded-[4px] outline-1 outline-__blue  focus:shadow-outline"
                  >
                    <option>Quận huyện (tùy chọn)</option>
                    {districs.map((districs) => (
                      <option key={districs.id} value={districs.id}>
                        {districs.full_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select__wards">
                  <select
                    onChange={handleWard}
                    className="block appearance-none w-full text-base   h-[44px] border pl-3 border-[#d9d9d9] rounded-[4px] outline-1 outline-__blue  focus:shadow-outline"
                  >
                    <option>Phường xã (tùy chọn)</option>
                    {wards.map((wards) => (
                      <option key={wards.id} value={wards.id}>
                        {wards.full_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="note  ">
                  <textarea
                    className="w-full border pl-3 pt-3 border-[#d9d9d9] rounded-[4px] outline-1 outline-__blue text-base"
                    placeholder="Ghi chú (tùy chon)"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* Form */}
            <div className="Main__form ">
              <div className="transport">
                <h2 className="font-semibold text-[1.15rem]">Vận chuyển</h2>
                <div className="mt-2 w-full border pl-3 border-[#d9d9d9] h-11 rounded transform transition-all duration-1000 text-base outline-1 outline-__blue flex items-center">
                  <input
                    type="radio"
                    id="custom-radio-transport"
                    className="hidden"
                    checked={selected}
                    onChange={handleChange}
                  />
                  <label
                    className="flex items-center cursor-pointer"
                    onClick={handleChange}
                  >
                    <div className="w-4 h-4 rounded-full p-2 border-2 border-blue-500 flex items-center justify-center">
                      <div
                        className={`w-2 h-2 p-1 bg-blue-500 rounded-full `}
                      ></div>
                    </div>
                  </label>
                  <div className="w-full flex items-center justify-between text-sm px-2">
                    <span className="cursor-pointer">Giao hàng tận nơi</span>
                    <span className="cursor-pointer">40.000₫</span>
                  </div>
                </div>
              </div>
              {/* Thanh toán */}
              <div className="pay__method mt-5">
                <div className="payment">
                  <h2 className="font-semibold text-[1.15rem]">Thanh toán</h2>
                  {itemPay.map((item) => (
                    <div
                      onClick={() => handleChangePay(item.idPay)}
                      key={item.idPay}
                      className=" mt-2 w-full border pl-3 border-[#d9d9d9] h-11 rounded transform transition-transform duration-1000 text-base outline-1 outline-__blue flex items-center"
                    >
                      <input
                        type="radio"
                        id={item.idPay}
                        className="hidden"
                        checked={selectedPay}
                        onChange={() => handleChangePay(item.idPay)}
                      />
                      <label className="flex items-center cursor-pointer ">
                        <div className="w-4  h-4 rounded-full p-2 border-2 border-blue-500 flex items-center justify-center">
                          <div
                            className={` w-2 h-2 p-1 bg-blue-500 rounded-full ${
                              selectedPay === item.idPay ? "" : "hidden"
                            } `}
                          ></div>
                        </div>
                      </label>
                      <div className="w-full flex items-center justify-between text-sm px-2">
                        <span className="cursor-pointer">{item.Medthod}</span>
                        <span className="cursor-pointer text-[24px] text-__blue">
                          {item.Icon}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap__right bg-[#fafafa] h-full col-span-3 lg:col-span-1 border-l border-[#C0C0C0] ">
          <div className="Header__right border-b border-[#C0C0C0]">
            <h2 className="font-semibold text-[1.15rem] pl-8 py-4">
              Đơn hàng ({Cartitem.length} sản phẩm)
            </h2>
          </div>
          <div className="body_right pl-8  ">
            {/* Card product */}
            <div className="border-b border-[#C0C0C0] py-3 mt-10 flex flex-col max-h-[280px] gap-5 overflow-auto">
              {Cartitem.map((item, index) => (
                <div
                  key={index}
                  className="card__product  flex items-start gap-3 w-full "
                >
                  <div className="relative">
                    <div className="image  w-[50px] h-[50px] border border-[#C0C0C0] rounded-md overflow-hidden">
                      <img className="w-full h-full" src={item.productImage} />
                    </div>
                    <span
                      className="rounded-full text-center flex items-center justify-center absolute top-[-12px]
                 right-[-10px] z-[999] h-5 w-5 p-3 bg-__blue text-white text-xs"
                    >
                      {item.quantity}
                    </span>
                  </div>
                  <div className="Info w-full flex items-center justify-between pr-5">
                    <span>{item.productName}</span>
                    <span className="text-[#999]">
                      <CurrencyFormat
                        value={item.priceNew}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"₫"}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {/* Voucher */}
            <div className="py-3 flex items-center justify-between gap-7 border-b border-[#C0C0C0] ">
              <input
                type="text"
                onChange={handleChangeInput}
                placeholder="Nhập mã giảm giá"
                className="border h-11 rounded outline-none pl-5 w-full border-[#d9d9d9] shadow-sm hover:border-__blue"
              ></input>
              <div
                className={`btn__add p-2  ${input ? "" : "opacity-50"}`}
                disabled={!input}
              >
                <button className="bg-__blue h-11 w-24 text-white rounded">
                  Áp dụng
                </button>
              </div>
            </div>
            {/* Tạm tính */}

            <div className="flex flex-col gap-5 w-full border-b border-[#C0C0C0] py-5 text-[#999]">
              <div className="flex items-center justify-between">
                <label>Tạm tính</label>
                <span className="pr-3">
                  <CurrencyFormat
                    value={Provisional}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"₫"}
                  />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <label>Phí vận chuyển</label>
                <span className="pr-3">40.000₫</span>
              </div>
            </div>
            {/* Total */}
            <div>
              <div className="flex items-center justify-between py-5">
                <h2 className="text-lg text-[#999]">Tổng cộng</h2>
                <span className="text-2xl text-__blue pr-3">
                  <CurrencyFormat
                    value={total}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={"₫"}
                  />
                </span>
              </div>
            </div>
            {/* Đặt hàng */}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="text-__blue hover:text-[#3366CC] flex items-center justify-center"
              >
                {" "}
                <GrFormPreviousLink size={20} />
                <span>Quay về trang chủ</span>
              </Link>
              <button className="bg-__blue hover:bg-[#3366CC] text-center uppercase text-white h-11 rounded-[5px] w-32 mr-3">
                Đặt hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
