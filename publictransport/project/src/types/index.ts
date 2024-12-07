export interface User {
  username: string;
  isAuthenticated: boolean;
}

export interface TransportOption {
  id: string;
  type: 'air' | 'rail' | 'road';
  name: string;
  description: string;
  imageUrl: string;
  price: {
    luxury: number;
    normal: number;
  };
  available: boolean;
}

export interface AuthStore {
  user: User | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}