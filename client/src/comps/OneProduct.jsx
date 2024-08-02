import React, { useState } from 'react';
import axios from 'axios';

const OneProduct = ({ el}) => {
    const [show, setShow] = useState(true);
    const [name, setName] = useState(el?.name || "");
    const [description, setDescription] = useState(el?.description || "");
    const [price, setPrice] = useState(el?.price || "");
    const [stock, setStock] = useState(el?.stock || "");
    const [categorie, setCategorie] = useState(el?.categorie || "");

    const remove = async (productid) => {
        try {
            await axios.delete(`http://localhost:5000/api/product/delete/${productid}`);
          
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };

    const updateProduct = async (productid) => {
        try {
            await axios.put(`http://localhost:5000/api/product/up/${productid}`, {
                name: name,
                description: description,
                price: parseFloat(price),
                stock: parseInt(stock, 10),
                categorie: categorie
            });
          
            setShow(true);  
        } catch (err) {
            console.error('Error updating product:', err);
        }
    };

   
    return (
        <div>
            <button onClick={() => remove(el.id)}>Delete</button>
            <button onClick={() => setShow(!show)}>Update</button>
            {!show && 
            <div>
                <input 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    placeholder="Price" 
                    type="number" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                />
                <input 
                    placeholder="Stock" 
                    type="number" 
                    value={stock} 
                    onChange={(e) => setStock(e.target.value)} 
                />
                <input 
                    placeholder="Category" 
                    value={categorie} 
                    onChange={(e) => setCategorie(e.target.value)} 
                />
                <button onClick={() => updateProduct(el.id)}>Submit</button>
            </div>}
        </div>
    );
};

export default OneProduct;
