import React from 'react';
import { Bus, Train, Plane } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Public Transport</h1>
          <p className="text-xl text-gray-600">Connecting communities with safe, reliable, and comfortable transportation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Bus className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Road Transport</h2>
            </div>
            <p className="text-gray-600">Our extensive bus network covers both urban and rural areas, offering regular and luxury services for comfortable travel.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Train className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Rail Transport</h2>
            </div>
            <p className="text-gray-600">Modern railway services connecting major cities with high-speed trains and comfortable accommodations.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-semibold">Air Transport</h2>
            </div>
            <p className="text-gray-600">Domestic flights offering quick and convenient travel between major cities across the country.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            To provide accessible, sustainable, and efficient transportation solutions that enhance the quality of life for all citizens. We are committed to:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
            <li>Ensuring passenger safety and comfort</li>
            <li>Reducing environmental impact through eco-friendly practices</li>
            <li>Maintaining punctuality and reliability</li>
            <li>Offering affordable transportation options</li>
            <li>Continuous improvement of our services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};