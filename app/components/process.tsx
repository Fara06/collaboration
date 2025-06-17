"use client"

import React from "react"
import Image from "next/image"
import { Grid, Typography, Button, createTheme, ThemeProvider, Box } from "@mui/material"

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

export default function WorkingProcess() {
  return (
    <ThemeProvider theme={theme}>
      <main className="pt-[64px] bg-white">
        <section className="px-8">
          <Typography className="text-underline">
            Our Working Process
          </Typography>
          <Typography>
            Aenean egestas felis vitae lacus tempus
          </Typography>
        </section>
      </main>
    </ThemeProvider>
  )
}