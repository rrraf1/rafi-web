import { Grid } from "@mui/material";
import ExperienceGrid from "../components/ExperienceGrid";

function Experience() {
    return(
        <main id="experience-page">
            <Grid container height={"90vh"} justifyContent={"center"}>
                <Grid item width={"85%"} textAlign={"center"}><h1>Experience</h1></Grid>
                <ExperienceGrid></ExperienceGrid>
            </Grid>
        </main>
    )
}

export default Experience