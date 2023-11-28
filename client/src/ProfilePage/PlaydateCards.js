import { Box } from "@mui/material";
import { useEffect } from "react";
import { usePlaydatesContext } from "../contexts/PlaydateContext";
import PlaydateCard from "./PlaydateCard";

const PlaydateCards = () => {
  const { playdates, setPlaydates } = usePlaydatesContext();

  useEffect(() => {
    const fetchPlaydates = async () => {
      const response = await fetch("/playdates");
      const data = await response.json();
      setPlaydates(data);
    };

    fetchPlaydates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
      {playdates.map((playdate) => (
        <PlaydateCard key={playdate.id} playdate={playdate} />
      ))}
    </Box>
  );
};

export default PlaydateCards;
