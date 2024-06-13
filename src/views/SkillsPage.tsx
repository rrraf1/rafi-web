import { Grid } from "@mui/material";
import SkillsGrid from "../components/skill/SkillsGrid";

function Skills() {
  return (
    <main id="skills-page">
      <Grid container height={"90vh"} justifyContent={"center"}>
        <Grid item className="skills__title"  width={"85%"} textAlign={"center"}><h1>Skills</h1></Grid>
        <SkillsGrid></SkillsGrid>
      </Grid>
    </main>
  );
}
export default Skills;
