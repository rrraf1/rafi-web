// SkillCard.tsx
import React from "react";
import { Grid } from "@mui/material";

interface SkillCardProps {
  image: string;
  onClick: () => void; // Add onClick prop
}

const SkillCard: React.FC<SkillCardProps> = ({ image, onClick }) => {
  return (
    <Grid className="card-skills-container noselect" onClick={onClick}>
      <img
        src={image}
        alt="Keahlian"
        style={{ maxWidth: "80%", maxHeight: "80%" }}
      />
    </Grid>
  );
};

export default SkillCard;
