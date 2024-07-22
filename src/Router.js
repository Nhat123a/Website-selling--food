import React, { Suspense } from "react";
import { ROUTER } from "./untils/router";
import Layouts from "./pages/users/theme/Layouts";
import { Route, Routes } from "react-router-dom";
import ProductDeltail from "./pages/users/ProductDeltail";
import Category from "./pages/users/Category";
import Checkout from "./pages/users/Checkout";
import Contact from "./pages/users/Contact";
import Login from "./pages/users/Account/Login";
import Account from "./pages/users/Account/LayoutAcount";
import Register from "./pages/users/Account/Register";
import LayoutAcount from "./pages/users/Account/LayoutAcount";
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
    },
    {
      path: ROUTER.USER.About,
      component: About,
    },
    {
      path: ROUTER.USER.Contact,
      component: Contact,
    },
    {
      path: ROUTER.USER.Login,
      component: Login,
    },
    {
      path: ROUTER.USER.Register,
      component: Register,
    },
  ];
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
