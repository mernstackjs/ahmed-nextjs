// contexts/UserContext.js
"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      const response = await api.get("/current-user"); // Adjust the API endpoint
      console.log(response);
      setUser(response.data.user);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const contextValue = {
    user,
    loading,
    error,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
