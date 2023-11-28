import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PlaydateDogCard from "./PlaydateDogCard";
import PlaydateDogDialog from "./PlaydateDogDialog";

const PlaydateCard = ({ playdate }) => {
  const [open, setOpen] = useState(false);
  const [playdateDogs, setPlaydateDogs] = useState([]);

  useEffect(() => {
    const fetchPlaydateDogs = async () => {
      const response = await fetch(`/playdateDogs/${playdate.id}`);
      const data = await response.json();
      setPlaydateDogs(data);
    };

    fetchPlaydateDogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: "1rem",
          padding: "1rem 1.5rem",
          position: "relative",
          minWidth: "15rem",
          display: "flex",
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {playdate.time} - {playdate.location}
          </Typography>
          <Typography>Age Preference: {playdate.age_preference}</Typography>
          <Typography>
            Gender Preference: {playdate.gender_preference}
          </Typography>
          <Typography>Size Preference: {playdate.size_preference}</Typography>
          <Typography>
            Total # of Dogs Allowed: {playdate.playdate_size_preference}
          </Typography>
          <Button onClick={() => setOpen(true)}> Join Playdate</Button>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Name/Image</TableCell>
                  <TableCell>Bringing Toys</TableCell>
                  <TableCell>Comments</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playdateDogs.map((playdateDog) => (
                  <PlaydateDogCard
                    key={playdateDog.id}
                    playdateDog={playdateDog}
                    setPlaydateDogs={setPlaydateDogs}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <PlaydateDogDialog
        playdateId={playdate.id}
        open={open}
        onClose={() => setOpen(false)}
        setPlaydateDogs={setPlaydateDogs}
      />
    </>
  );
};

export default PlaydateCard;
