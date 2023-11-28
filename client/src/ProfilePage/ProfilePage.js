import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { DogsContextProvider } from "../contexts/DogContext";
import { PlaydateContextProvider } from "../contexts/PlaydateContext";
import CreateDogDialog from "./CreateDogDialog";
import CreatePlaydateDialog from "./CreatePlaydateDialog";
import DogCards from "./DogCards";
import PlaydateCards from "./PlaydateCards";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPlaydate, setIsOpenPlaydate] = useState(false);

  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        My dogs
      </Typography>
      <Button onClick={() => setIsOpen(true)}>Add A Dog</Button>
      <DogsContextProvider>
        <DogCards />
        <CreateDogDialog open={isOpen} onClose={() => setIsOpen(false)} />

        <Typography
          variant="h4"
          sx={{ textAlign: "center", paddingTop: "2rem" }}
        >
          Playdates
        </Typography>
        <Button onClick={() => setIsOpenPlaydate(true)}>Add A Playdate</Button>
        <PlaydateContextProvider>
          <PlaydateCards />
          <CreatePlaydateDialog
            open={isOpenPlaydate}
            onClose={() => setIsOpenPlaydate(false)}
          />
        </PlaydateContextProvider>
      </DogsContextProvider>
    </Box>
  );
};

export default ProfilePage;
