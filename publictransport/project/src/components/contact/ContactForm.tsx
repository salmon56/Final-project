import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Hospital Road, P.O Box 721, Murang'a</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+254 716 206 134</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">public23@gmail.com</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-2 border rounded-md"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};