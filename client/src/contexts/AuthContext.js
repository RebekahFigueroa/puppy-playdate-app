import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuthed: undefined,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(undefined);

  useEffect(() => {
    const auth = async () => {
      const response = await fetch("/auth");
      const owner = await response.json();

      setIsAuthed(owner?.id);
    };

    auth();
  }, []);

  const login = async (email, password) => {
    const response = await fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const owner = await response.json();
    setIsAuthed(owner?.id);
  };

  const create_owner = async (first_name, last_name, password, email) => {
    const response = await fetch("/owner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ first_name, last_name, password, email }),
    });

    const owner = await response.json();
    setIsAuthed(owner?.id);
  };

  const logout = async () => {
    await fetch("/logout", {
      method: "DELETE",
    });

    setIsAuthed(undefined);
  };

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout, create_owner }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
