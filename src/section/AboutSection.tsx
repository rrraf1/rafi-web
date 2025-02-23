import { useRef, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../style/main.css";

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
            <h1 className="about__title">Tentang Saya</h1>
            <h2 className="about__content">
              Hai! Saya Rafi, seorang siswa yang bersemangat untuk menguasai
              pengembangan web, terutama Backend. Saya tidak berhenti di
              pekerjaan sekolah, saya suka mengikuti kursus online dan terlibat
              dalam proyek nyata untuk terus mengasah keterampilan saya.
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
      <Grid></Grid>
      <Grid marginTop={"-40vh"} position={"absolute"}>
        <img src={decoration2} className="noselect decoration-2" alt="" />
      </Grid>
    </main>
  );
}

export default About;
