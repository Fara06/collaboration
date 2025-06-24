import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
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
  return (
    <ThemeProvider theme={theme}>
      {/* <Image/> */}
      <Container maxWidth="md" sx={{ py: 10}}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={6}>
            <Typography
              variant="h3"
              fontWeight="bold"
              color="primary"
            > Lorem ipsum dolor sit amet,
              <Typography variant="h3" fontWeight="bold" color="black">
                consectetur adipiscing elit.
              </Typography>
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              turpis sit amet mauris scelerisque volutpat. Cras at arcu id elit
              facilisis volutpat.
            </Typography>
            <Box>
              <Stack direction="row" spacing={10} mt={2}>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  sx={{ px: 4, py: 1.5, fontWeight: "bold" }}
                >
                  Order Now
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{ px: 4, py: 1.5, fontWeight: "bold", color: "white" }}
                >
                  Contact Us
                </Button>
              </Stack>
            </Box>
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
              <Image src="/home/frame.svg" width={500} height={400} alt="frame" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
