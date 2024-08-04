import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiUsers, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';
import Footer from './Footer';
import Navbar from './Navbar';

export const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchUsers(token);
  }, [navigate]);

  const fetchUsers = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/all', {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Filter to only include admin users
      setUsers(response.data.filter(user => user.role === 'admin'));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleEditUser = (userId) => {
    navigate(`/update-user/${userId}`);
  };

  const handleDeleteUser = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:5000/api/user/${id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUsers(users.filter(u => u._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!currentAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1 p-8 overflow-auto bg-gray-100">
          <h1 className="text-3xl font-semibold mb-6">User Management</h1>
          <UserTable 
            users={users} 
            onEdit={handleEditUser} 
            onDelete={handleDeleteUser} 
          />
        </main>
      </div>
      <Footer />
    </div>
  );
};

const Sidebar = ({ onLogout }) => (
  <aside className="w-64 bg-white shadow-md">
    <div className="flex items-center justify-center h-20 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
    </div>
    <nav className="mt-6">
      <ul>
        <SidebarLink icon={<FiUsers />} text="Users" active />
        <SidebarLink icon={<FiBarChart2 />} text="Analytics" />
        <SidebarLink icon={<FiSettings />} text="Settings" />
      </ul>
    </nav>
    <div className="absolute bottom-0 w-64 mb-6">
      <SidebarLink icon={<FiLogOut />} text="Logout" onClick={onLogout} />
    </div>
  </aside>
);

const SidebarLink = ({ icon, text, active, onClick }) => (
  <li className={`relative px-6 py-3 ${active ? 'bg-blue-50' : ''}`} onClick={onClick}>
    {active && <div className="absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg" />}
    <a href="#" className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-blue-600">
      <span className={`absolute left-0 inset-y-0 flex items-center pl-4 ${active ? 'text-blue-600' : 'text-gray-500'}`}>
        {icon}
      </span>
      <span className={`ml-10 ${active ? 'text-blue-600' : 'text-gray-700'}`}>{text}</span>
    </a>
  </li>
);

const UserTable = ({ users, onEdit, onDelete }) => (
  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Email</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user._id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img className="w-full h-full rounded-full" src={user.avatar || 'https://via.placeholder.com/40'} alt={user.name} />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <button onClick={() => onEdit(user._id)} className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
              <button onClick={() => onDelete(user._id)} className="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DashboardAdmin;