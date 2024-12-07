import React from 'react';
import { BookingForm } from '../components/booking/BookingForm';

export const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Book Your Journey</h1>
        <BookingForm />
      </div>
    </div>
  );
};