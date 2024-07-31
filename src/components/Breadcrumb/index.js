// Breadcrumb.js
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";
import { ROUTER } from "../../untils/router";
const Breadcrumb = ({ routes }) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (location.pathname === ROUTER.USER.Home) {
    return null; // Không hiển thị breadcrumb nếu đang ở trang chủ
  }
  if (location.pathname === ROUTER.USER.Category) {
    return null; // Không hiển thị breadcrumb nếu đang ở trang chủ
  }
  const breadcrumbs = pathnames.map((value, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const route = routes.find((route) => route.path === routeTo);
    const name = route ? route.breadcrumb : value;

    return (
      <span key={routeTo}>
        <Link to={routeTo}>{decodeURIComponent(name)}</Link>
        {index < pathnames.length - 1 && "  "}
      </span>
    );
  });

  return (
    <nav className="bg-[#f5f5f5] leading-6 py-4">
      <div className="container flex items-center gap-3 ">
        <Link to="/" className="hover:text-yellow">
          Trang chủ
        </Link>
        {pathnames.length > 0 && (
          <MdKeyboardArrowRight size={18}></MdKeyboardArrowRight>
        )}
        <span className="text-yellow">{breadcrumbs}</span>
      </div>
    </nav>
  );
};

export default Breadcrumb;
