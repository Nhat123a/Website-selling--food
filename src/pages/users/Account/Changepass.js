import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const ChangePass = () => {
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

  //Form
  const schema = yup.object().shape({
    Oldpassword: yup.string().required("Trường bắt buộc"),
    NewPassWord: yup
      .string()
      .required("Trường bắt buộc")
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
    Confirmpassword: yup
      .string()
      .required("Trường  bắt buộc")
      .oneOf([yup.ref("NewPassWord"), null], "Mật khẩu xác nhận không khớp"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (user && data.Oldpassword === user.Pass) {
      const allUsers = JSON.parse(localStorage.getItem("Users")) || [];
      const updatedUsers = allUsers.map((u) =>
        u.Email === user.Email ? { ...u, Pass: data.NewPassWord } : u
      );
      // Update both LoggedInUser and Users in localStorage
      localStorage.setItem("Users", JSON.stringify(updatedUsers));

      // Update the LoggedInUserEmail to reflect the new password
      //   localStorage.setItem("LoggedInUser", JSON.stringify(updatedUsers));

      setUser(updatedUsers.find((u) => u.Email === user.Email));
      toast.success("Đổi mật khẩu thành công");
    } else {
      toast.error("Mật khẩu cũ không chính xác");
    }
    // console.log(data); // Log submitted data
    // Handle form submission logic here
  };
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
              <Link className="hover:text-yellow " to="/Thong-tin-tai-khoan">
                <li>Thông tin tài khoản</li>
              </Link>
              <Link className="hover:text-yellow text-yellow">
                <li>Đổi mật khẩu</li>
              </Link>
              <Link className="hover:text-yellow">
                <li>Địa chỉ</li>
              </Link>
            </ul>
          </div>
          <div className="col-span-2 p-2">
            <span className="uppercase text-xl  ">Đổi mật khẩu</span>
            <div className="flex flex-col gap-3 mt-3">
              <span>
                Để đảm bảo tính bảo mật bạn vui lòng đặt lại mật khẩu với ít
                nhất 8 kí tự
              </span>
              <div className="Form_contact">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="py-[5px]">
                    <input
                      className={`border ${
                        errors.Oldpassword ? "border-red" : "border-[#e6e6e6]"
                      } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                      type="password"
                      placeholder="Mật khẩu cũ"
                      {...register("Oldpassword")}
                    />
                    {errors.Oldpassword && (
                      <span className="text-red">
                        {errors.Oldpassword.message}
                      </span>
                    )}
                  </div>
                  <div className="py-[5px]">
                    <input
                      className={`border ${
                        errors.NewPassWord ? "border-red" : "border-[#e6e6e6]"
                      } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                      type="password"
                      placeholder="Mật khẩu mới"
                      {...register("NewPassWord")}
                    />
                    {errors.NewPassWord && (
                      <p className="text-red">{errors.NewPassWord.message}</p>
                    )}
                  </div>
                  <div className="py-[5px]">
                    <input
                      className={`border ${
                        errors.Confirmpassword
                          ? "border-red"
                          : "border-[#e6e6e6]"
                      } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                      type="password"
                      placeholder="Xác nhận mật khẩu"
                      {...register("Confirmpassword")}
                    />
                    {errors.Confirmpassword && (
                      <p className="text-red">
                        {errors.Confirmpassword.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-green mt-4 rounded-[20px] leading-9 px-5 text-white hover:bg-yellow hover:text-black"
                  >
                    Đổi mật khẩu
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
