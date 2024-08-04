import React, { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt } from 'react-icons/fa';

const AddProductModal = ({ isOpen, onClose, onSubmit }) => {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categorie: '',
    userid: '1'
  });
  const [url, setUrl] = useState('');
  const [showImageUpload, setShowImageUpload] = useState(false);
  
  console.log(url,'test');
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadSingleImage = async (base64) => {
    try {
      const res = await axios.post('http://localhost:5000/uploadImage', { image: base64 });
      console.log(res.data,'test2');
      setUrl(res.data); 
      if (res.data) {
        await axios.post(`http://localhost:5000/api/product/images/${productId}`, { imageurl: JSON.stringify(res.data) });
      } else {
        console.error('No URL received from image upload');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const uploadMultipleImages = async (images) => {
    try {
      const res = await axios.post('http://localhost:5000/uploadMultipleImages', { images });
      setUrl(res.data);
      if (res.data) {
        await axios.post(`http://localhost:5000/api/product/images/${productId}`, { imageurl: JSON.stringify(res.data) });
      } else {
        console.error('No URL received from image upload');
      }
      console.log('Images uploaded successfully:', res.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);
      uploadSingleImage(base64);
      return;
    }

    const base64s = [];
    for (let i = 0; i < files.length; i++) {
      const base = await convertBase64(files[i]);
      base64s.push(base);
    }
    uploadMultipleImages(base64s);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!product.name || !product.price || !product.stock) {
      alert('Please fill in all required fields (name, price, stock)');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/product/add', product);
      const newProductId = response.data.product.productid;
      setProductId(newProductId);
      console.log('Product added successfully:', newProductId);
      setShowImageUpload(true);
      if (onSubmit) {
        onSubmit(response.data.product);
      }
      // Don't close the modal here, allow image upload first
    } catch (error) {
      console.error('Error adding product:', error.response ? error.response.data : error.message);
      alert('Failed to add product. Please check the console for more details.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-4xl shadow-lg rounded-md bg-white">
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add New Product</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="category">
                    Category
                  </label>
                  <select
                    id="category"
                    name="categorie"
                    value={product.categorie}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  >
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                  </select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="price">
                    Price
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={product.price}
                      onChange={handleInputChange}
                      className="w-full pl-3 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="stock">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={product.stock}
                    onChange={handleInputChange}
                    className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                    placeholder="Enter stock quantity"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-2 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                placeholder="Enter product description"
              ></textarea>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
              >
                Add Product
              </button>
            </div>
          </form>

          {showImageUpload && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Upload Product Images</h2>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <FaCloudUploadAlt className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500"
                    >
                      <span>Upload a file</span>
                      <input 
                        id="file-upload" 
                        name="file-upload" 
                        type="file" 
                        className="sr-only" 
                        onChange={uploadImage} 
                        disabled={!productId}
                        multiple
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
              {url && <img src={url} alt="Product" className="mt-6 max-w-xs mx-auto rounded-lg shadow-md" />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;