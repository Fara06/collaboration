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

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <main className="pt-[64px] bg-white">
        <section className="px-8">
          <Typography variant="h5" color="primary">
            About us
          </Typography>
          <Typography variant="h4" color="primary">
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="body1" color="primary">
            Lorem ipsum 
          </Typography>
          <Typography variant="body2" color="default">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nemo, incidunt reiciendis fugiat omnis aliquam nostrum sunt at iusto odit, libero beatae aperiam non voluptate quasi accusamus ducimus, rem adipisci.
          </Typography>
        </section>
      </main>
    </ThemeProvider>
  )
}