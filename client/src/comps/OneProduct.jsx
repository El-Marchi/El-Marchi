import React, { useState } from 'react';
import axios from 'axios';
import { FaTrash, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const OneProduct = ({ el, onUpdate, onDelete }) => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(el?.name || "");
    const [description, setDescription] = useState(el?.description || "");
    const [price, setPrice] = useState(el?.price || "");
    const [stock, setStock] = useState(el?.stock || "");
    const [categorie, setCategorie] = useState(el?.categorie || "");

    const remove = async () => {
        try {
            await axios.delete(`http://localhost:5000/api/product/delete/${el.productid}`);
            onDelete(el.productid);
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };

    const updateProduct = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/product/up/${el.productid}`, {
                name,
                description,
                price: parseFloat(price),
                stock: parseInt(stock, 10),
                categorie
            });
            onUpdate(response.data.updatedProduct);
            setShow(false);
        } catch (err) {
            console.error('Error updating product:', err);
        }
    };

    return (
        <div className="mt-4">
            <div className="flex justify-end space-x-2">
                <button 
                    onClick={() => setShow(!show)} 
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                >
                    {show ? <FaTimes /> : <FaEdit />}
                </button>
                <button 
                    onClick={remove} 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    <FaTrash />
                </button>
            </div>
            {show && 
            <div className="mt-4 space-y-2">
                <input 
                    className="w-full p-2 border rounded"
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    className="w-full p-2 border rounded"
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    className="w-full p-2 border rounded"
                    placeholder="Price" 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input 
                    className="w-full p-2 border rounded"
                    placeholder="Stock" 
                    type="number" 
                    value={stock} 
                    onChange={(e) => setStock(e.target.value)} 
                />
                <input 
                    className="w-full p-2 border rounded"
                    placeholder="Category" 
                    value={categorie} 
                    onChange={(e) => setCategorie(e.target.value)} 
                />
                <button 
                    onClick={updateProduct}
                    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                >
                    <FaSave /> Save
                </button>
            </div>}
        </div>
    );
};

export default OneProduct;