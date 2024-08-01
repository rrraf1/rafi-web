import React from "react";
import { Grid } from "@mui/material";
import LazyExperienceCard from "./LazyExperienceCard";

import orbit from "@assets/orbit.png";
import absensi from "@assets/absensi.png"; // Add more images if needed

const images = [orbit, absensi];
const links = ["/project/orbit", "/project/absensi"]; // Ensure each link is a single string

const ExperienceGrid: React.FC = () => {
  return (
    <Grid container className="card-grid">
      {images.map((image, index) => (
        <Grid item key={index} xs={12} md={4} justifyContent={"center"}>
          <LazyExperienceCard image={image} link={links[index]} /> {/* Pass individual link */}
        </Grid>
      ))}
    </Grid>
  );
};

export default ExperienceGrid;
