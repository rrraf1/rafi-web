import React, { useState } from "react";
import { Grid } from "@mui/material";
import {
  useCursorPosition,
  useCursorVisibility,
  useHoverEffect,
} from "../../hooks/cursorData";

const Cursor: React.FC = () => {
  const cursorPosition = useCursorPosition();
  const isVisible = useCursorVisibility(950);
  const [cursorSize, setCursorSize] = useState(20);
  const [isHoveringCardExperience, setIsHoveringCardExperience] =
    useState(false);

  const handleMouseEnter = () => setCursorSize(50);
  const handleMouseEnterExperience = () => setCursorSize(90);
  const handleMouseLeave = () => setCursorSize(20);

  useHoverEffect(
    ".nav__item, .arrow-container, .profile__item, .card-container, .card-skills-container",
    handleMouseEnter,
    handleMouseLeave
  );
  useHoverEffect(
    ".card-experience-container",
    () => {
      setIsHoveringCardExperience(true);
      handleMouseEnterExperience();
    },
    () => {
      setIsHoveringCardExperience(false);
      handleMouseLeave();
    }
  );

  if (!isVisible) return null;

  return (
    <Grid className="cursor-container">
      <Grid
        className={`cursor__item ${isHoveringCardExperience ? "hovered" : ""}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: cursorSize,
          height: cursorSize,
        }}
      >
        {isHoveringCardExperience && (
          <span className="see-project">See Project</span>
        )}
      </Grid>
    </Grid>
  );
};

export default Cursor;
