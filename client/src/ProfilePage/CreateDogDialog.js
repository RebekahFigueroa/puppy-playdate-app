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

const CreateDogDialog = (props) => {
  const { setDogs } = useDogsContext();

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");

  const handleSave = async () => {
    const data = { name, image, age, gender, size };
    const response = await fetch("/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const createdDog = await response.json();

    setDogs((dogs) => [...dogs, createdDog]);
    props.onClose();
  };

  return (
    <Dialog {...props} sx={{ padding: "1rem" }}>
      <DialogTitle>Add a Dog</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minWidth: "25rem",
        }}
      >
        <TextField
          autoFocus
          margin="dense"
          label="Dog Name"
          fullWidth
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Dog Picture"
          fullWidth
          variant="standard"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <TextField
          type="number"
          autoFocus
          margin="dense"
          label="Age (years)"
          fullWidth
          variant="standard"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Select
            label="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Size</InputLabel>
          <Select
            label="Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <MenuItem value={"small"}>small</MenuItem>
            <MenuItem value={"medium"}>medium</MenuItem>
            <MenuItem value={"large"}>large</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDogDialog;
