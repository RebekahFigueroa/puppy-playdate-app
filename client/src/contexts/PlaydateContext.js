import { createContext, useContext, useState } from "react";

const PlaydatesContext = createContext({
  playdates: [],
  setPlaydates: () => {},
});

export const PlaydateContextProvider = ({ children }) => {
  const [playdates, setPlaydates] = useState([]);

  return (
    <PlaydatesContext.Provider value={{ playdates, setPlaydates }}>
      {children}
    </PlaydatesContext.Provider>
  );
};

export const usePlaydatesContext = () => useContext(PlaydatesContext);
