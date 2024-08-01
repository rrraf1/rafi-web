// ExperienceCard.tsx
import { Grid } from "@mui/material";
import React from "react";

interface ExperienceCardProps {
  image: string;
  link: string; // Change to single string instead of array
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ image, link }) => {
  return (
    <Grid container justifyContent={"center"} className="card-experience-container noselect">
      <a href={link}>
        <img src={image} className="card__thumbnail" alt="Project experience thumbnail" />
        <Grid item className="card__overlay"></Grid>
      </a>
    </Grid>
  );
};

export default ExperienceCard;
