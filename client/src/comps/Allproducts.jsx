import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/product/getall');
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]); // Ensure products is an array even if the fetch fails
    }
  };

  const handleUpdateProduct = async (id) => {
    try {
      const updatedProduct = { name: 'Updated Name', price: '100' }; // Replace with actual fields to update
      const response = await axios.put(`http://localhost:5000/api/product/update/${id}`, updatedProduct);
      setProducts(products.map(product => product.id === id ? response.data.updatedProduct : product));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/delete/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <div className="w-full p-6">
        <div className="flex justify-between items-end mb-6">
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-4">
              <div className="w-5 h-10 flex items-center">
                <div className="w-5 h-10 bg-red-500 rounded"></div>
              </div>
              <div className="text-red-500 text-base font-semibold font-['Poppins'] leading-tight">Our Products</div>
            </div>
            <div className="text-black text-4xl font-semibold font-['Inter'] leading-10 tracking-wider">Explore Our Products</div>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-11 h-11 relative">
              <div className="w-11 h-11 bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 absolute left-[11px] top-[11px]"></div>
            </div>
            <div className="w-11 h-11 relative">
              <div className="w-11 h-11 bg-neutral-100 rounded-full"></div>
              <div className="w-6 h-6 absolute left-[11px] top-[11px]"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="overflow-y-auto h-[calc(100vh-200px)] w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col items-start gap-4">
                  <div className="w-full h-64 relative bg-neutral-100 rounded">
                    <div className="absolute top-3 right-3 flex flex-col items-start gap-2">
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="w-6 h-6 absolute left-1 top-1"></div>
                      </div>
                      <div className="w-8 h-8 relative">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="w-6 h-6 absolute left-1 top-1"></div>
                      </div>
                    </div>
                    <div className="absolute left-10 top-9 w-48 h-44 flex justify-center items-center">
                      <img className="w-28 h-44" src={product.imageUrl || 'https://via.placeholder.com/115x180'} alt={product.name} />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="text-black text-base font-medium font-['Poppins'] leading-normal">{product.name}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-start gap-3">
                        <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">${product.price}</div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-5 opacity-50 text-black text-sm font-semibold font-['Poppins'] leading-tight">({product.reviewsCount || 0})</div>
                      </div>
                    </div>
                    <button onClick={() => handleUpdateProduct(product.id)} className="px-4 py-2 bg-red-500 text-white rounded">Update</button>
                    <button onClick={() => handleDeleteProduct(product.id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-12 py-4 bg-red-500 rounded flex justify-center items-center gap-2.5">
        <button onClick={fetchProducts} className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">View All Products</button>
      </div>
    </div>
  );
};

export default AllProducts;