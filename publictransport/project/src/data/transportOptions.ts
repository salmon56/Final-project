import { TransportOption } from '../types';

export const transportOptions: TransportOption[] = [
  {
    id: 'air-1',
    type: 'air',
    name: 'Express Airways',
    description: 'Domestic flights connecting major cities with comfort and speed.',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    price: {
      luxury: 15000,
      normal: 8000
    },
    available: true
  },
  {
    id: 'air-2',
    type: 'air',
    name: 'Luxury Air',
    description: 'Premium air travel experience with exclusive services.',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b',
    price: {
      luxury: 25000,
      normal: 12000
    },
    available: true
  },
  {
    id: 'rail-1',
    type: 'rail',
    name: 'Metro Express',
    description: 'Modern railway service with comfortable seating and scenic routes.',
    imageUrl: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3',
    price: {
      luxury: 3000,
      normal: 1000
    },
    available: true
  },
  {
    id: 'rail-2',
    type: 'rail',
    name: 'Royal Rail',
    description: 'Luxury train travel with dining and sleeping accommodations.',
    imageUrl: 'https://images.unsplash.com/photo-1553773077-91673524aafa',
    price: {
      luxury: 5000,
      normal: 2000
    },
    available: true
  },
  {
    id: 'road-1',
    type: 'road',
    name: 'City Bus Service',
    description: 'Regular bus service covering all major city routes.',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e',
    price: {
      luxury: 500,
      normal: 200
    },
    available: true
  },
  {
    id: 'road-2',
    type: 'road',
    name: 'Executive Coach',
    description: 'Luxury coach service with extra legroom and amenities.',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    price: {
      luxury: 1500,
      normal: 800
    },
    available: true
  }
];