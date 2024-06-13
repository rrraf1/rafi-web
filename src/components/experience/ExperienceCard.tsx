import { Grid } from "@mui/material";
import React from "react"

interface ExperienceCardProps {
    image: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ image }) => {
    return (
        <Grid container className="card-experience-container noselect">
            <img src={image} className="card__thumbnail"/>
            <Grid item className="card__overlay"></Grid>
        </Grid>
    )
}
export default ExperienceCard
