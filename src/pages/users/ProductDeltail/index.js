import { memo } from "react";
// import Bread_crumb from "../../../components/Bread-crumb";
import React, { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa6";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdCompareArrows } from "react-icons/md";
import productData from "../../../Data/product";
import { ProductNews } from "../../../components/Product/productNew";
import CurrencyFormat from "react-currency-format";
import { useParams } from "react-router-dom";
import { addtoCart } from "../../../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const ProductDeltail = () => {
  const { productName, productid } = useParams();
  // console.log(productid);
  const thisproduct = productData.find(
    (x) => x.productID.toString() === productid.toString()
  );
  const savings =
    thisproduct && thisproduct.priceOld
      ? thisproduct.priceOld - thisproduct.priceNew
      : 0;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // window.location.reload();
  }, [productName, productid]);

  // console.log(thisproduct);
  const image = thisproduct.productImage;
  // console.log(image);
  const [mainImage, setMainImage] = useState(image[0]);
  const [activeImage, setActiveImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const setPlay = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 900);
    return () => clearInterval(setPlay);
  }, []);

  const handleActiveImage = (image, index) => {
    setMainImage(image);
    setActiveImage(index);
  };
  const [quantity, setQuantity] = useState(1);
  const handleInputChange = (event) => {
    const value = event.target.value;
    // Chỉ cho phép các giá trị số
    if (!isNaN(value) && value !== "") {
      setQuantity(parseInt(value, 10));
    } else if (value === "") {
      setQuantity("");
    }
    // console.log(value);
  };
  // Tăng số lượng
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity !== "" ? prevQuantity + 1 : 1));
  };
  //Giảm số lượng
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 1));
  };
  const Data__sup = [
    {
      id: 1,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/chinhsach_1.jpg?1719377594344",
      Title: "Miễn phí vận chuyển tại Hà Nội",
    },
    {
      id: 2,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/chinhsach_2.jpg?1719377594344",
      Title: "Bảo hành chính hãng toàn quốc",
    },
    {
      id: 3,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/chinhsach_3.jpg?1719377594344",
      Title: "Cam kết chính hãng 100%",
    },
    {
      id: 4,
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/chinhsach_4.jpg?1719377594344",
      Title: "1 đổi 1 nếu sản phẩm lỗi",
    },
  ];
  const Card__code = [
    {
      id: 1,
      Title: "50K",
      Conten: "Nhập mã BEA50 giảm 50K đơn từ 250K",
      Code: "BEA50",
    },
    {
      id: 2,
      Title: "15%",
      Conten: "Nhập mã BEA15 giảm 15% đơn từ 500K",
      Code: "BEA15",
    },
    {
      id: 3,
      Title: "99K",
      Conten: "Nhập mã BEAN99K giảm ngay 99K",
      Code: "BEAN99K",
    },
    {
      id: 4,
      Title: "0K",
      Conten: "Nhập mã FREESHIP miễn phí vận chuyển",
      Code: "FREESHIP",
    },
  ];
  const [Copied, setCopied] = useState({});
  const HandleSave = (id, code) => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied((prvecopi) => ({ ...prvecopi, [id]: true }));
        setTimeout(() => {
          setCopied((prvecopi) => ({ ...prvecopi, [id]: false }));
        }, 2000);
        // console.log(code);
      })
      .catch((err) => {
        console.log("Save fail", err);
      });
  };
  const datatab = [
    {
      id: 1,
      Name: "Mô tả sản phẩm",
      Tab_id: 1,
    },
    {
      id: 2,
      Name: "Hướng dẫn mua hàng",
      Tab_id: 2,
    },
    {
      id: 3,
      Name: "Đánh giá",
      Tab_id: 3,
    },
  ];
  const [activeTab, setActivetab] = useState(0);
  const HandleActivetab = (index) => {
    setActivetab(index);
    // console.log(activeTab);
  };
  const data__tabConten = [
    {
      Tab_id: 0,
      Name: "Mô tả sản phẩm",
      Conten: `<p>Trang trại chăn nuôi của Karst nằm tại một vùng cao của tỉnh Bình Phước, nơi có môi trường thiên nhiên trong lành và những đồng cỏ rộng lớn. 
    Heo, bò, dê, gà được chăn thả tự do với nguồn thức ăn khép kín. <br>
    Thức ăn của Heo, Gà được định lượng khoa học bởi hãng Bayer (Đức) và nấu chín giúp hệ tiêu hoá và sức đề kháng khoẻ mạnh. 
    Bò và Dê được cho ăn hoàn toàn từ cỏ trong trang trại. 
    Ngoài ra còn có các loại thảo dược như diệp hạ châu, tỏi, gừng, nghệ dùng thay cho thuốc kháng sinh để phòng và trị bệnh cho vật nuôi.</p>`,
    },
    {
      Tab_id: 1,
      Name: "Hướng dẫn mua hàng",
      Conten: `<p>Bước 1: Truy cập website và lựa chọn sản phẩm cần mua</p>
             <p>Bước 2: Click vào sản phẩm muốn mua, màn hình hiển thị ra pop up với các lựa chọn sau:</p>
             <ul>
               <li>Nếu bạn muốn tiếp tục mua hàng: Bấm vào phần tiếp tục mua hàng để lựa chọn thêm sản phẩm vào giỏ hàng</li>
               <li>Nếu bạn muốn xem giỏ hàng để cập nhật sản phẩm: Bấm vào xem giỏ hàng</li>
               <li>Nếu bạn muốn đặt hàng và thanh toán cho sản phẩm này vui lòng bấm vào: Đặt hàng và thanh toán</li>
             </ul>
             <p>Bước 3: Lựa chọn thông tin tài khoản thanh toán...</p>`,
    },
    {
      Tab_id: 2,
      Name: "Đánh giá",
      Conten: `<p>Hiện chúng tôi chưa cập nhật !</p>`,
    },
  ];
  const conten__tab = data__tabConten.find((x) => x.Tab_id === activeTab);
  // console.table(Card__code);
  // console.log(quantity);

  // Product__View
  const dataProduct_filter = productData.slice(0, 4);
  // console.log(dataProduct_filter);
  const Sale = () => {
    if (thisproduct.priceOld && thisproduct.priceNew) {
      if (thisproduct.priceNew < thisproduct.priceOld) {
        const count =
          ((thisproduct.priceOld - thisproduct.priceNew) /
            thisproduct.priceOld) *
          100;
        return Math.round(count);
      }
    }
    return "";
  };
  const dispatch = useDispatch();
  const HandleAddCart = (
    productid,
    productName,
    priceNew,
    productImage,
    quantity
  ) => {
    const product = {
      productid,
      productName,
      productImage,
      priceNew,
      quantity,
    };
    dispatch(addtoCart(product));
    toast.success("Thêm thành công", {
      position: "top-center", // Sử dụng chuỗi vị trí
      autoClose: 3000, // Tự động đóng sau 3 giây
    });
  };
  return (
    <div>
      <div className="container ">
        <div className="Product_Conten flex flex-col lg:flex-row items-start justify-between gap-5  mb-8">
          <div className="Conten__left  w-full">
            <div className="slider-container flex  flex-col lg:flex-row-reverse justify-between gap-4">
              <div className="Image__main relative">
                <img
                  className="lg:w-[520px] lg:h-[520px] h-auto w-full flex items-center justify-center rounded-[10px] object-cover transition-all duration-300 "
                  src={mainImage}
                />
                {Sale() !== "" && (
                  <div
                    className="Sale__off bg-red text-white py-[5px] px-3 
                font-semibold rounded-bl-[10px] rounded-br-[10px] absolute top-[5px] left-[5px] "
                  >
                    <span>{Sale()}%</span>
                    <span className="block">OFF</span>
                  </div>
                )}
              </div>
              <div className="Image__slide flex flex-row lg:flex-col gap-3">
                {image.map((image, index) => (
                  <div
                    key={index}
                    className={`image__item relative  cursor-pointer border overflow-hidden w-[100px] h-[100px] rounded-lg ${
                      index === activeImage
                        ? "border-green"
                        : "border-[#e4e4e4] hover:border-green"
                    }`}
                    onClick={() => handleActiveImage(image, index)}
                  >
                    <img
                      className="w-full h-full p-1 object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      src={image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="Conten__right  w-full h-full">
            <div className="Title">
              <h2 className="font-semibold text-2xl mb-3">{productName}</h2>
              <div className="border-b border-[#e4e4e4] py-3">
                <span className="text-base leading-6 ">
                  Thương hiệu: <b className="text-green">Bean Team</b> | Tình
                  trạng:{" "}
                  <b
                    className={`${
                      thisproduct.Status ? "text-green" : "text-red"
                    }`}
                  >
                    {thisproduct.Status ? "Còn Hàng" : "Hết Hàng"}
                  </b>
                </span>
                <p className="block text-base">Mã SKU: Đang cập nhật</p>
              </div>
              <div className="Price__box border-b border-[#e4e4e4] py-3">
                <div className="flex items-center gap-4">
                  <div className="Price__new font-semibold text-[26px]">
                    <span className="Special__price ">Giá:</span>
                    <b className="text-rose-600">
                      {" "}
                      <CurrencyFormat
                        value={thisproduct.priceNew}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"₫"}
                      />
                    </b>
                  </div>
                  <div className="Price__old text-base line-through text-[#545454]">
                    {thisproduct.priceOld && (
                      <span className="Special__price">
                        Giá thị trường:{" "}
                        <CurrencyFormat
                          value={thisproduct.priceOld}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"₫"}
                        />
                      </span>
                    )}
                  </div>
                </div>
                <div className="save__price block">
                  <span>
                    {" "}
                    Tiết kiệm:{" "}
                    <b className="text-rose-500">
                      <CurrencyFormat
                        value={savings}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"₫"}
                      />
                    </b>{" "}
                    so với giá thị trường
                  </span>
                </div>
              </div>
              <div className="Eye__product flex items-center gap-2 justify-start text-base mt-2">
                <span
                  className={`transition-opacity duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  } ml-4`}
                >
                  <FaRegEye />
                </span>
                <span>28 người đang xem sản phẩm này</span>
              </div>
              <div className="Description__product mt-3 mb-3 ">
                {thisproduct.Description && (
                  <p className="bg-gray py-1 px-2 border-l-2 border-green rounded-[10px]">
                    {thisproduct.Description}
                  </p>
                )}
              </div>
              <div className="Note__product mb-5">
                <div className="header font-semibold mb-1">Ghi chú:</div>
                <div className="Note__input relative  ">
                  <input
                    placeholder="Thêm ghi chú sản phẩm"
                    className="border border-[#7d7d7d] leading-[38px] pl-10 pr-10 w-full rounded-[38px]  outline-none"
                  />
                  <Link className="absolute top-0 left-0 w-10 h-10   flex items-center justify-center">
                    <AiOutlineEdit size={18} />
                  </Link>
                </div>
              </div>
              <div className="ClearFix__form mb-5">
                <div className="Quantity__container flex lg:flex-row lg:items-center flex-col justify-between gap-2">
                  <div className="Quantity bg-transparent  w-auto">
                    <div className="Input__quantity inline-flex ">
                      <button
                        onClick={decrementQuantity}
                        className="rounded-tl-[25px] rounded-bl-[25px] border-r-0 border-[#7d7d7d] border hover:text-white hover:bg-green px-4 text-base "
                      >
                        -
                      </button>
                      <input
                        type="text "
                        value={quantity}
                        onChange={handleInputChange}
                        className="text-center leading-[45px] text-base border-b border-t border-[#7d7d7d] outline-none w-[50px] block"
                      />
                      <button
                        onClick={incrementQuantity}
                        className="px-4 text-base rounded-tr-[25px] border-l-0 hover:bg-green border-[#7d7d7d] border hover:text-white rounded-br-[25px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="Btn__right  w-full flex items-center justify-between gap-3">
                    <div className="btn__add  w-full leading-[45px] rounded-[25px] overflow-hidden">
                      <button
                        onClick={() =>
                          HandleAddCart(
                            thisproduct.productID,
                            thisproduct.productName,
                            thisproduct.priceNew,
                            thisproduct.productImage[0],
                            quantity
                          )
                        }
                        className="w-full bg-green text-white font-semibold hover:bg-yellow hover:text-black "
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                    <div className="btn__wish border border-[#7d7d7d] p-3  rounded-full w-[45px] h-[45px] flex items-center justify-center">
                      <Link className="hover:text-yellow text-green">
                        <IoMdHeartEmpty size={28} />
                      </Link>
                    </div>
                    <div className="btn__compare border p-4 border-[#7d7d7d] rounded-full w-[45px] h-[45px] flex items-center justify-center">
                      <Link className="text-yellow">
                        <MdCompareArrows size={28} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="policy__pro  grid grid-cols-1 md:grid-cols-4  gap-4">
                {Data__sup.slice(0, 2).map((policy) => (
                  <div
                    key={policy.id}
                    className="col-span-2 flex items-center justify-start gap-3"
                  >
                    <div className="Image__policy">
                      <img src={policy.Image} alt={policy.Title} />
                    </div>
                    <span>{policy.Title}</span>
                  </div>
                ))}
                {Data__sup.slice(2).map((policy) => (
                  <div
                    key={policy.id}
                    className="col-span-2 flex items-center justify-start gap-3"
                  >
                    <div className="Image__policy">
                      <img src={policy.Image} alt={policy.Title} />
                    </div>
                    <span>{policy.Title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="Discount__code mb-5">
          <div className="bg-gray rounded-[5px] px-3 py-4">
            <h2 className="text-center font-semibold text-green text-[28px] mb-5">
              Mã giảm giá
            </h2>
            <div className="Card__code grid grid-cols-1 lg:grid-cols-4 gap-3 p-0">
              {Card__code.map((code) => (
                <div
                  className="Item__code bg-white p-[5px] w-full mb-[10px] rounded-[5px] shadow-md overflow-hidden"
                  key={code.id}
                >
                  <p className="text-yellow font-bold text-base leading-5 pl-1">
                    {code.Title}
                  </p>
                  <span className="text-sm whitespace-nowrap ">
                    {code.Conten}
                  </span>
                  <div
                    className={`btn__coppy flex items-center ${
                      Copied[code.id] ? "bg-yellow opacity-50" : ""
                    } justify-between mt-3 p-1 rounded-md bg-gray`}
                  >
                    <p
                      className={`code__zip font-semibold ${
                        Copied[code.id] ? "text-black" : ""
                      } text-base leading-4 inline-block`}
                    >
                      {code.Code}
                    </p>
                    <button
                      className={`coppy__btn bg-green rounded-3xl text-xs
                     px-4 leading-6 text-white my-1 outline-none cursor-pointer font-medium
                      hover:bg-yellow ${
                        Copied[code.id] ? "opacity-50" : ""
                      } hover:text-black hover:font-medium`}
                      onClick={() => HandleSave(code.id, code.Code)}
                    >
                      {Copied[code.id] ? " Đã lưu" : "Lưu mã"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Tab mô tả  && sản phẩm có thể thích*/}
        <div className="Tab__Container mb-5">
          <div className="grid grid-cols-3 lg:grid-cols-4 items-start gap-4">
            <div className="tab__product w-full col-span-3">
              <div className="Conten">
                <div className="Tab__header">
                  <ul className="flex items-center font-bold gap-5 border-b border-[#D9D9D9] text-lg">
                    {datatab.map((tab, index) => (
                      <li
                        key={tab.id}
                        onClick={() => HandleActivetab(index)}
                        className={`rounded-tl-[6px] ${
                          activeTab === index
                            ? "bg-green text-white"
                            : "bg-white text-black"
                        } rounded-tr-[6px] hover:bg-green hover:text-white  px-4 py-[10px]`}
                      >
                        <Link>{tab.Name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="Tab__body px-1 py-5 leading-7 text-base">
                  <div
                    dangerouslySetInnerHTML={{ __html: conten__tab?.Conten }}
                  />
                </div>
              </div>
            </div>
            <div className="Product__view col-span-3">
              <div className="border border-[#ededed] overflow-hidden rounded-tl-[6px] rounded-tr-[6px]">
                <div className="productView__Header  bg-green ">
                  <h2 className="py-[10px] cursor-pointer text-center text-base text-white uppercase font-semibold hover:text-yellow">
                    Có thể ban thích
                  </h2>
                </div>
                <div className="productView__Body mb-2">
                  {dataProduct_filter.map((index) => (
                    <div
                      key={index.productID}
                      className="flex items-start pb-[10px] px-3 pt-3 gap-5"
                    >
                      <div className="Image cursor-pointer rounded-[5px] overflow-hidden inline-block w-[65px] border border-[#ededed]">
                        <img src={index.productImage} className="w-full" />
                      </div>
                      <div className="Item__info ">
                        <h2 className="font-bold hover:text-green mb-2">
                          <Link>{index.productName}</Link>
                        </h2>
                        <div className="Price ">
                          <span className="text-[#cc2020] text-base font-bold mr-4">
                            <CurrencyFormat
                              value={index.priceNew}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"₫"}
                            />
                          </span>
                          <span className="line-through text-[#9e9e9e] ">
                            <CurrencyFormat
                              value={index.priceOld}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"₫"}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sản phẩm liên quan */}
        <div className="mb-10">
          <ProductNews Title="Sản phẩm liên quan" status="hidden" />
        </div>
      </div>
    </div>
  );
};
export default memo(ProductDeltail);
