// src/components/ExperienceGrid.tsx
import React from "react";
import { Grid } from "@mui/material";
import LazyExperienceCard from "./LazyExperienceCard";

import orbit from "../assets/orbit.png";
import absensi from "../assets/absensi.png";

const images = [orbit, absensi];

const ExperienceGrid: React.FC = () => {
  return (
    <Grid container spacing={10} width={"85%"} marginTop={"-40vh"}>
      {images.map((image, index) => (
        <Grid item xs={6} key={index}>
          <LazyExperienceCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ExperienceGrid;
