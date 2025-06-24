"use client"

import React from "react"
import Image from "next/image"
import { Grid, Typography, Button, createTheme, ThemeProvider, Box, Container, Stack } from "@mui/material"

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
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={6}>
            {/* <Image /> */}
          </Grid>
          <Grid size={6}>
            <Box
              sx={{
                width: "100%",
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ml: 10
              }}
            >
              <Image src="/about/about.svg" width={500} height={400} alt="frame" />
            </Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Lorem
            </Typography>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography variant="h5">
              Lorem ipsum
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              turpis sit amet mauris scelerisque volutpat. Cras at arcu id elit
              facilisis volutpat.
            </Typography>
            <Box>
              <Stack direction="row" spacing={10} mt={2}>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  sx={{ px: 4, py: 1.5, fontWeight: "bold" }}
                >
                  Explore
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider >
  )
}