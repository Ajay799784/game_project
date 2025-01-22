import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";

const TrendingGames = () => {
  const [follow, setFollow] = useState(null);
  return (
    <Container>
      <Typography variant="h5" color="#fff" fontWeight={600}>
        Trending Games
      </Typography>
      <Box
        display="flex"
        gap={2}
        mt={2}
        sx={{
          overflowX: "auto",
        }}
      >
        {Array.from(Array(7)).map((game, index) => (
          <Box
            className="game-img"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"end"}
          >
            <Button
              sx={{
                color: "#fff",
                fontSize: 12,
                textTransform: "inherit",
                bgcolor: `${follow == index ? "#11a1f9" : "#192020"}`,
                height: "fit-content",
                mb: 1,
                borderRadius: 4,
                px: 2,
                border: `1px solid ${follow == index ? "" : "#5406b4"}`,
                width: "9rem",
              }}
              onMouseEnter={() => setFollow(index)}
              onMouseLeave={() => setFollow(null)}
            >
              {follow == index ? "Follow" : "Followers 2643"}
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
export default TrendingGames;
