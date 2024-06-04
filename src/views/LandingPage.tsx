import { useRef } from "react";
import { Box, Grid } from "@mui/material";
import ScrollButton from "../components/ScrollBottom";
import decoration1 from "../assets/decoration-1.svg";

function LandingPage() {
    const aboutRef = useRef(null);

    return (
        <main id="landing-page">
            <Grid container>
                <Grid
                    container
                    display={"flex"}
                    justifyContent={"center"}
                    height={"100vh"}
                >
                    <Grid
                        item
                        width={"85%"}
                        height={"fit-content"}
                        marginTop={"10vw"}
                        fontFamily={"Proza Libre"}
                        className="landing-text"
                    >
                        <Box>
                            <strong>
                                <h1 className="author__name">
                                    Hi, I'am Rafi Rizqullah Ramadhan
                                </h1>
                            </strong>
                            <h2 className="author__description">
                                I’am a student from Indonesia, now im studying
                                Software Development at SMKN 4 Bandung
                            </h2>
                        </Box>
                    </Grid>
                    <img src={decoration1} alt="" className="decoration-1" />
                </Grid>
                <Grid item width={"100%"} marginTop={"-260px"}>
                    <center>
                        <ScrollButton scrollRef={aboutRef} />
                    </center>
                </Grid>
            </Grid>
            <div ref={aboutRef}>
                {/* Empty div to assign ref */}
            </div>
        </main>
    );
}

export default LandingPage;
