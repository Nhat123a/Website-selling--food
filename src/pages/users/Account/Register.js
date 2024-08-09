import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [usersData, setUsersData] = useState([]);

  const schema = yup.object().shape({
    Surname: yup.string().required("Trường bắt buộc"),
    Name: yup.string().required("Trường bắt buộc"),
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

  useEffect(() => {
    const savedUsersData = localStorage.getItem("Users");
    if (savedUsersData) {
      setUsersData(JSON.parse(savedUsersData));
    }
  }, []);

  const onSubmit = (data) => {
    const userExists = usersData.some((user) => user.Email === data.Email);

    if (userExists) {
      toast.error("Email đã tồn tại");
    } else {
      const updatedUsersData = [...usersData, data];
      localStorage.setItem("Users", JSON.stringify(updatedUsersData));
      setUsersData(updatedUsersData);
      toast.success("Đăng kí thành công");
      setTimeout(() => {
        navigate("/dang-nhap");
      }, 500);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("Surname")}
          type="text"
          placeholder="Họ"
          className="block w-full text-[15px] rounded px-[10px] h-10 mb-[10px] border border-[#e6e6e6] outline-none"
        />
        {errors.Surname && (
          <span className="text-red">{errors.Surname.message}</span>
        )}
        <input
          {...register("Name")}
          type="text"
          placeholder="Tên"
          className="block w-full text-[15px] rounded px-[10px] h-10 mb-[10px] border border-[#e6e6e6] outline-none"
        />
        {errors.Name && <span className="text-red">{errors.Name.message}</span>}
        <input
          {...register("Email")}
          type="email"
          placeholder="Email"
          className="block w-full text-[15px] rounded px-[10px] h-10 mb-[10px] border border-[#e6e6e6] outline-none"
        />
        {errors.Email && (
          <span className="text-red">{errors.Email.message}</span>
        )}
        <input
          {...register("Pass")}
          type="password"
          placeholder="Mật khẩu"
          className="block w-full text-[15px] rounded px-[10px] h-10 mb-[10px] border border-[#e6e6e6] outline-none"
        />
        {errors.Pass && <span className="text-red">{errors.Pass.message}</span>}
        <button className="bg-green text-white h-11 hover:bg-yellow hover:text-black w-full rounded text-base">
          Đăng kí
        </button>
      </form>
    </div>
  );
};

export default Register;
