import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';
import { transportOptions } from '../../data/transportOptions';
import { TransportOption } from '../../types';

type ClassType = 'luxury' | 'normal';

export const BookingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);
  const [classType, setClassType] = useState<ClassType>('normal');
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    pickupTime: '',
    passengers: '1',
  });

  useEffect(() => {
    const transportId = location.state?.transportId;
    if (transportId) {
      const transport = transportOptions.find(t => t.id === transportId);
      if (transport) {
        setSelectedTransport(transport);
      }
    }
  }, [location.state]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    console.log('Booking submitted:', {
      ...formData,
      transport: selectedTransport?.name,
      classType,
      price: selectedTransport?.price[classType]
    });
    
    // Show success message and redirect
    alert('Booking successful! You will receive a confirmation email shortly.');
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Book Your Journey</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Transport Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Transport Type</label>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedTransport?.id || ''}
            onChange={(e) => {
              const transport = transportOptions.find(t => t.id === e.target.value);
              setSelectedTransport(transport || null);
            }}
            required
          >
            <option value="">Select Transport</option>
            {transportOptions.map(transport => (
              <option key={transport.id} value={transport.id}>
                {transport.name} ({transport.type})
              </option>
            ))}
          </select>
        </div>

        {/* Class Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Travel Class</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setClassType('normal')}
              className={`p-4 border rounded-md text-center ${
                classType === 'normal' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="font-semibold">Normal Class</div>
              <div className="text-sm text-gray-600">
                {selectedTransport ? `KES ${selectedTransport.price.normal.toLocaleString()}` : '-'}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setClassType('luxury')}
              className={`p-4 border rounded-md text-center ${
                classType === 'luxury' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}
            >
              <div className="font-semibold">Luxury Class</div>
              <div className="text-sm text-gray-600">
                {selectedTransport ? `KES ${selectedTransport.price.luxury.toLocaleString()}` : '-'}
              </div>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Pick-up Location
              </div>
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="City, Airport, Station"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Drop-off Location
              </div>
            </label>
            <input
              type="text"
              name="dropoffLocation"
              value={formData.dropoffLocation}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="City, Airport, Station"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Date
              </div>
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Time
              </div>
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <div className="flex items-center">
                <CreditCard className="w-4 h-4 mr-2" />
                Passengers
              </div>
            </label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              min="1"
              max="10"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total Price:</span>
            <span className="text-2xl font-bold text-blue-600">
              KES {selectedTransport 
                ? (selectedTransport.price[classType] * parseInt(formData.passengers)).toLocaleString()
                : '0'}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};