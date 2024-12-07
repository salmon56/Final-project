import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">Providing reliable and comfortable transportation services across the nation.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">📞 +254 716 206 134</p>
            <p className="text-gray-300">📧 public23@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="https://facebook.com" className="block text-gray-300 hover:text-white">Facebook</a>
              <a href="https://x.com/home" className="block text-gray-300 hover:text-white">Twitter</a>
              <a href="https://instagram.com" className="block text-gray-300 hover:text-white">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-300">Hospital Road, P.O Box 721, Murang'a</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; 2024 Public Transport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};