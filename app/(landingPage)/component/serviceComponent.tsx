import {
    Box,
    Grid,
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Button,
    CardActions,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import TryRoundedIcon from "@mui/icons-material/TryRounded";

export default function ServiceComponent() {
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
    const plans = [
        {
            name: "Mockup Desain Plan",
            price: "IDR 150.000",
            description: "UI/UX Design Mockup with Figma",
            features: [
                { icon: <CalendarMonthIcon />, text: "Desain responsif" },
                { icon: <CloudDoneRoundedIcon />, text: "Mudah dikustomisasi" },
                { icon: <TerminalRoundedIcon />, text: "Terintegrasi developer" },
                { icon: <TryRoundedIcon />, text: "3x revisi gratis" },
            ],
            cta: "Contact Us",
        },
        {
            name: "Website Company",
            price: "IDR 100.000",
            description: "Website company dengan Next.js",
            features: [
                { icon: <CalendarMonthIcon />, text: "SEO Friendly" },
                { icon: <CloudDoneRoundedIcon />, text: "Deploy ke Vercel/Netlify" },
                { icon: <TerminalRoundedIcon />, text: "Integrasi API" },
                { icon: <TryRoundedIcon />, text: "Support hingga 1 bulan" },
            ],
            cta: "Contact Us",
        },
        {
            name: "Custom Package",
            price: "IDR 75.000",
            description: "Solusi website sesuai kebutuhan",
            features: [
                { icon: <CalendarMonthIcon />, text: "Diskusi & Analisa kebutuhan" },
                { icon: <CloudDoneRoundedIcon />, text: "Fleksibel & dinamis" },
                { icon: <TerminalRoundedIcon />, text: "Teknologi sesuai permintaan" },
                { icon: <TryRoundedIcon />, text: "Harga bisa disesuaikan" },
            ],
            cta: "Contact Us",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ py: 4 }}>
                <Grid container spacing={4} justifyContent="center">
                    {plans.map((plan, index) => (
                        <Grid size={6} key={index}>
                               <Card
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: 6,
                                    },
                                    boxShadow: 4,
                                    borderRadius: 2,
                                    backgroundColor: "#112C57"
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Box sx={{
                                        backgroundColor: "#233567", 
                                        width: 500,
                                        height: 100,
                                        borderRadius: 5,
                                    }}>
                                        <Typography
                                            color="white"
                                            variant="h5"
                                            gutterBottom
                                            sx={{ fontWeight: 700 }}
                                        >
                                            {plan.name}
                                        </Typography>
                                        <Typography variant="body1" color="white">
                                            {plan.description}
                                        </Typography>
                                    </Box>

                                    <Box sx={{ my: 2 }}>
                                        <Typography
                                            variant="h4"
                                            color="primary"
                                            sx={{ fontWeight: 700 }}
                                        >
                                            {plan.price}
                                        </Typography>
                                    </Box>
                                    <List dense>
                                        {plan.features.map((feature, i) => (
                                            <ListItem key={i} sx={{ px: 0, py: 0.5 }}>
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 32,
                                                        backgroundColor: "primary",
                                                        borderRadius: "50%",
                                                        p: 0.5,
                                                    }}
                                                >
                                                    {feature.icon}
                                                </ListItemIcon>
                                                <Typography variant="body2" color="text.secondary">
                                                    {feature.text}
                                                </Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions sx={{ px: 2, pb: 2 }}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        sx={{
                                            fontWeight: 600,
                                            textTransform: "none",
                                        }}
                                    >
                                        {plan.cta}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
