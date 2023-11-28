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
import { usePlaydatesContext } from "../contexts/PlaydateContext";

const CreatePlaydateDialog = (props) => {
  const { setPlaydates } = usePlaydatesContext();

  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [agePreference, setAgePreference] = useState("");
  const [genderPreference, setGenderPreference] = useState("");
  const [sizePreference, setSizePreference] = useState("");
  const [playdateSizePreference, setPlaydateSizePreference] = useState("");

  const handleSave = async () => {
    const data = {
      time,
      location,
      agePreference,
      genderPreference,
      sizePreference,
      playdateSizePreference,
    };
    const response = await fetch("/playdates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const createdPlaydate = await response.json();

    setPlaydates((playdates) => [...playdates, createdPlaydate]);
    props.onClose();
  };

  return (
    <Dialog {...props} sx={{ padding: "1rem" }}>
      <DialogTitle>Add a Playdate</DialogTitle>
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
          label="Playdate Time"
          fullWidth
          variant="standard"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Playdate Location"
          fullWidth
          variant="standard"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          type="number"
          autoFocus
          margin="dense"
          label="Max Dogs at Playdate"
          fullWidth
          variant="standard"
          value={playdateSizePreference}
          onChange={(e) => setPlaydateSizePreference(e.target.value)}
        />
        <FormControl>
          <InputLabel>Gender Preference</InputLabel>
          <Select
            label="gender Preference"
            value={genderPreference}
            onChange={(e) => setGenderPreference(e.target.value)}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"No Preference"}>No Preference</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Size Preference</InputLabel>
          <Select
            label="Size"
            value={sizePreference}
            onChange={(e) => setSizePreference(e.target.value)}
          >
            <MenuItem value={"small"}>small</MenuItem>
            <MenuItem value={"medium"}>medium</MenuItem>
            <MenuItem value={"large"}>large</MenuItem>
            <MenuItem value={"No Preference"}>No Preference</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Age Preference</InputLabel>
          <Select
            label="gender Preference"
            value={agePreference}
            onChange={(e) => setAgePreference(e.target.value)}
          >
            <MenuItem value={"Puppy (0-1 year old)"}>
              Puppy (0-1 year old)
            </MenuItem>
            <MenuItem value={"Young Adult (1-3 years old)"}>
              Young Adult (1-3 years old)
            </MenuItem>
            <MenuItem value={"Adult (more than 3 years old)"}>
              Adult (more than 3 years old)
            </MenuItem>
            <MenuItem value={"No Preference"}>No Preference</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreatePlaydateDialog;
