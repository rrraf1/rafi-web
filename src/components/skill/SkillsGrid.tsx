import React from "react";
import { Grid } from "@mui/material";
import LazySkillCard from "./LazySkillCard";

import css from "@assets/css.svg";
import express from "@assets/express.svg";
import html from "@assets/html.svg";
import js from "@assets/js.svg";
import node from "@assets/node.svg";
import python from "@assets/python.svg";
import scss from "@assets/scss.svg";
import vue from "@assets/vue.svg";
import react from "@assets/react.svg";
import mysql from "@assets/mysql.svg";
import pgsql from "@assets/pgsql.svg";

const images = [css, html, js, node, python, scss, vue, react, express, mysql, pgsql];

const SkillsGrid: React.FC = () => {
  return (
    <Grid container spacing={2} width={"85%"} justifyContent="center" className="skills-grid">
      {images.map((image, index) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={3}
          key={index}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <LazySkillCard image={image} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsGrid;
