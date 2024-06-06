import { useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Divider from "../components/Divider";
import { Box, Grid } from "@mui/material";
import ScrollButton from "../components/ScrollBottom";
import decoration1 from "../assets/decoration-1.svg";

function LandingPage() {
    const container = useRef(null);
    const aboutRef = useRef(null);
    const dynamicText = "01"

    useGSAP(() => {
        gsap.fromTo('.author__name', { x: -100 }, {x: 0});
        gsap.fromTo('.author__description', { x: -120 }, {x: 0});
        gsap.fromTo('.decoration-1', { x: 120 }, {x: 0});
        gsap.fromTo('.scroll-btn', { y: 120 }, {y: 0});
    }, [container]);


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
                                    Rafi Rizqullah Ramadhan
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
                    <center className="scroll-btn">
                        <ScrollButton scrollRef={aboutRef}  />
                    </center>
                </Grid>
                <Divider text={dynamicText}></Divider>
            </Grid>
            <div ref={aboutRef}>
                {/* Empty div to assign ref */}
            </div>
        </main>
    );
}

export default LandingPage;