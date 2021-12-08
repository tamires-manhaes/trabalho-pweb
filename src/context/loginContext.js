import React, { createContext, useContext } from 'react';

const LoginContext = createContext(null);

export const LoginProvider = ({ children }) => {
  const login = () => {
    return alert('login com sucesso!');
  };

  const logout = () => {
    return alert('login com sucesso!');
  };

  return (
    <LoginContext.Provider value={{ login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }

  return context;
};
