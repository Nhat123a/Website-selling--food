import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("Name"));
    if (loggedInUser) {
      setUser({ loggedInUser });
    }
  }, []);
  console.log(user);
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
      <span className="hidden md:block">
        Chào mừng bạn đến với Fruit Store!
      </span>
      <div className="item__top flex justify-center items-center md:justify-end ">
        <ul className="flex space-x-4 ">
          <li className="space-x-5">
            {user ? (
              <span className="hover:text-yellow">Xin chào,{user.Name}</span>
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
