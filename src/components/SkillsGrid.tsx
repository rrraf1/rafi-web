// SkillsGrid.tsx
import React from 'react';
import { Grid } from '@mui/material';
import SkillCard from './SkillsCard';

import css from "../assets/css.svg";
import express from "../assets/express.svg";
import html from "../assets/html.svg";
import js from "../assets/js.svg";
import node from "../assets/node.svg";
import python from "../assets/python.svg";
import scss from "../assets/scss.svg";
import vue from "../assets/vue.svg";

const images = [css, express, html, js, node, python, scss, vue];

const SkillsGrid: React.FC = () => {
    return (
        <Grid container spacing={13} width={"85%"}>
            {images.map((image, index) => (
                <Grid item xs={2.4} key={index} marginTop={"-30vh"}>
                    <SkillCard image={image} />
                </Grid>
            ))}
        </Grid>
    );
};

export default SkillsGrid;
