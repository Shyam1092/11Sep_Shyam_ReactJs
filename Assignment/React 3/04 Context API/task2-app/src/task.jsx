import React, { createContext, useState, useContext } from "react";

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => setUser(username);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// App Component
const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

// Home Component
const Home = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user}!</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please log in</h2>
          <button onClick={() => login("User123")}>Login</button>
        </>
      )}
    </div>
  );
};

export default App;
