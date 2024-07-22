import { memo } from "react";
import logo from "../../../../assets/users/logo.png";
import cod from "../../../../assets/users/Media/cod.jpg";
import baking from "../../../../assets/users/Media/baking.jpg";
import momo from "../../../../assets/users/Media/momo.jpg";
import visa from "../../../../assets/users/Media/visa.jpg";
import { Link } from "react-router-dom";
import * as React from "react";

const data = [
  {
    ID: 1,
    Name: "Chính sách",
    item_link: [
      { name: "Chính sách thành viên", slug: "/chinh-sach-thanh-vien" },
      { name: "Chính sách thanh toán", slug: "/chinh-sach-thanh-toan" },
      { name: "Chính sách đổi sản phẩm", slug: "/chinh-sach-doi-san-pham" },
      { name: "Chính sách bảo mật", slug: "/chinh-sach-bao-mat" },
      { name: "Chính sách cộng tác viên", slug: "/chinh-sach-cong-tac-vien" },
      { name: "Chính sách bảo hành", slug: "/chinh-sach-bao-hanh" },
    ],
  },
  {
    ID: 2,
    Name: "HƯỚNG DẪN",
    item_link: [
      { name: "Hướng dẫn mua hàng", slug: "/huong-dan-mua-hang" },
      { name: "Hướng dẫn đổi trả", slug: "/huong-dan-doi-tra" },
      { name: "Hướng dẫn thanh toán", slug: "/huong-dan-thanh-toan" },
      {
        name: "Chương trình cộng tác viên",
        slug: "/chuong-trinh-cong-tac-vien",
      },
      { name: "Tìm kiếm", slug: "/tim-kiem" },
      { name: "Liên hệ", slug: "/lien-he" },
    ],
  },
];
const media__url = [
  {
    name: "Facebook",
    slug: "https://www.facebook.com/NhatIT2307",

    path: `<svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
      <path
        fill="currentColor"
        d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
      />
    </svg>`,
    background: "bg-blue-500",
  },
  {
    name: "Twitter",
    slug: "https://twitter.com/yourprofile",
    path: `<svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
      <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
    </svg>`,
    background: "bg-blue-400",
  },
  {
    name: "YouTube",
    slug: "https://www.youtube.com/yourprofile",
    path: `<svg viewBox="0 0 1024 1024" fill="currentColor" height="1em" width="1em">
      <path d="M941.3 296.1a112.3 112.3 0 00-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0082.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z" />
    </svg>`,
    background: "bg-red",
  },
  {
    name: "Instagram",
    slug: "https://www.instagram.com/yourprofile",
    path: ` <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
    >
      <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
    </svg>`,
    background: "bg-custom-gradient",
  },
];
const payment__img = [
  {
    ID: 1,
    Image: cod,
  },
  {
    ID: 2,
    Image: baking,
  },
  {
    ID: 3,
    Image: momo,
  },
  {
    ID: 4,
    Image: visa,
  },
];

// console.log(media__url);

// console.log(data);

const Footer = () => {
  return (
    <div>
      <div className="footer bg-[#f2f3f4]  pt-10 pb-6 px-0 ">
        <div className="container ">
          <div className="footer__col grid grid-cols-1  lg:grid-cols-[1fr_1.5fr_1fr] gap-10 text-center">
            <div className="cols-1 ">
              <div className="w-36 h-16 logo__footer">
                <Link to="./">
                  <img
                    alt="logo"
                    className="w-full cursor-pointer "
                    src={logo}
                  ></img>
                </Link>
              </div>
              <div className="Item__footer px-0 py-10  text-left leading-8">
                <p>
                  Fruit- Siêu thị trực tuyến mua sắm nông sản, chất lượng, tươi
                  xanh.
                </p>
                <h3 className="text-green font-semibold mb-4">
                  Giá siêu tốt - Giao siêu tốc.
                </h3>
                <span>
                  <b className="text-black">Địa chỉ:</b> 236 Khương đình, Thanh
                  xuân, Hà Nội
                </span>
                <br></br>
                <span className="text-green font-semibold">
                  <b className="text-black">Số điện thoại:</b> 19007652
                </span>
                <br></br>
                <span className="text-green font-semibold">
                  <b className="text-black">Email:</b> doantrongnhat22@gmail.com
                </span>
              </div>
            </div>
            {/* Item__footer2 */}
            <div className=" cols-2 ">
              <div className="grid grid-cols-2  pt-3">
                {data.map((item) => (
                  <div key={item.ID}>
                    <h4 className="font-bold text-lg text-left text-green uppercase mb-4">
                      {item.Name}
                    </h4>
                    {item.item_link.map((items, index) => (
                      <ul key={index}>
                        <li className="hover:text-yellow text-left font-medium mb-4 ">
                          <Link to={items.slug}>{items.name}</Link>
                        </li>
                      </ul>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Item 3 */}
            <div className="cols-3">
              <div className="text-left pt-3">
                <h4 className="text-lg font-bold text-green uppercase">
                  {" "}
                  Kết nối với chúng tôi
                </h4>

                <div className="item__media ">
                  <ul className="flex items-center justify-start gap-5 py-4">
                    {media__url.map((media_item, index) => (
                      <li
                        key={index}
                        className={`border border-gray-400 text-base text-white p-3 rounded-md ${media_item.background} hover:bg-opacity-65 transition-opacity duration-300`}
                      >
                        <Link to={media_item.slug}>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: media_item.path,
                            }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <h4 className="text-lg font-bold text-green uppercase">
                  {" "}
                  Hình thức thanh toán
                </h4>
                <div className="item__media ">
                  <ul className="flex items-center justify-start gap-4 py-4">
                    {payment__img.map((payItem) => (
                      <li
                        key={payItem.ID}
                        className=" text-base   cursor-pointer"
                      >
                        <img src={payItem.Image} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright bg-green justify-center py-4 flex items-center">
        <span className="text-white text-base">
          © Bản quyền thuộc về{" "}
          <b className="text-yellow">Đoàn Trọng Nhất Developer</b> | Hà Nội
        </span>
      </div>
    </div>
  );
};
export default memo(Footer);
