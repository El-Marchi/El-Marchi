import React, { useState } from 'react';
import AddProductModal from '../comps/AddProductModal.jsx';


const ButtonAddProd = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button 
        onClick={openModal} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add New Product
      </button>
      <AddProductModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ButtonAddProd;