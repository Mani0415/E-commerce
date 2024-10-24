import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Initialize state from sessionStorage
    const storedToken = sessionStorage.getItem("activationToken"); // Use the same key
    const storedUser = sessionStorage.getItem("user");

    if (storedToken && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser)); // Parse user data from JSON
      setToken(storedToken);
    }
  }, []);

  const login = (userData, token) => {
    setIsLoggedIn(true);
    setUser(userData);
    setToken(token);
    console.log("Token at login:", token); // Log token directly
    sessionStorage.setItem("activationToken", token); // Consistent key
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("activationToken");
    sessionStorage.removeItem("user");
  };

  // Add a useEffect to log the token once it is updated
  useEffect(() => {
    if (token) {
      console.log("Token updated:", token);
    }
  }, [token]); // Watch for changes to token

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
