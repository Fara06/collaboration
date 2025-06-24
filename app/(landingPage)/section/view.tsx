"use client";

import { Stack } from "@mui/material";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Portofolio from "./portofolio";
import WorkingProcess from "./process";
import Service from "./service"
import Footer from "./footer"

export default function HomeView() {
  return (
    <Stack>
      <Navbar />
      <Home />
      <About />
      <Portofolio />
      <WorkingProcess />
      <Service />
      <Footer />
    </Stack>
  );
}
