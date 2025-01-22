import React from "react";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import AVA from "../../Assets/Images/ava.png";
import BNB from "../../Assets/Images/bnb.png";
import ETH from "../../Assets/Images/eth.png";
import MATIC from "../../Assets/Images/matic.png";
import SS from "../../Assets/Images/ss.png";
import SUN from "../../Assets/Images/sun.png";
import XX from "../../Assets/Images/xx.png";

const MainSection = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      justifyItems={"center"}
      height={"100%"}
      px={5}
    >
      <Box>
        <Box
          bgcolor={"#1f2431"}
          px={1}
          py={0.5}
          borderRadius={1}
          borderLeft={"4px solid #5406b4"}
          width={"fit-content"}
        >
          <Typography fontSize={12} color="#556174" textTransform={"uppercase"}>
            Social, Trade & Play
          </Typography>
        </Box>
        <Box mt={1}>
          <Typography variant="h2" fontWeight={600} color="#fffffc">
            <Typography variant="span" color="#11a1f9">
              S
            </Typography>
            ocial{" "}
            <Typography variant="span" color="#11a1f9">
              A
            </Typography>
            ggregator <br />{" "}
            <Typography variant="span" color="#11a1f9">
              M
            </Typography>
            arketplace
          </Typography>
        </Box>
        <Box mt={1} gap={2} display={"flex"}>
          <Button
            sx={{
              bgcolor: "#5406b4",
              color: "#fff",
              textTransform: "inherit",
              width: "10rem",
            }}
          >
            Explore Games
          </Button>
          <Button
            sx={{
              bgcolor: "#11a1f9",
              color: "#fff",
              textTransform: "inherit",
              width: "10rem",
            }}
          >
            Marketplace
          </Button>
        </Box>
        <Box
          mt={2}
          display={"flex"}
          gap={1}
          sx={{
            bgcolor: "#1f2430",
            width: "fit-content",
            px: 1.5,
            py: 0.5,
            borderRadius: 5,
          }}
        >
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={ETH}
          />
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={BNB}
          />
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={MATIC}
          />
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={AVA}
          />
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={XX}
          />
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={SUN}
          />
          <Avatar
            sx={{
              width: 25,
              height: 25,
            }}
            src={SS}
          />
        </Box>
      </Box>
      <Box>2</Box>
    </Box>
  );
};

export default MainSection;
