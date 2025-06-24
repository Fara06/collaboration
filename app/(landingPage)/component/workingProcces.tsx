"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function WorkingProccess() {
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={4}
        flexWrap="wrap"
        gap={4}
      >
        {/* Consultation */}
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#FEEAE3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/proccess/consultation.webp"
              width={80}
              height={80}
              alt="Consultations"
              style={{ borderRadius: "30%", objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h5" color="primary">
            Consultation
          </Typography>
        </Box>
        {/* Down Payment */}
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#FEEAE3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/proccess/Down Payment.webp"
              width={80}
              height={80}
              alt="Down Payment"
              style={{ borderRadius: "30%", objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h5" color="primary">
            Down payment
          </Typography>
        </Box>
        {/* Working in a progress */}
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#FEEAE3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/proccess/work.webp"
              width={80}
              height={80}
              alt="Working in a progress"
              style={{ borderRadius: "30%", objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h5" color="primary">
            Working
          </Typography>
        </Box>
        {/* Payment all in */}
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#FEEAE3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/proccess/coin.webp"
              width={80}
              height={80}
              alt="Payment all in"
              style={{ borderRadius: "30%", objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h5" color="primary">
            Payment
          </Typography>
        </Box>
        {/* result */}
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#FEEAE3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src="/proccess/blog (2).gif"
              width={80}
              height={80}
              alt="Results"
              style={{ borderRadius: "30%", objectFit: "cover" }}
            />
          </Box>
          <Typography variant="h5" color="primary">
            Results
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
