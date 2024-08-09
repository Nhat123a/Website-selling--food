import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Email: yup.string().email("Email không hợp lệ").required("Trường bắt buộc"),
    Pass: yup.string().required("Trường bắt buộc"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const savedUsersData = localStorage.getItem("Users");
    if (!savedUsersData) {
      toast.error("Không có tài khoản nào tồn tại");
      return;
    }

    const usersData = JSON.parse(savedUsersData);
    const user = usersData.find(
      (user) => user.Email === data.Email && user.Pass === data.Pass
    );

    if (user) {
      localStorage.setItem("LoggedInUser", JSON.stringify(user));
      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/");
      }, 500);
    } else {
      toast.error("Email hoặc mật khẩu không đúng");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-[10px]">
          <input
            {...register("Email")}
            type="email"
            placeholder="Email"
            className="block w-full    text-[15px] rounded px-[10px] h-10  border border-[#e6e6e6] outline-none"
          ></input>
          {errors.Email && (
            <span className="text-red ">{errors.Email.message}</span>
          )}
        </div>
        <div className="mb-[10px]">
          <input
            {...register("Pass")}
            type="password"
            placeholder="Mật khẩu"
            className="block w-full text-[15px] rounded px-[10px] h-10   border border-[#e6e6e6] outline-none"
          ></input>
          {errors.Pass && (
            <span className="text-red ">{errors.Pass.message}</span>
          )}
        </div>

        <button className="bg-green  text-white h-11 hover:bg-yellow hover:text-black w-full rounded text-base">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
