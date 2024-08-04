import React, { useState, useEffect } from 'react';
import { FiUsers, FiBarChart2, FiSettings, FiLogOut } from 'react-icons/fi';
import Footer from './Footer'; // Import the Footer component
import Navbar from './Navbar';

export const DashboardAdmin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    // TODO: Implement API call to get users
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", role: "Visitor", lastVisit: "2023-04-15", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Seller", lastVisit: "2023-04-14", avatar: "https://randomuser.me/api/portraits/women/2.jpg", product: { name: "Handmade Pottery", image: "https://example.com/pottery.jpg" } },
      { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Visitor", lastVisit: "2023-04-13", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    ]);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  const handleUpdateUser = (id, updatedUser) => {
    setUsers(users.map(u => u.id === id ? { ...u, ...updatedUser } : u));
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 overflow-auto bg-gray-100">
          <h1 className="text-3xl font-semibold mb-6">User Management</h1>
          <UserTable 
            users={users} 
            onEdit={handleEditUser} 
            onDelete={handleDeleteUser} 
          />
        </main>
      </div>
      <Footer /> {/* Add the Footer component here */}
      {selectedUser && (
        <UpdateUserModal
          user={selectedUser}
          onUpdate={handleUpdateUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Users');

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
      </div>
      <nav className="mt-6">
        <ul>
          <SidebarLink 
            icon={<FiUsers />} 
            text="Users" 
            active={activeLink === 'Users'} 
            onClick={() => setActiveLink('Users')}
          />
          <SidebarLink 
            icon={<FiBarChart2 />} 
            text="Analytics" 
            active={activeLink === 'Analytics'} 
            onClick={() => setActiveLink('Analytics')}
          />
          <SidebarLink 
            icon={<FiSettings />} 
            text="Settings" 
            active={activeLink === 'Settings'} 
            onClick={() => setActiveLink('Settings')}
          />
        </ul>
      </nav>
      <div className="absolute bottom-0 w-64 mb-6">
        <SidebarLink 
          icon={<FiLogOut />} 
          text="Logout" 
          onClick={() => console.log('Logout clicked')}
        />
      </div>
    </aside>
  );
};

const SidebarLink = ({ icon, text, active, onClick }) => (
  <li 
    className={`relative px-6 py-3 cursor-pointer transition-all duration-300 ease-in-out
                ${active ? "bg-blue-50" : "hover:bg-gray-50"}`}
    onClick={onClick}
  >
    <div className={`absolute inset-y-0 left-0 w-1 bg-blue-600 rounded-tr-lg rounded-br-lg 
                    transition-all duration-300 ease-in-out
                    ${active ? "opacity-100" : "opacity-0"}`} 
    />
    <a className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-blue-600">
      <span className={`absolute left-0 inset-y-0 flex items-center pl-4 
                      transition-all duration-300 ease-in-out
                      ${active ? "text-blue-600" : "text-gray-500"}`}>
        {icon}
      </span>
      <span className={`ml-10 transition-all duration-300 ease-in-out ${active ? "text-blue-600" : "text-gray-700"}`}>
        {text}
      </span>
    </a>
  </li>
);

const UserTable = ({ users, onEdit, onDelete }) => (
  <div className="overflow-x-auto bg-white shadow-md rounded-lg">
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">User</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Role</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Last Visit</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10">
                  <img className="w-full h-full rounded-full" src={user.avatar} alt={user.name} />
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                  <p className="text-gray-600 whitespace-no-wrap">{user.email}</p>
                </div>
              </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <span className={`relative inline-block px-3 py-1 font-semibold ${user.role === 'Seller' ? 'text-green-900' : 'text-orange-900'} leading-tight`}>
                <span aria-hidden className={`absolute inset-0 ${user.role === 'Seller' ? 'bg-green-200' : 'bg-orange-200'} opacity-50 rounded-full`}></span>
                <span className="relative">{user.role}</span>
              </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p className="text-gray-900 whitespace-no-wrap">{user.lastVisit}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {user.product && (
                <div className="flex items-center">
                  <img className="w-10 h-10 object-cover rounded" src={user.product.image} alt={user.product.name} />
                  <span className="ml-2 text-gray-900 whitespace-no-wrap">{user.product.name}</span>
                </div>
              )}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <button onClick={() => onEdit(user)} className="text-blue-600 hover:text-blue-900 mr-2">Edit</button>
              <button onClick={() => onDelete(user.id)} className="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const UpdateUserModal = ({ user, onUpdate, onClose }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(user.id, { name, email, role });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-2xl font-bold mb-4">Update User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="Visitor">Visitor</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Save Changes
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardAdmin;