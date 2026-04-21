import React, { createContext, useContext, useState, useCallback } from 'react';

interface ModalContextType {
  isContactModalOpen: boolean;
  productName: string;
  openContactModal: (productName?: string) => void;
  closeContactModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [productName, setProductName] = useState('Giải pháp VNSIGN');

  const openContactModal = useCallback((name?: string) => {
    if (name) setProductName(name);
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider
      value={{
        isContactModalOpen: isOpen,
        productName,
        openContactModal,
        closeContactModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useContactModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ModalProvider');
  }
  return context;
};
