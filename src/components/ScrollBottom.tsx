import React from "react";
import { Grid, Box } from "@mui/material";
import arrow from "../assets/arrow-down.png";

function ScrollButton({ scrollRef }: { scrollRef: React.RefObject<any> }) {
    const handleClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Grid
            container
            width={"fit-content"}
            height={"fit-content"}
            className="arrow-container"
            onClick={handleClick}
            style={{ cursor: "pointer" }} // Add pointer cursor for better UX
        >
            <Grid item className="arrow__item">
                <Box>
                    <img src={arrow} alt="" />
                </Box>
            </Grid>
        </Grid>
    );
}

export default ScrollButton;
