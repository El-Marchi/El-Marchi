import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiUsers, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';
import {jwtDecode} from 'jwt-decode';


export const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {  
    }

    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/getAllUsers');
      
      setUsers(response.data.filter(user => user.role !== 'admin'));
      
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  console.log(users)

  const handleEditUser = (userId) => {
    navigate(`/Update`,{state:{userId}});
  };

  const handleDeleteUser = async (id, currentStatus) => {
    const newStatus = currentStatus === 'inactive' ? 'active' : 'inactive';
    const action = newStatus === 'active' ? 'unblock' : 'block';
    
    if (window.confirm(`Are you sure you want to ${action} this user?`)) {
      try {
        await axios.put(`http://localhost:5000/api/user/update/${id}`, {
          status: newStatus   
        });
        fetchUsers();
      } catch (error) {
        console.error(`Error ${action}ing user:`, error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };



  return (
    <div className="flex flex-col min-h-screen">
      
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
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.userid}>
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
              <p className="text-gray-900 whitespace-no-wrap">{user.role}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <button onClick={() => onEdit(user.userid)} className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
              <button 
                onClick={() => onDelete(user.userid, user.status)} 
                className={`text-${user.status === 'inactive' ? 'green' : 'red'}-600 hover:text-${user.status === 'inactive' ? 'green' : 'red'}-900`}
              >
                {user.status === 'inactive' ? 'Unblock' : 'Block'}
              </button>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{user.status}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DashboardAdmin;