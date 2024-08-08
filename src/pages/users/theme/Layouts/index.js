import React, { memo, useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Policy from "../Policy";
import Cart from "../../../../components/Cart";
import { ToastContainer } from "react-toastify";
import { ModalProvider } from "../../../../components/Modal/Product/Modalcontext";
import ModalProduct from "../../../../components/Modal/Product/ModalProduct";
import BeatLoader from "react-spinners/BeatLoader";
import { useLocation } from "react-router-dom";
import ScollTop from "../../../../components/ScollTop";
const override = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
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
  // Loading
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#50c7c7");
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <ModalProvider>
      <div {...prop} className="relative min-h-screen">
        {loading ? (
          <BeatLoader
            color={color}
            cssOverride={override}
            loading={loading}
            size={15}
          />
        ) : (
          <>
            {" "}
            <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
            <div
              className={` ${
                isCartOpen ? " pointer-events-none opacity-50" : ""
              }`}
            >
              <Header setIsCartOpen={setIsCartOpen} />
              {children}
              <ToastContainer />
              <Policy />
              <ModalProduct></ModalProduct>
              <ScollTop></ScollTop>
              <Footer />
            </div>
          </>
        )}
      </div>
    </ModalProvider>
  );
};

export default memo(Layout);
