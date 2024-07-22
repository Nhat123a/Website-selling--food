import { memo } from "react";

const Policy = () => {
  const policy_data = [
    {
      id: 1,
      Title: "Vận chuyển miễn phí",
      Description: "Hóa đơn trên 5 triệu",
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/ser_1.png?1719377594344",
    },
    {
      id: 2,
      Title: "Đổi trả miễn phí",
      Description: "Trong vòng 7 ngày",
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/ser_2.png?1719377594344",
    },
    {
      id: 3,
      Title: "100% Hoàn tiền",
      Description: "Nếu sản phẩm lỗi",
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/ser_3.png?1719377594344",
    },
    {
      id: 4,
      Title: "Hotline: 1900 6750",
      Description: "Hỗ trợ 24/7",
      Image:
        "https://bizweb.dktcdn.net/100/514/629/themes/951567/assets/ser_4.png?1719377594344",
    },
  ];
  // console.table(policy_data);
  return (
    <div className="container ">
      <div className="policy__conatiner  gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center  ">
        {policy_data.map((index) => (
          <div
            className="flex bg-gray py-3 px-8 mb-7 h-full lg:h-[80px] items-center  rounded-[10px]"
            key={index.id}
          >
            <div className="policy__image mr-4 ">
              <img
                className="w-[50px] h-[50px]"
                src={index.Image}
                alt={index.Title}
              />
            </div>
            <div className="policy__info">
              <h2 className="text-green font-semibold whitespace-nowrap text-base">
                {index.Title}
              </h2>
              <span className="whitespace-nowrap">{index.Description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default memo(Policy);
