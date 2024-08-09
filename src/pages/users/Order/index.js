import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const Order = () => {
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
              Xin chào, <b className="text-green">{getName()}</b>
              <span className="ml-2">!</span>
            </h2>
            <ul className="flex flex-col gap-2 ">
              <Link className="hover:text-yellow text-yellow " to="/don-hang">
                <li>Đơn Hàng</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2 p-2">
            <span className="uppercase text-xl  ">Đơn Hàng Của bạn</span>
            <div className="flex flex-col gap-3 mt-3">
              <span>Chưa có dữ liệu !</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
