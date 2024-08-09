import React, { Suspense } from "react";
import { ROUTER } from "./untils/router";
import Layouts from "./pages/users/theme/Layouts";
import { Route, Routes } from "react-router-dom";
import ProductDeltail from "./pages/users/ProductDeltail";
import Category from "./pages/users/Category";
import Checkout from "./pages/users/Checkout";
import Contact from "./pages/users/Contact";
import Login from "./pages/users/Account/Login";
import Register from "./pages/users/Account/Register";
import LayoutAcount from "./pages/users/Account/LayoutAcount";
import Favoriteproduct from "./pages/users/Favoriteproduct";
import ShopSystem from "./pages/users/ShopSystem";
import Breadcrumb from "./components/Breadcrumb";
import Infomation from "./pages/users/Account/Infomation";
import ChangePass from "./pages/users/Account/Changepass";
import Order from "./pages/users/Order";
import NewFeed from "./pages/users/NewFeed";

const HomePages = React.lazy(() => import("./pages/users/HomePages"));
const About = React.lazy(() => import("./pages/users/About"));
const Renderrouter = () => {
  const userRouter = [
    {
      path: ROUTER.USER.Home,
      component: HomePages,
    },
    {
      path: ROUTER.USER.Details,
      component: ProductDeltail,
    },
    {
      path: ROUTER.USER.Category,
      component: Category,
      breadcrumb: "Danh mục",
    },
    {
      path: ROUTER.USER.About,
      component: About,
      breadcrumb: "Giới thiệu",
    },
    {
      path: ROUTER.USER.Contact,
      component: Contact,
      breadcrumb: "Liên Hệ",
    },
    {
      path: ROUTER.USER.Login,
      component: Login,
      breadcrumb: "Đăng nhập",
    },
    {
      path: ROUTER.USER.Register,
      component: Register,
      breadcrumb: "Đăng kí",
    },
    {
      path: ROUTER.USER.Favoriteproduct,
      component: Favoriteproduct,
      breadcrumb: "Sản phẩm yêu thích",
    },
    {
      path: ROUTER.USER.ShopSystem,
      component: ShopSystem,
      breadcrumb: "Hệ thống cửa hàng",
    },
    {
      path: ROUTER.USER.Infomation,
      component: Infomation,
      breadcrumb: "Thông tin tài khoản",
    },
    {
      path: ROUTER.USER.ChangePass,
      component: ChangePass,
      breadcrumb: "Đổi mật khẩu",
    },
    {
      path: ROUTER.USER.Order,
      component: Order,
      breadcrumb: "Đơn Hàng",
    },
    {
      path: ROUTER.USER.New,
      component: NewFeed,
      breadcrumb: "Tin tức",
    },
    {
      path: ROUTER.USER.Info,
      component: Order,
      breadcrumb: "Câu hỏi thường gặp",
    },
  ];
  return (
    <div>
      <Suspense>
        <Routes>
          {userRouter.map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                item.path === ROUTER.USER.Login ||
                item.path === ROUTER.USER.Register ? (
                  <Layouts>
                    <LayoutAcount>
                      <item.component />
                    </LayoutAcount>
                  </Layouts>
                ) : (
                  <Layouts>
                    <Breadcrumb routes={userRouter} />{" "}
                    {/* Breadcrumb component */}
                    <item.component />
                  </Layouts>
                )
              }
            />
          ))}

          <Route path={ROUTER.USER.Checkout} element={<Checkout />} />
          <Route
            path={`${ROUTER.USER.Category}/:slug`}
            element={
              <Layouts>
                <Category />
              </Layouts>
            }
          />
          <Route
            path={`${ROUTER.USER.Details}/:productName/:productid`}
            element={
              <Layouts>
                <Breadcrumb routes={userRouter} />
                <ProductDeltail />
              </Layouts>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

const Routercustom = () => {
  return Renderrouter();
};

export default Routercustom;
