import { Fragment, memo } from "react";
import { FaLocationDot, FaClock, FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
const Contact = () => {
  const item = [
    {
      icon: <FaLocationDot size={18} />,
      Name: "Địa chỉ",
      Conten: "145 Khương đình, Thanh xuân, Hà Nội",
    },
    {
      icon: <FaClock size={18} />,
      Name: "Thời gian làm việc",
      Conten: "8h - 22h từ thứ 2 đến chủ nhật",
    },
    {
      icon: <FaPhoneVolume size={18} />,
      Name: "Hotline",
      Conten: "1900 7652",
    },
    {
      icon: <MdEmail size={18} />,
      Name: "Email",
      Conten: "doantrongnhat22@gmail.com",
    },
  ];
  // Form

  const schema = yup.object().shape({
    Name: yup.string().required("Vui lòng điền họ tên"),
    Email: yup.string().email("Không hợp lệ").required("Trường bắt buộc"),
    Phone: yup.number().required("Trường bắt buộc"),
    Conten: yup.string().required("Trường này bắt buộc"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    toast.success("Gửi thành công");
    console.log(data); // Log submitted data
    // Handle form submission logic here
  };
  return (
    <div className="container">
      <div className="grid py-8 gap-5 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2">
        <div className="Contact ">
          <h2 className="text-base uppercase font-bold mb-[10px]">
            NƠI GIẢI ĐÁP TOÀN BỘ MỌI THẮC MẮC CỦA BẠN?{" "}
          </h2>
          <div>
            <span>
              Fruit Farm- Siêu thị trực tuyến mua sắm nông sản, chất lượng, tươi
              xanh.
            </span>
            <br></br>
            <span className="text-green font-bold">
              Giá siêu tốt - Giao siêu tốc.
            </span>
          </div>
          <div className="group_adress my-3">
            <ul className="grid grid-cols-1 md:grid-cols-2 ">
              {item.map((item, index) => (
                <Fragment key={index}>
                  <li className="flex p-2 items-center gap-4">
                    <div
                      className="icon border rounded-full w-10 h-10 min-w-10 flex items-center justify-center
                 overflow-hidden border-green text-green"
                    >
                      {item.icon}
                    </div>
                    <div className="info">
                      <b>{item.Name}</b>
                      <br></br>
                      <span>{item.Conten}</span>
                    </div>
                  </li>
                </Fragment>
              ))}
            </ul>
          </div>
          {/* Liên hệ form */}
          <div>
            <h2 className="text-base uppercase font-bold mb-[10px]">
              LIÊN HỆ VỚI CHÚNG TÔI
            </h2>
            <p className="p-1">
              Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng
              tôi sẽ liên lạc lại với bạn sớm nhất có thể .
            </p>
            <div className="Form_contact">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-[5px]">
                  <input
                    className={`border ${
                      errors.Name ? "border-red" : "border-[#e6e6e6]"
                    } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                    type="text"
                    placeholder="Họ và tên"
                    {...register("Name")}
                  />
                  {errors.Name && (
                    <span className="text-red">{errors.Name.message}</span>
                  )}
                </div>
                <div className="p-[5px]">
                  <input
                    className={`border ${
                      errors.Email ? "border-red" : "border-[#e6e6e6]"
                    } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                    type="text"
                    placeholder="Email"
                    {...register("Email")}
                  />
                  {errors.Email && (
                    <p className="text-red">{errors.Email.message}</p>
                  )}
                </div>
                <div className="p-[5px]">
                  <input
                    className={`border ${
                      errors.Phone ? "border-red" : "border-[#e6e6e6]"
                    } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                    type="text"
                    placeholder="Điện thoại"
                    {...register("Phone")}
                  />
                  {errors.Phone && (
                    <p className="text-red">{errors.Phone.message}</p>
                  )}
                </div>
                <div className="p-[5px]">
                  <textarea
                    placeholder="Nội dung"
                    {...register("Conten")}
                    className={`border ${
                      errors.Conten ? "border-red" : "border-[#e6e6e6]"
                    } px-5 py-[8px] outline-none w-full rounded-[10px]`}
                  />
                  {errors.Conten && (
                    <p className="text-red">{errors.Conten.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-green mt-4 rounded-[20px] leading-9 px-5 text-white hover:bg-yellow hover:text-black"
                >
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="Map">
          <div className="rounded-lg overflow-hidden w-full h-96 lg:h-[530px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.0363120249212!2d105.7992150747134!3d20.991181489069337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbf1abf529d%3A0x1953bd89918ee3ec!2zMjE1IEMxMSBUaGFuaCBYdcOibiBC4bqvYywgVOG7lSAxNiwgVGhhbmggWHXDom4sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1720870992551!5m2!1svi!2s"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Contact);
