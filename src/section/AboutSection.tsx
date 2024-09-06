import { useRef, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import '../../style/main.css'

import ProfileImage from "../components/about/ProfilePicture";

import sideProfile from "../assets/side-profile.jpeg";
import decoration2 from "../assets/decoration-2.svg";

function About() {

  const container = useRef(null);
  const profileRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(".about__title", { x: -100 }, { x: 0 });
    gsap.fromTo(".about__content", { x: -120 }, { x: 0 });
    gsap.fromTo(".profile-container", { x: 120 }, { x: 0 });
  }, [container]);

  useEffect(() => {
    const profileElement = profileRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (profileElement) {
        const rect = profileElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const tiltX = (y / rect.height - 0.5) * 20;
        const tiltY = (x / rect.width - 0.5) * 20;

        gsap.to(profileElement, {
          rotationX: tiltX,
          rotationY: tiltY,
          transformPerspective: 500,
          ease: "power2.out",
          duration: 0.3,
        });
      }
    };

    if (profileElement) {
      profileElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (profileElement) {
        profileElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <main id="about-page">
      <Grid
        container
        width={"85%"}
        height={"100vh"}
        justifyContent={"center"}
        className="text-container"
      >
        <Grid
          item
          width={"60%"}
          fontFamily={"proza libre"}
          className="text__item"
          marginTop={"15vh"}
        >
          <Box>
            <h1 className="about__title">About Me</h1>
            <h2 className="about__content">
              Hey there! I'm Rafi, a passionate student who's all about
              mastering web development, especially the frontend, over at SMKN 4
              Bandung. But I don't stop at schoolwork - I love diving into
              online courses and getting my hands dirty with real projects to
              keep honing my skills.
            </h2>
          </Box>
        </Grid>
        <Grid
          item
          width={"20%"}
          className="profile-container"
          marginTop={"15vh"}
        >
          <ProfileImage
            src={sideProfile}
            alt="Profile"
            className="profile__item"
          />
        </Grid>
      </Grid>
      <Grid>
      </Grid>
      <Grid marginTop={"-40vh"} position={"absolute"}>
        <img src={decoration2} className="noselect decoration-2" alt="" />
      </Grid>
    </main>
  );
}

export default About;
