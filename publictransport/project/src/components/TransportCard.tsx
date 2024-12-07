import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TransportOption } from '../types';
import { Bus, Train, Plane } from 'lucide-react';

interface Props {
  transport: TransportOption;
}

export const TransportCard: React.FC<Props> = ({ transport }) => {
  const navigate = useNavigate();

  const getIcon = () => {
    switch (transport.type) {
      case 'air':
        return <Plane className="w-6 h-6" />;
      case 'rail':
        return <Train className="w-6 h-6" />;
      case 'road':
        return <Bus className="w-6 h-6" />;
    }
  };

  const handleBookNow = () => {
    navigate('/booking', { state: { transportId: transport.id } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={transport.imageUrl} 
          alt={transport.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          {getIcon()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{transport.name}</h3>
        <p className="text-gray-600 mb-4">{transport.description}</p>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">Luxury Class:</span>
            <span className="text-green-600 font-semibold">KES {transport.price.luxury.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Normal Class:</span>
            <span className="text-blue-600 font-semibold">KES {transport.price.normal.toLocaleString()}</span>
          </div>
        </div>
        <button 
          onClick={handleBookNow}
          className={`mt-4 w-full py-2 px-4 rounded-md transition-colors flex items-center justify-center space-x-2
            ${transport.available 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-gray-300 cursor-not-allowed text-gray-600'}`}
          disabled={!transport.available}
        >
          {getIcon()}
          <span>{transport.available ? 'Book Now' : 'Not Available'}</span>
        </button>
      </div>
    </div>
  );
};