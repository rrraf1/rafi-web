import { useState, useRef } from 'react';
import { Grid, Stack, Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import data from "../api/experienceData";

function ExperiencePage() {
  const { projectName } = useParams<{ projectName: string }>();
  const content = data[projectName as keyof typeof data];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const mainImageRef = useRef<HTMLDivElement>(null);

  if (!content) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const additionalImages = content.images;

  return (
    <Container maxWidth="lg" sx={{ my: 4 }} className="experience-page-container">
      <Grid container spacing={1} justifyContent="center" className="experience-page-grid">
        {/* Main Image */}
        <Grid item xs={12} md={8} lg={9} className="main-image-grid-item">
          <Box ref={mainImageRef} className="main-image-container">
            {content.images.map((image, index) => (
              <Box
                key={index}
                className={`image-overlay ${index === activeImageIndex ? 'active' : ''}`}
              >
                <img src={image} alt={`Main ${index + 1}`} />
              </Box>
            ))}
          </Box>
        </Grid>
        {/* Additional Images */}
        <Grid item xs={12} md={4} lg={3} className="additional-images-grid-item">
          <Stack 
            direction={{ xs: 'row', md: 'column' }}
            spacing={2} 
            className="additional-images-container"
          >
            {additionalImages.map((image, index) => (
              <Box 
                key={index} 
                className={`thumbnail ${index === activeImageIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </Box>
            ))}
          </Stack>
        </Grid>
        {/* Text Information */}
        <Grid item xs={12}>
          <h1>{content.text.title}</h1>
          <p>{content.text.description}</p>
          <p>Role: {content.text.role}</p>
          <ul>
            {content.text.techstack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ExperiencePage;