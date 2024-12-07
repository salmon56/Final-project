import { create } from 'zustand';
import { AuthStore, User } from '../types'; // Ensure `User` type includes fields like username, token, etc.
import axios from 'axios'; // Using axios for API requests

const API_URL = 'https://your-backend-api.com/auth'; // Replace with your backend API URL

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,

  login: async (username: string, password: string) => {
    try {
      // Send login request to the backend
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      // If login is successful, update the user state
      const userData: User = response.data; // Assuming the backend returns user data
      set({ user: { ...userData, isAuthenticated: true } });

      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  },

  logout: () => {
    set({ user: null });
    // Optionally, notify the backend about the logout
  },
}));
