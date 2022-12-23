import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [useInfo, setUseInfo] = useState({});
  const value = { useInfo, setUseInfo };
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("useAuth must");
}

export { AuthProvider, useAuth };
