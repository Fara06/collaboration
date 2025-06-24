"use client";

import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";
import Image from "next/image";

const images = [
  "/portofolio/oishii1.jpg",
  "/portofolio/nusantara1.png",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
];
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
export default function GaleriGeser() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h4" fontWeight="bold" color="primary" textAlign="center" mb={2} sx={{ textDecoration: "underline" }}>
        Our Portofolio
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 1,
        }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 auto",
              width: 300,
              height: 200,
              position: "relative",
              scrollSnapAlign: "start",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt={`Foto ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </Box>
    </ThemeProvider>
  );
}
