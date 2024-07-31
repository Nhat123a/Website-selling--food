import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const HeaderTop = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
      <span className="hidden md:block">
        Chào mừng bạn đến với Fruit Store!
      </span>
      <div className="item__top flex justify-center items-center md:justify-end ">
        <ul className="flex space-x-4 ">
          <li className="space-x-5">
            {user ? (
              <div>
                <span className="cursor-pointer">
                  Xin chào, <b className="text-yellow">{user.Name}</b>
                </span>
                <button onClick={HandleLogout}>Đăng xuất</button>
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
