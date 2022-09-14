import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  NavBar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Sidebar
} from "./components";

const app = () => (
  <BrowserRouter>
    <Box sx={{ background: "#000" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Feed />} exact />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default app;
