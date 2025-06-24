"use client";

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import {
  Typography,
  Toolbar,
  Menu,
  Container,
  MenuItem,
  Button,
  Box,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

const header = ["Home", "About", "Portfolio", "Service"];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
      <AppBar
        position="sticky" 
        elevation={scrolled ? 2 : 0} 
        sx={{ 
          backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "#ffffff", 
          color: "#000000",
          transition: 'all 0.2s ease',
          backdropFilter: scrolled ? 'blur(6px)' : 'none',
          py: scrolled ? 0.3 : 0.5, 
          height: scrolled ? '60px' : '70px' 
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: '60px !important' }}> 
            <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
              <Image
                src="/logo/logo.svg"
                width={scrolled ? 140 : 160} 
                height={scrolled ? 35 : 40} 
                alt="logo"
                priority
                style={{
                  transition: 'all 0.2s ease',
                  objectFit: 'contain'
                }}
              />
              
            </Box>
            <Typography color="primary">WEBLAZA</Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                size="medium" 
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon fontSize="medium" /> 
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {header.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} dense> 
                    <Typography
                      variant="body2" 
                      textAlign="center"
                      sx={{
                        color: "primary.main",
                        "&:hover": { color: "secondary.main" },
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 3, 
                ml: 3, 
              }}
            >
              {header.map((page) => (
                <Link
                  key={page}
                  href="#"
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 1, 
                    color: "primary.main",
                    display: "block",
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: '0.9rem', 
                    "&:hover": {
                      color: "secondary.main",
                    },
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '0%',
                      height: '1.5px', 
                      backgroundColor: 'secondary.main',
                      transition: 'width 0.2s ease'
                    },
                    '&:hover::after': {
                      width: '100%'
                    }
                  }}
                >
                  {page}
                </Link>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1.5, 
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleCloseNavMenu}
                size="small"
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: '6px', 
                  px: 2, 
                  fontSize: '0.85rem', 
                  boxShadow: 'none',
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: 'primary.dark'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}