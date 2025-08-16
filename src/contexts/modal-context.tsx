'use client';

import React, { createContext, useContext, useState } from 'react';

type ModalType = 'lead-capture' | null;

interface ModalContextType {
  activeModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (modal: ModalType) => {
    setActiveModal(modal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setActiveModal(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ 
      activeModal, 
      openModal, 
      closeModal, 
      isModalOpen, 
      setIsModalOpen 
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}