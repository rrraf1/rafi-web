import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../style/main.css";
import { Box, Grid } from "@mui/material";
import ScrollButton from "../components/common/ScrollBottom";
import decoration1 from "../assets/decoration-1.svg";

function Landing() {
  const container = useRef(null);
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".author__name", { x: -100 }, { x: 0 });
    gsap.fromTo(".author__description", { x: -120 }, { x: 0 });
    gsap.fromTo(".decoration-1", { x: 120 }, { x: 0 });
    gsap.fromTo(".scroll-btn", { y: 120 }, { y: 0 });
  }, [container]);

  return (
    <main id="landing-page">
      <Grid container>
        <Grid
          container
          display={"flex"}
          justifyContent={"center"}
          width={"100%"}
          className="landing-container"
        >
          <Grid
            item
            width={"85%"}
            height={"fit-content"}
            marginTop={"20vh"}
            fontFamily={"Proza Libre"}
            className="landing-text"
          >
            <Box>
              <strong>
                <h1 className="author__name">
                  Hai! Saya Rafi Rizqullah Ramadhan
                </h1>
              </strong>
              <h2 className="author__description">
                Pengembang Web dari Indonesia | Sedang menempuh pendidikan di SMKN 4 Bandung
              </h2>
            </Box>
          </Grid>
          <img src={decoration1} alt="" className="decoration-1 noselect" />
        </Grid>
        <Grid item width={"100%"} marginTop={"-260px"}>
          <center className="scroll-btn">
            <ScrollButton scrollRef={aboutRef} />
          </center>
        </Grid>
      </Grid>
      <div ref={aboutRef}>{/* Empty div to assign ref */}</div>
    </main>
  );
}

export default Landing;
