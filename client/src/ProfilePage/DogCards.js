import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDogsContext } from "../contexts/DogContext";
import DogCard from "./DogCard";

const DogCards = () => {
  const { dogs, setDogs } = useDogsContext();

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await fetch("/dogs");
      const data = await response.json();
      setDogs(data);
    };

    fetchDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </Box>
  );
};

export default DogCards;
