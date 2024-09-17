import React, { createContext, useState } from 'react';

interface SessionContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
    signup: () => void;
}

// Create a context for authentication
export const SessionContext = createContext<SessionContextType | undefined>(undefined);


// Define the SessionProvider component's props
interface SessionProviderProps {
    children: React.ReactNode;
  }


// Create a provider component
export const SessionProvider:React.FC<SessionProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

   // Mocked login/logout for simplicity
   const login = () => setIsAuthenticated(true);
   const logout = () => setIsAuthenticated(false);
   const signup = () => setIsAuthenticated(true);

  return (
    <SessionContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </SessionContext.Provider>
  );
};
