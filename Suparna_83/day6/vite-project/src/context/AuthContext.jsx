import { createContext, useState } from "react";

// 1️⃣ Create Context
export const AuthContext = createContext();

// 2️⃣ Create Provider Component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
