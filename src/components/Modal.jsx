import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md mx-4 md:mx-0">
        <button
          className="absolute top-4 right-4 cursor-pointer [border:none] p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          onClick={onClose}
        >
          <span className="text-gray-600">×</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
