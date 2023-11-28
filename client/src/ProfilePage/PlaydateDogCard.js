import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import UpdatePlaydateDogDialog from "./UpdatePlaydateDogDialog";

const PlaydateDogCard = ({ playdateDog, setPlaydateDogs }) => {
  const { isAuthed } = useAuthContext();
  const [dogDetails, setDogDetails] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchDogsById = async () => {
      const response = await fetch(`/dogs/${playdateDog.dog_id}`);
      const data = await response.json();
      setDogDetails(data);
    };

    fetchDogsById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteClick = async () => {
    await fetch(`/playdateDogs/${playdateDog.id}`, {
      method: "DELETE",
    });

    setPlaydateDogs((playdateDogs) =>
      playdateDogs.filter((pd) => pd.id !== playdateDog.id)
    );
  };

  return dogDetails ? (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell>
          {" "}
          <Box
            component="img"
            sx={{ width: "75px", borderRadius: "10000rem" }}
            src={dogDetails.image}
            alt={dogDetails.name}
          />
        </TableCell>
        <TableCell>{dogDetails.name}</TableCell>
        <TableCell>{playdateDog.toys ? "yes" : "no"}</TableCell>
        <TableCell>{playdateDog.comment}</TableCell>

        <TableCell>
          {isAuthed ? (
            <>
              <IconButton size="small" onClick={() => setOpen(true)}>
                <EditIcon />
              </IconButton>
              <IconButton size="small" onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            <></>
          )}
        </TableCell>
      </TableRow>
      <UpdatePlaydateDogDialog
        playdateDog={playdateDog}
        setPlaydateDogs={setPlaydateDogs}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  ) : (
    <TableRow>
      <TableCell>Loading...</TableCell>
    </TableRow>
  );
};

export default PlaydateDogCard;
