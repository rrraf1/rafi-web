import { Box, Grid } from '@mui/material';
function About() {
    return (
        <main id='about-page'>
            <Grid container display={'flex'} height={"100vh"} justifyContent={'center'} className='text-container'>
                <Grid item width={"85%"} fontFamily={"proza libre"} className='text__item'>
                    <Box width={"70%"}>
                        <h1 className='about__title'>About</h1>
                        <h2 className='about__content'>Now, I'm studying Software Development, specializing in web development, particularly frontend, at SMKN 4 Bandung. When not studying, I take online courses and work on projects to enhance my skills. My goal is to become a <span className='bold__text'>professional web developer.</span></h2>
                    </Box>
                </Grid>
                <Grid></Grid>
            </Grid>
        </main>
    )
}
export default About