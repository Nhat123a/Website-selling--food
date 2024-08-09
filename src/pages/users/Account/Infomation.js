import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Infomation = () => {
  const [user, setUser] = useState(null);
  const fetchUserData = useCallback(() => {
    const loggedInUser = localStorage.getItem("LoggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser);
    }
  }, []);
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  const getFullName = useCallback(() => {
    if (user) {
      return `${user.Surname} ${user.Name}`;
    }
    return "";
  }, [user]);
  const getEmail = useCallback(() => {
    if (user) {
      return `${user.Email}`;
    }
    return "";
  }, [user]);
  const getName = useCallback(() => {
    if (user) {
      return `${user.Name}`;
    }
    return "";
  }, [user]);
  return (
    <div>
      <div className="container">
        <div className="py-8 grid lg:grid-cols-4 ">
          <div className="col-span-1 flex flex-col gap-3 p-2">
            <span className="uppercase text-xl">trang tài khoản</span>
            <h2 className="font-semibold leading-[12px] text-[16px]">
              Xin chào, <b className="text-red">{getName()}</b>
              <span className="ml-2">!</span>
            </h2>
            <ul className="flex flex-col gap-2 ">
              <Link className="hover:text-yellow text-yellow">
                <li>Thông tin tài khoản</li>
              </Link>
              <Link className="hover:text-yellow" to="/doi-mat-khau">
                <li>Đổi mật khẩu</li>
              </Link>
              <Link className="hover:text-yellow">
                <li>Địa chỉ</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-3 p-2">
            <span className="uppercase text-xl  ">Thông tin tài khoản</span>
            <div className="flex flex-col gap-3 mt-3">
              <span>
                <b>Họ tên</b>: {getFullName()}
              </span>
              <span>
                <b>Email</b>: {getEmail()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
