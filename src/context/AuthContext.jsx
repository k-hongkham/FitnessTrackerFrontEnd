import React, { useState, useEffect } from "react";
import { fetchUserProfile } from "../api";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("token")) {
        const user = await fetchUserProfile(token);
        setUser(user);
      } else {
        setUser({});
      }
    };
    getUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
