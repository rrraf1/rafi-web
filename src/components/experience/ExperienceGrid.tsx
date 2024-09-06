import React from "react";
import { Grid } from "@mui/material";
import LazyExperienceCard from "./LazyExperienceCard";

import orbit from "@assets/orbit.png";
import absensi from "@assets/absensi.png";
import eratunes from "@assets/era-tunes.png"

const images = [orbit, absensi, eratunes];
const links = ["/project/orbit", "/project/absensi", "/project/eraTunes"]; // Ensure each link is a single string

const ExperienceGrid: React.FC = () => {
  return (
    <Grid container className="card-grid">
      {images.map((image, index) => (
        <Grid item key={index} xs={7} md={5} lg={5} mt={15} justifyContent={"center"}>
          <LazyExperienceCard image={image} link={links[index]} /> {/* Pass individual link */}
        </Grid>
      ))}
    </Grid>
  );
};

export default ExperienceGrid;
