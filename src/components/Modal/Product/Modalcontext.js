import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModal = (status, product = null) => {
    if (status) {
      setIsModalOpen(status);
    } else {
      setIsModalOpen(status);
    }
    if (product) {
      setSelectedProduct(product);
    }
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, handleModal, selectedProduct }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext); // Export useModal hook
