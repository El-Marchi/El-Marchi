// components/AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';

const AddProd = ({ onProductAdded }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    categorie: '',
    userid: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/product/add', newProduct);
      if (onProductAdded) {
        onProductAdded(response.data.product);
      }
      setNewProduct({
        name: '',
        description: '',
        price: '',
        stock: '',
        categorie: '',
        userid: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="Account w-96 h-96 relative bg-white">
      <div className="Roadmap left-[135px] top-[222px] absolute justify-start items-center gap-3 inline-flex">
        <div className="Account opacity-50 text-black text-sm font-normal font-['Poppins'] leading-tight">Home</div>
        <div className="Line13 w-3.5 h-px origin-top-left rotate-[117.05deg] border border-black/50"></div>
        <div className="Nothing text-black text-sm font-normal font-['Poppins'] leading-tight">My Account</div>
      </div>
      <div className="Welcome left-[1163px] top-[222px] absolute text-black text-sm font-normal font-['Poppins'] leading-tight">Welcome! </div>
      <div className="ManageMyAccount left-[135px] top-[323px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">Manage My Account</div>
      <div className="MyOrders left-[135px] top-[475px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">My Orders</div>
      <div className="MyWishlist w-24 h-6 left-[135px] top-[587px] absolute text-black text-base font-medium font-['Poppins'] leading-normal">My WishList</div>
      <div className="Frame839 left-[170px] top-[363px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="MyProfile text-red-500 text-base font-normal font-['Poppins'] leading-normal">My Profile</div>
        <div className="AddressBook opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">Address Book</div>
        <div className="MyPaymentOptions opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Payment Options</div>
      </div>
      <div className="Frame840 left-[170px] top-[515px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="MyReturns opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Returns</div>
        <div className="MyCancellations opacity-50 text-black text-base font-normal font-['Poppins'] leading-normal">My Cancellations</div>
      </div>
      <div className="Frame838 w-96 h-96 left-[380px] top-[100px] absolute bg-white rounded shadow" style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}}>
        <div className="EditYourProfile left-[80px] top-[40px] absolute text-red-500 text-xl font-medium font-['Poppins'] leading-7">Add New Product</div>
        <div className="Frame848 left-[80px] top-[84px] absolute justify-start items-start gap-12 inline-flex">
          <div className="Frame841 flex-col justify-start items-start gap-2 inline-flex">
            <div className="FirstName text-black text-base font-normal font-['Poppins'] leading-normal">Name</div>
            <div className="PlaceboxInfo w-80 h-12 relative">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newProduct.name}
                onChange={handleInputChange}
                className="w-80 h-12 left-0 top-0 absolute bg-neutral-100 rounded p-2"
              />
            </div>
          </div>
          <div className="Frame842 flex-col justify-start items-start gap-2 inline-flex">
            <div className="LastName text-black text-base font-normal font-['Poppins'] leading-normal">Description</div>
            <div className="PlaceboxInfo w-80 h-12 relative">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newProduct.description}
                onChange={handleInputChange}
                className="w-80 h-12 left-0 top-0 absolute bg-neutral-100 rounded p-2"
              />
            </div>
          </div>
        </div>
        <div className="Frame849 left-[80px] top-[190px] absolute justify-start items-start gap-12 inline-flex">
          <div className="Frame843 flex-col justify-start items-start gap-2 inline-flex">
            <div className="Email text-black text-base font-normal font-['Poppins'] leading-normal">Price</div>
            <div className="PlaceboxInfo w-80 h-12 relative">
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newProduct.price}
                onChange={handleInputChange}
                className="w-80 h-12 left-0 top-0 absolute bg-neutral-100 rounded p-2"
              />
            </div>
          </div>
          <div className="Frame844 flex-col justify-start items-start gap-2 inline-flex">
            <div className="Address text-black text-base font-normal font-['Poppins'] leading-normal">Stock</div>
            <div className="PlaceboxInfo w-80 h-12 relative">
              <input
                type="text"
                name="stock"
                placeholder="Stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                className="w-80 h-12 left-0 top-0 absolute bg-neutral-100 rounded p-2"
              />
            </div>
          </div>
        </div>
        <div className="Frame846 left-[80px] top-[296px] absolute flex-col justify-start items-start gap-4 inline-flex">
          <div className="Frame845 flex-col justify-start items-start gap-2 flex">
            <div className="PasswordChanges text-black text-base font-normal font-['Poppins'] leading-normal">Category</div>
            <div className="PlaceboxInfo w-96 h-12 relative">
              <input
                type="text"
                name="categorie"
                placeholder="Category"
                value={newProduct.categorie}
                onChange={handleInputChange}
                className="w-96 h-12 left-0 top-0 absolute bg-neutral-100 rounded p-2"
              />
            </div>
          </div>
          <div className="PlaceboxInfo w-96 h-12 relative">
            <div className="PasswordChanges text-black text-base font-normal font-['Poppins'] leading-normal">User ID</div>
            <div className="PlaceboxInfo w-96 h-12 relative">
              <input
                type="text"
                name="userid"
                placeholder="User ID"
                value={newProduct.userid}
                onChange={handleInputChange}
                className="w-96 h-12 left-0 top-0 absolute bg-neutral-100 rounded p-2"
              />
            </div>
          </div>
        </div>
        <div className="Frame847 left-[487px] top-[534px] absolute justify-start items-center gap-8 inline-flex">
          <div className="Cancel text-black text-base font-normal font-['Poppins'] leading-normal">Cancel</div>
          <div className="Button px-12 py-4 bg-red-500 rounded justify-center items-center gap-2.5 flex">
            <button onClick={handleAddProduct} className="text-neutral-50 text-base font-medium font-['Poppins'] leading-normal">Add Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProd;