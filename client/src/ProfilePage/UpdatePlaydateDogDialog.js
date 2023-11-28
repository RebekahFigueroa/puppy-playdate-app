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

const UpdatePlaydateDogDialog = ({
  open,
  onClose,
  playdateDog,
  setPlaydateDogs,
}) => {
  const [values, setValues] = useState(playdateDog);

  const handleSave = async () => {
    const data = {
      toys: values.toys,
      comment: values.comment,
    };
    await fetch(`/playdateDogs/${playdateDog.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setPlaydateDogs((playdateDogs) => {
      const index = playdateDogs.map((pd) => pd.id).indexOf(playdateDog.id);

      return [
        ...playdateDogs.slice(0, index),
        { ...playdateDog, toys: values.toys, comment: values.comment },
        ...playdateDogs.slice(index + 1),
      ];
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ padding: "1rem" }}>
      <DialogTitle>Edit RSVP</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          minWidth: "25rem",
          padding: "1rem !important",
        }}
      >
        <FormControl>
          <InputLabel>Will you be bringing toys?</InputLabel>
          <Select
            label="Will you be bringing toys?"
            value={values.toys}
            onChange={(e) => setValues({ ...values, toys: e.target.value })}
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
          value={values.comment}
          onChange={(e) => setValues({ ...values, comment: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {}}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdatePlaydateDogDialog;
