import React, { useEffect, useState, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCog } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { BsCart } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";

const HeaderTop = () => {
  const [user, setUser] = useState(null);
  const [isvible, setIsivible] = useState(false);
  const ref = useRef(null);

  const navigate = useNavigate();
  const handleClick = () => {
    setIsivible(!isvible);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsivible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
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

  const handleInfo = () => {
    navigate("/Thong-tin-tai-khoan");
  };
  const handleOrder = () => {
    navigate("/don-hang");
  };
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
      <span className="hidden md:block">
        Chào mừng bạn đến với Fruit Store!
      </span>
      <div className="item__top flex justify-center items-center md:justify-end ">
        <ul className="flex space-x-4 ">
          <li className="space-x-5">
            {user ? (
              <div className="relative px-3">
                <span className="cursor-pointer flex items-center gap-3">
                  <span onClick={handleClick}>
                    <FaUserCog size={18}></FaUserCog>
                  </span>
                  <span>
                    Xin chào, <b className="text-yellow">{user.Name}</b>
                  </span>
                </span>
                <div
                  ref={ref}
                  className={`bg-white absolute top-10 ${
                    isvible ? "block animate-userActive " : "hidden"
                  }  z-20 left-0 right-0 w-full rounded overflow-hidden`}
                >
                  <ul className="text-center cursor-pointer">
                    <li
                      className="w-full border-b flex items-center justify-center gap-3 text-black hover:text-white border-gray delay-100 hover:bg-green"
                      onClick={handleInfo}
                    >
                      <RiUser3Line size={18}></RiUser3Line>
                      Thông tin
                    </li>
                    <li
                      className="w-full border-b flex items-center justify-center gap-3 text-black hover:text-white border-gray delay-100 hover:bg-green"
                      onClick={handleOrder}
                    >
                      <BsCart size={18}></BsCart>
                      Đơn hàng
                    </li>
                    <li
                      className="w-full border-b flex items-center justify-center gap-3 text-black hover:text-white border-gray delay-100 hover:bg-green"
                      onClick={HandleLogout}
                    >
                      <IoLogOutOutline size={18}></IoLogOutOutline>
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link className="flex items-center space-x-1" to="/dang-nhap">
                <FaRegUser
                  size={20}
                  style={{ filter: "brightness(1.5) contrast(0.8)" }}
                />
                <span className="hover:text-yellow">Tài khoản</span>
              </Link>
            )}
          </li>
          <li>
            <Link to="tel:19007652">
              <span>
                Hotline:
                <b className="text-yellow hover:text-white"> 19007652</b>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
