import React, { useRef, useEffect } from "react";
import { Box, Grid } from '@mui/material';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";

import Divider from "../components/Divider";
import sideProfile from "../assets/side-profile.jpeg";

function About() {
    const dynamicText = "02";

    const container = useRef(null);
    const profileRef = useRef<HTMLImageElement | null>(null);

    useGSAP(() => {
        gsap.fromTo('.about__title', { x: -100 }, { x: 0 });
        gsap.fromTo('.about__content', { x: -120 }, { x: 0 });
        gsap.fromTo('.profile-container', { x: 120 }, { x: 0 });
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
                    duration: 0.3
                });
            }
        };

        if (profileElement) {
            profileElement.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (profileElement) {
                profileElement.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <main id='about-page'>
            <Grid container width={"75%"} height={"100vh"} justifyContent={'center'} className='text-container'>
                <Grid item width={"60%"} fontFamily={"proza libre"} className='text__item' marginTop={"25vh"}>
                    <Box>
                        <h1 className='about__title'>About</h1>
                        <h2 className='about__content'>Now, I'm studying Software Development, specializing in web development, particularly frontend, at SMKN 4 Bandung. When not studying, I take online courses and work on projects to enhance my skills. My goal is to become a <span className='bold__text'>professional web developer.</span></h2>
                    </Box>
                </Grid>
                <Grid item width={"20%"} className="profile-container" marginTop={"25vh"}>
                    <img src={sideProfile} alt="" className="profile__item" ref={profileRef} />
                </Grid>
            </Grid>
            <Grid>
                <Divider text={dynamicText}></Divider>
            </Grid>
        </main>
    );
}

export default About;
