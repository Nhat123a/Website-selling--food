import React, { memo, useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Policy from "../Policy";
import Cart from "../../../../components/Cart";
import { ToastContainer } from "react-toastify";
import { ModalProvider } from "../../../../components/Modal/Product/Modalcontext";
import ModalProduct from "../../../../components/Modal/Product/ModalProduct";

const Layout = ({ children, ...prop }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // const Refcart = useRef(null);

  useEffect(() => {
    if (isCartOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isCartOpen]);

  return (
    <ModalProvider>
      <div {...prop} className="relative min-h-screen">
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        <div
          className={` ${isCartOpen ? " pointer-events-none opacity-50" : ""}`}
        >
          <Header setIsCartOpen={setIsCartOpen} />
          {children}
          <ToastContainer />
          <Policy />
          <ModalProduct></ModalProduct>

          <Footer />
        </div>
      </div>
    </ModalProvider>
  );
};

export default memo(Layout);
