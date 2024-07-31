import { FaWarehouse } from "react-icons/fa6";
import { TbArrowsExchange2 } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import React from "react";

interface HeaderItem {
  ID: number;
  icon: React.ReactNode;
  total: number;
  name: string;
  slug: string;
}

const headerList: HeaderItem[] = [
  {
    ID: 1,
    icon: <AiOutlineHome />,
    total: 0,
    name: "Trang chủ",
    slug: "/",
  },
  {
    ID: 2,
    icon: <RxHamburgerMenu />,
    total: 0,
    name: "Danh mục",
    slug: "",
  },
  {
    ID: 3,
    icon: <FaWarehouse />,
    total: 8,
    name: "Hệ thống",
    slug: "/He-thong-cua-hang",
  },
  {
    ID: 4,
    icon: <TbArrowsExchange2 />,
    total: 0,
    name: "So sánh",
    slug: "",
  },
  {
    ID: 5,
    icon: <FaRegHeart />,
    total: 1,
    name: "Yêu thích",
    slug: "/san-pham-yeu-thich",
  },
  {
    ID: 6,
    icon: <BsHandbag />,
    total: 8,
    name: "Giỏ hàng",
    slug: "",
  },
];
export default headerList;
