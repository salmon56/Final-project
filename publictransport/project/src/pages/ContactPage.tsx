import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center py-8">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
};