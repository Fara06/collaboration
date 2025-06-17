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
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            turpis sit amet mauris scelerisque volutpat. Cras at arcu id elit
            facilisis volutpat.
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Order Now
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Contact Us
          </Button>
        </Box>
        <Image
          src="Background.svg"
          width={400}
          height={300}
          alt="Background"
        />
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Lorem ipsum dolor sit amet
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Lorem ipsum
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
              turpis sit amet mauris scelerisque volutpat. Cras at arcu id elit
              facilisis volutpat.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: 300,
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" color="text.secondary">
                Image Placeholder
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box textAlign="center">
          <Button
            variant="outlined"
            size="large"
            sx={{
              mt: 2,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
            }}
          >
            Explore
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
