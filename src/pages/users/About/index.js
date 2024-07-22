import { memo } from "react";

const About = () => {
  const item = [
    {
      id: 1,
      Num: "2",
      Title: "Năm Kinh Nghiệm",
    },
    {
      id: 2,
      Num: "200",
      Title: "Nhân Viên",
    },
    {
      id: 3,
      Num: "3000+",
      Title: "Khách hàng",
    },
    {
      id: 4,
      Num: 8,
      Title: "Cửa Hàng",
    },
  ];
  const CardItem = [
    {
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_1.png?1719377594344",
      Title: "PHÂN PHỐI",
      Conten:
        "Fruit Farm luôn hướng đến xây dựng chuỗi cung ứng nông sản hàng đầu tại Việt Nam.",
    },
    {
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_2.png?1719377594344",
      Title: "SẢN PHẨM",
      Conten:
        "Fruit Farm luôn tìm kiếm và nhập sản phẩm hữu cơ chất lượng từ thị trường Châu Âu, Mỹ.",
    },
    {
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/dichvu_3.png?1719377594344",
      Title: "CHẤT LƯỢNG",
      Conten:
        "Chỉ phân phối nông sản được chứng nhận uy tín: Demeter, EU Organic, USDA, AIAB, Vegan",
    },
  ];
  return (
    <div className="py-8">
      <div className="container  flex flex-col gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="Img rounded-lg overflow-hidden">
            <img
              className="w-full h-full"
              src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about4_banner.jpg?1719377594344"
            ></img>
          </div>
          <div className="vision">
            <h2 className="text-green font-bold text-[28px]">
              Tầm nhìn của chúng tôi
            </h2>
            <div className="Conten">
              <p className="text-base text-justify text-[#565656]">
                Hiểu được vấn đề ấy, tôi và những người bạn đã tâm huyết thành
                lập công ty nông sản Fruit Farm hữu cơ, với mong muốn nhập được
                nhiều sản phẩm tốt, chất lượng, có chứng nhận hữu cơ về cung cấp
                cho các nhà phân phối tại Việt Nam. Các thương hiệu lớn được
                chúng tôi đã tìm hiểu, phù hợp với tập quán sử dụng, mức thu
                nhập của người Việt Nam.
              </p>
            </div>
          </div>
        </div>

        {/* Mục tiêu */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-5 items-center">
          <div className="Target">
            <h2 className="text-green font-bold text-[28px]">
              Mục tiêu của chúng tôi
            </h2>
            <div className="Conten">
              <p className="text-base text-justify text-[#565656]">
                Thật may mắn, hiện tại chúng tôi đã kết nối và phân phối cho các
                đối tác lớn ở Tp. Hồ Chí Mình và Hà Nội. Trong tương lai gần,
                chúng sẽ tôi sẽ đẩy mạnh phân phối sản phẩm về các tỉnh thành
                khác.
              </p>
            </div>
          </div>
          <div className="Img rounded-lg overflow-hidden">
            <img
              className="w-full h-full"
              src="https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/about5_banner.jpg?1719377594344"
            ></img>
          </div>
        </div>
      </div>
      <div className="bg-green w-full py-5 my-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 container">
          {item.map((item) => (
            <div
              key={item.id}
              className="container flex flex-col  items-center"
            >
              <h2 className="text-yellow text-[48px] font-bold">{item.Num}</h2>
              <p className="text-lg text-white">{item.Title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container ">
        <h2 className="text-yellow font-semibold text-[40px] text-center mb-5">
          Tại sao chọn chúng tôi
        </h2>
        <p className=" text-base  max-w-[70%] text-center m-auto text-[#565656] ">
          Với nhiều năm kinh nghiệm trong lĩnh vực nông sản. Chúng tôi tự hào
          đang là đơn vị cung cấp nông sản chất lượng - tươi sạch. Cam kết về
          phân phối, sản phẩm, chất lượng đảm bảo và uy tín
        </p>
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-5  ">
        {CardItem.map((item, index) => (
          <div
            key={index}
            className="card p-10 rounded-xl text-center my-8 border border-gray  shadow-lg shadow-[#cccc] "
          >
            <div className="Image mb-[15px] w-[90px] h-[90px]  overflow-hidden m-auto border-dashed rounded-full border-2 border-green">
              <img className="p-3" src={item.Image}></img>
            </div>
            <h2 className="text-[22px] block uppercase font-bold mb-[10px]">
              {item.Title}
            </h2>
            <p className="text-lg">{item.Conten}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(About);
