import { Grid } from "@mui/material";
import React, { Suspense } from "react";

interface ExperienceCardProps {
  image: string;
}

const ImageComponent: React.FC<{ src: string }> = ({ src }) => {
  return <img src={src} className="card__thumbnail" />;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ image }) => {
  return (
    <Grid container className="card-experience-container noselect">
      <Suspense
        fallback={<div className="card__thumbnail--loading">Loading...</div>}
      >
        <ImageComponent src={image} />
      </Suspense>
      <Grid item className="card__overlay"></Grid>
    </Grid>
  );
};

export default ExperienceCard;
