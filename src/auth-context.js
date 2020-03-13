import React from "react";

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [userSingIn, setUserSingIn] = React.useState(
    !!localStorage.getItem("token")
  );

  const authenticate = () => {
    setUserSingIn(true);
  };

  return (
    <AuthContext.Provider value={{ userSingIn, authenticate }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw Error("Out of context");
  }
  return context;
};
