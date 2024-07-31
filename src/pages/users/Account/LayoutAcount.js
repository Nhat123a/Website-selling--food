import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const LayoutAccount = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/dang-ki-tai-khoan"
  );

  useEffect(() => {
    setActive(location.pathname === "/dang-ki-tai-khoan");
  }, [location]);

  return (
    <div className="container">
      <div className="py-8">
        <div className="sm:w-[385px] w-auto m-auto h-full">
          <ul className="flex items-center justify-center h-[50px] mb-4">
            <Link
              className={`uppercase flex-1 text-center flex items-center justify-center h-full ${
                !active ? "border-green border-b text-green" : ""
              }`}
              to="/dang-nhap"
            >
              Đăng nhập
            </Link>
            <Link
              className={`uppercase flex-1 text-center flex items-center justify-center h-full ${
                active ? "border-green border-b text-green" : ""
              }`}
              to="/dang-ki-tai-khoan"
            >
              Đăng kí
            </Link>
          </ul>
          <div className="uppercase text-center text-[26px] mb-[10px] block">
            {!active ? "Đăng nhập" : "Đăng kí"}
          </div>
          {!active ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default LayoutAccount;
