import React from "react";
import { Box, Container, Slide, Typography } from "@mui/material";

const Featured = () => {
  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <Box>
        <Typography variant="h5" color="#fff" fontWeight={600}>
          Featured Drops
        </Typography>
        {/* <Slide direction="right" in={true} timeout={1000} children={Child} /> */}
      </Box>
    </Container>
  );
};

export default Featured;
