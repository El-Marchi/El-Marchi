import React from 'react';
import { useNavigate } from 'react-router-dom';

export const DashboardAdmin = () => {
  const navigate = useNavigate();

  const handleEditUser = (userId) => {
    navigate(`/UpdateUser/${userId}`);
  };

  const handleDeleteUser = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
    // Implement delete logic here
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">User Management</h1>
        <UserTable onEdit={handleEditUser} onDelete={handleDeleteUser} />
      </main>
    </div>
  );
};

const Sidebar = () => (
  <aside className="w-64 bg-white shadow-md">
    <div className="p-4">
      <h2 className="text-xl font-bold">Admin Dashboard</h2>
    </div>
    <nav className="mt-6">
      <SidebarLink icon="👥" text="Users" active />
      <SidebarLink icon="📊" text="Analytics" />
      <SidebarLink icon="⚙️" text="Settings" />
    </nav>
  </aside>
);

const SidebarLink = ({ icon, text, active }) => (
  <a href="#" className={`flex items-center px-6 py-3 ${active ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
    <span className="mr-3">{icon}</span>
    <span>{text}</span>
  </a>
);

const UserTable = ({ onEdit, onDelete }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <table className="min-w-full">
      <thead>
        <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
          <th className="py-3 px-6 text-left">User</th>
          <th className="py-3 px-6 text-left">Role</th>
          <th className="py-3 px-6 text-left">Last Visit</th>
          <th className="py-3 px-6 text-left">Product</th>
          <th className="py-3 px-6 text-left">Actions</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm">
        <UserRow
          id="1"
          name="John Doe"
          email="john@example.com"
          avatar="https://randomuser.me/api/portraits/men/1.jpg"
          role="Visitor"
          lastVisit="2023-04-15"
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <UserRow
          id="2"
          name="Jane Smith"
          email="jane@example.com"
          avatar="https://randomuser.me/api/portraits/women/1.jpg"
          role="Seller"
          lastVisit="2023-04-14"
          product="https://example.com/handmade-pottery.jpg"
          onEdit={onEdit}
          onDelete={onDelete}
        />
        <UserRow
          id="3"
          name="Bob Johnson"
          email="bob@example.com"
          avatar="https://randomuser.me/api/portraits/men/2.jpg"
          role="Visitor"
          lastVisit="2023-04-13"
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </tbody>
    </table>
  </div>
);

const UserRow = ({ id, name, email, avatar, role, lastVisit, product, onEdit, onDelete }) => (
  <tr className="border-b hover:bg-gray-50">
    <td className="py-4 px-6">
      <div className="flex items-center">
        <div className="w-10 h-10 flex-shrink-0 mr-3">
          <img className="w-full h-full rounded-full" src={avatar} alt={name} />
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-gray-500">{email}</p>
        </div>
      </div>
    </td>
    <td className="py-4 px-6">
      <span className={`px-2 py-1 rounded-full text-xs ${role === 'Seller' ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'}`}>
        {role}
      </span>
    </td>
    <td className="py-4 px-6">{lastVisit}</td>
    <td className="py-4 px-6">
      {product && <img src={product} alt="Product" className="w-10 h-10 object-cover" />}
    </td>
    <td className="py-4 px-6">
      <button onClick={() => onEdit(id)} className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
      <button onClick={() => onDelete(id)} className="text-red-600 hover:text-red-900">Delete</button>
    </td>
  </tr>
);

export default DashboardAdmin;