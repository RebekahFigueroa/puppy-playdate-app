import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Typography } from "@mui/material";
import { useDogsContext } from "../contexts/DogContext";

const DogCard = ({ dog }) => {
  const { setDogs } = useDogsContext();

  const handleDeleteClick = async () => {
    await fetch(`/dogs/${dog.id}`, {
      method: "DELETE",
    });

    setDogs((dogs) => dogs.filter((d) => d.id !== dog.id));
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "1rem",
        padding: "1rem 1.5rem",
        position: "relative",
        minWidth: "15rem",
      }}
    >
      <IconButton
        sx={{ position: "absolute", right: "4px", bottom: "4px" }}
        size="small"
        onClick={handleDeleteClick}
      >
        <DeleteIcon />
      </IconButton>
      <Box
        component="img"
        sx={{ minHeight: "12rem", width: "250px", borderRadius: "1rem" }}
        src={dog.image}
        alt={dog.name}
      />
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {dog.name}
      </Typography>
      <Typography>{dog.gender}</Typography>
      <Typography>
        {dog.age} {dog.age === 1 ? "year" : "years"} old
      </Typography>
      <Typography>Size: {dog.size}</Typography>
    </Box>
  );
};

export default DogCard;
