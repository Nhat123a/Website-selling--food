import { GiFruitBowl } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaBowlRice } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { GiFishBucket } from "react-icons/gi";

const data = [
  {
    ID: 1,
    Name: "Trang chủ",
    Slug: "/",
  },
  {
    ID: 2,
    Name: "Giới thiệu",
    Slug: "/Gioi-thieu",
  },
  {
    ID: 3,
    Name: "Sản phẩm",
    hasArrow: true,
    Slug: "/Danh-muc-san-pham",
    subMenu: true,
    subLinks: [
      {
        Header: "Rau củ quả",
        icon: <GiFruitBowl />,
        subLink: [
          {
            Name: "Rau ăn lá",
            Slug: "/rau-an-la",
          },
          {
            Name: "Rau ăn củ",
            Slug: "/",
          },
          {
            Name: "Rau ăn quả",
            Slug: "/",
          },
        ],
      },
      {
        Header: "Trái cây",
        icon: <GiFruitTree />,
        subLink: [
          {
            Name: "Trái cây trong nước",
            Slug: "/",
          },
          {
            Name: "Trái cây ăn quả",
            Slug: "/",
          },
          {
            Name: "Trái cây nhập khẩu",
            Slug: "/",
          },
        ],
      },
      {
        Header: "Đồ khô",
        icon: <FaBowlRice />,
        subLink: [
          {
            Name: "Gạo các loại",
            Slug: "/gao-cac-loai",
          },
          {
            Name: "Bột sắn",
            Slug: "/",
          },
          {
            Name: "Ngũ cốc",
            Slug: "/",
          },
        ],
      },
      {
        Header: "Rau củ quả",
        icon: <LuMilk />,
        subLink: [
          {
            Name: "Rau ăn lá",
            Slug: "/rau-an-la",
          },
          {
            Name: "Rau ăn củ",
            Slug: "/",
          },
          {
            Name: "Rau ăn quả",
            Slug: "/",
          },
        ],
      },
      {
        Header: "Thịt và hải sản",
        icon: <GiFishBucket />,
        subLink: [
          {
            Name: "Thịt bò",
            Slug: "/",
          },
          {
            Name: "Thịt lợn",
            Slug: "/",
          },
          {
            Name: "Cá hồi",
            Slug: "/",
          },
        ],
      },
      {
        Header: "Thức uống",
        icon: <LuMilk />,
        subLink: [
          {
            Name: "Thức uống đóng chai",
            Slug: "/",
          },
          {
            Name: "Sữa bò tươi",
            Slug: "/",
          },
          {
            Name: "Nước ép cam",
            Slug: "/",
          },
        ],
      },
    ],
  },
  {
    ID: 4,
    Name: "Liên hệ",
    Slug: "/Lien-he-voi-chung-toi",
  },
  {
    ID: 5,
    Name: "Tin tức",
    Slug: "tin-tuc",
  },
  {
    ID: 6,
    Name: "Câu hỏi thường gặp",
    Slug: "/cau-hoi-thuong-gap",
  },
];

export default data;
