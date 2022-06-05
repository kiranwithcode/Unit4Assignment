import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthorized, setIsAthorized] = useState(false);

  const login = (username, password) => {
    if (username && password) {
      setIsAthorized(true);
    }
  };

  const logout = () => {
    setIsAthorized(false);
  };
  return (
    <AuthContext.Provider value={{ isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
