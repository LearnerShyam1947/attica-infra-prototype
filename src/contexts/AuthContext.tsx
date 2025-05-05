import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export type UserRole = 'admin' | 'builder' | 'customer';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, password: string) => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for existing auth token
    const token = Cookies.get('authToken');
    if (token) {
      // In a real app, validate token with backend
      const savedUser = Cookies.get('user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
        setIsAuthenticated(true);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock API call - replace with real API
      const mockUser: User = {
        id: '1',
        email,
        name: 'Admin User',
        role: 'customer'
      };

      // Set auth token
      Cookies.set('authToken', 'mock-token', { expires: 7 });
      Cookies.set('user', JSON.stringify(mockUser), { expires: 7 });

      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (email: string, password: string, name: string, role: UserRole) => {
    try {
      // Mock API call - replace with real API
      const mockUser: User = {
        id: '1',
        email,
        name,
        role
      };

      Cookies.set('authToken', 'mock-token', { expires: 7 });
      Cookies.set('user', JSON.stringify(mockUser), { expires: 7 });

      setUser(mockUser);
      setIsAuthenticated(true);
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    Cookies.remove('authToken');
    Cookies.remove('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  const forgotPassword = async (email: string) => {
    try {
      // Mock API call - replace with real API
      console.log('Password reset email sent to:', email);
    } catch (error) {
      throw new Error('Failed to send reset email');
    }
  };

  const resetPassword = async (token: string, password: string) => {
    try {
      // Mock API call - replace with real API
      console.log('Password reset successful');
    } catch (error) {
      throw new Error('Failed to reset password');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        forgotPassword,
        resetPassword,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};