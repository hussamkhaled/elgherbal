import React from "react";
import { Typography, Paper } from "@mui/material";

export default function Circles({ text }) {
  const paperStyle = {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    padding: 3,
    boxShadow: "0px 4px 7px rgba(254,166,7, 0.5)",
  };
  return (
    <Paper elevation={3} sx={paperStyle}>
      <Typography fontFamily="Regular">{text}</Typography>
    </Paper>
  );
}
