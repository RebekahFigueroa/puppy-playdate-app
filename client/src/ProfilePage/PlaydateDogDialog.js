import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDogsContext } from "../contexts/DogContext";

const PlaydateDogDialog = ({ playdateId, setPlaydateDogs, ...props }) => {
  const { dogs } = useDogsContext();

  const [dogId, setDogId] = useState("");
  const [toys, setToys] = useState("");
  const [comment, setComment] = useState("");

  const handleSave = async () => {
    const data = {
      toys,
      comment,
      dog_id: dogId,
      playdate_id: playdateId,
    };
    const response = await fetch("/playdateDogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const createdPlaydateDog = await response.json();
    setPlaydateDogs((playdateDogs) => [...playdateDogs, createdPlaydateDog]);
    setDogId("");
    setToys("");
    setComment("");
    props.onClose();
  };

  return (
    <Dialog {...props} sx={{ padding: "1rem" }}>
      <DialogTitle> Join Playdate </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minWidth: "25rem",
        }}
      >
        <FormControl>
          <InputLabel>Select Dog</InputLabel>
          <Select
            label="Size"
            value={dogId}
            onChange={(e) => setDogId(e.target.value)}
          >
            {dogs.map((dog) => (
              <MenuItem key={dog.id} value={dog.id}>
                {dog.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Will you be bringing toys?</InputLabel>
          <Select
            label="Will you be bringing toys?"
            value={toys}
            onChange={(e) => {
              setToys(e.target.value);
            }}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          label="Notes"
          fullWidth
          variant="standard"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default PlaydateDogDialog;
