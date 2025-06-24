"use client"

import React from "react"
import { Box, Typography, Card, CardContent, Stack, ThemeProvider, createTheme, List, ListItem, ListItemText, ListItemButton } from "@mui/material"
import Image from "next/image"
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
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
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Card>
                    <Image src="/logo/logo.svg" alt="logo" width={50} height={50} />
                    <InstagramIcon fontSize="medium" />
                    <EmailIcon fontSize="medium" />
                    <WhatsAppIcon fontSize="medium" />
                    <CardContent>
                        <Stack>
                            <Stack spacing={2}>
                                <Typography variant="h5" color="primary">
                                    Platform
                                </Typography>
                                <Box sx={{ color: "#60606C", }}>
                                    <List sx={{ maxWidth: 300 }}>
                                        {["Home", "About", "Portofolio", "Proccess", "Service"].map((item) => (
                                            <ListItem key={item} disablePadding>
                                                <ListItemButton>
                                                    <ListItemText
                                                        primary={item}
                                                        color="primary"
                                                        sx={{ fontWeight: "bold" }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </ThemeProvider>
    )
}