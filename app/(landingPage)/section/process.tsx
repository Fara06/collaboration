"use client";

import React from "react";
import Image from "next/image";
import {
  Grid,
  Typography,
  Button,
  createTheme,
  ThemeProvider,
  Box,
} from "@mui/material";
import WorkingProccess from "../component/workingProcces";

const theme = createTheme({
  palette: {
    primary: {
      main: "#233567",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFB5B6",
    },
  },
});
const items = Array(5).fill(null);

export default function WorkingProcess() {
  return (
    <ThemeProvider theme={theme}>
      <Box className="pt-[64px] bg-white">
        <Typography variant="h4" textAlign="center" color="primary" sx={{ textDecoration: "underline" }}>
          Our Working Proccess
        </Typography>
        <Typography variant="subtitle1" color="gray">Aenean egestas felis vitae lacus tempus</Typography>
        <Box
          sx={{
            height: 2,
            width: 40,
            backgroundColor: "black",
            marginLeft: "-2px",
          }}
        />
        <WorkingProccess />
      </Box>
    </ThemeProvider>
  );
}
