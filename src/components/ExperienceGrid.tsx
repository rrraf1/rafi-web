import React from "react";
import { Grid } from "@mui/material";
import ExperienceCard from "./ExperienceCard"

import orbit from "../assets/orbit.png"
import absensi from "../assets/absensi.png"

const images = [orbit, absensi]

const ExperienceGrid: React.FC = () => {
    return(
        <Grid container spacing={10} width={"85%"} marginTop={"-40vh"}>
            {images.map((image, index) => (
                <Grid item xs={6} key={index}>
                    <ExperienceCard image={image}></ExperienceCard>
                </Grid>
            ))}
        </Grid>
    )
}

export default ExperienceGrid