"use client"

import React from "react"
import Image from "next/image"
import { Grid, Typography, Button, createTheme, ThemeProvider, Box, Stack} from "@mui/material"

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
})

export default function Portofolio() {
  return (
    <ThemeProvider theme={theme}>
      <main className="pt-[64px] bg-white">
        <Stack className="px-8">
          <Typography className="">
            Our Portofolio
          </Typography>
          <Typography>
            Aenean egestas felis vitae lacus tempus
          </Typography>
        </Stack>
      </main>
    </ThemeProvider>
  )
}