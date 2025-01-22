import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../Header";
import MainSection from "../MainSection";
import Featured from "../Featured";
import TrendingGames from "../TrendingGames";
import LiveActivity from "../LiveActivity";
import TrendingNefts from "../TrendingNefts";

const Dashboard = () => {
  return (
    <Box overflow={"hidden"}>
      <Header />
      <div className="dashboard-bg">
        <MainSection />
      </div>
      <Box bgcolor={"#1b1a21"} px={2} py={2}>
        {/* <Featured /> */}
        <TrendingGames />
        <LiveActivity />
        <TrendingNefts />
      </Box>
    </Box>
  );
};

export default Dashboard;
