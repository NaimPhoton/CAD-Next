import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the authentication context
interface AuthContextType {
  user: string | null; // User data (or null if not authenticated)
  login: (username: string) => void; // Function to log in the user
  logout: () => void; // Function to log out the user
}

// Create the AuthContext with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component for the AuthContext
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null); // State to hold user data

  // Function to log in the user
  const login = (username: string) => {
    setUser(username); // Set user to the provided username
  };

  // Function to log out the user
  const logout = () => {
    setUser(null); // Clear user data
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Render children components */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider'); // Ensure it's used within the provider
  }
  return context;
};
