import { createContext, useContext, useState } from "react";

const DogsContext = createContext({
  dogs: [],
  setDogs: () => {},
});

export const DogsContextProvider = ({ children }) => {
  const [dogs, setDogs] = useState([]);

  return (
    <DogsContext.Provider value={{ dogs, setDogs }}>
      {children}
    </DogsContext.Provider>
  );
};

export const useDogsContext = () => useContext(DogsContext);
