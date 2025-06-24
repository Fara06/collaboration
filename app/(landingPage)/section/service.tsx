"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CardActions,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  ThemeProvider,
  createTheme
} from '@mui/material';
import Image from 'next/image';
import ServiceComponent from '../component/serviceComponent';

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
export default function Service() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <ThemeProvider theme={theme}>
        <Box>
          {/* <Image src="/service/background.svg" fill alt="Background" /> */}
        </Box>
        <Typography variant="h4" color='primary' fontWeight="bold" textAlign="center" mb={2} sx={{ textDecoration: "underline" }}>
          Our Service & Pricing
        </Typography>
        <Typography variant='h5' color='primary'>
          Aenean egestas felis vitae lacus tempus
        </Typography>
        <Box gap={2}>
          <ServiceComponent />
        </Box>
      </ThemeProvider>
    </Container>
  );
}