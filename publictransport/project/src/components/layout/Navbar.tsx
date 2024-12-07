import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Navbar = () => {
  const { user, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">PublicTransport</h1>
            <div className="ml-10 space-x-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/booking" className="text-gray-700 hover:text-blue-600">Book</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user?.username}</span>
            <button
              onClick={logout}
              className="flex items-center text-gray-700 hover:text-red-600"
            >
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};