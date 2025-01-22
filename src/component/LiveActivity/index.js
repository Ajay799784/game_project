import React from "react";
import {
  Box,
  Container,
  Typography,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ExploreIcon from "../../Assets/Images/explore.jpg";
import MaticIcon from "../../Assets/Images/matic.png";

const LiveActivity = () => {
  return (
    <Container>
      <Box
        sx={{
          mb: 2,
          mt: 6,
        }}
      >
        <Typography variant="h5" color="#fff" fontWeight={600}>
          Live Activity
        </Typography>
      </Box>
      <TableContainer>
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table_live_activity"
        >
          <TableHead>
            <TableRow>
              <TableCell>Event </TableCell>
              <TableCell>Item</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>From</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(Array(5)).map((row, index) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <Box display={"flex"} gap={0.5} alignItems={"center"}>
                    <LocalOfferIcon
                      sx={{
                        width: 14,
                        height: 12,
                        transform: "rotate(90deg)",
                      }}
                    />
                    <Typography>List</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Avatar variant="rounded" src={ExploreIcon} />
                    <Box>
                      <Typography color="#556174" fontSize={12}>
                        Cool Mfer Cats
                      </Typography>
                      <Typography fontSize={12} color="#fff">
                        Cool Mfer Cats#1073#45
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display={"flex"} gap={1} alignItems={"center"}>
                    <Avatar
                      sx={{
                        width: 12,
                        height: 12,
                      }}
                      src={MaticIcon}
                    />
                    <Typography>12</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="#11a1f9"> 0x86..03c6</Typography>
                </TableCell>
                <TableCell>
                  <Typography>4 Minutes ago</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LiveActivity;
