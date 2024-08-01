// LazyExperienceCard.tsx
import React, { Suspense } from "react";

const ExperienceCard = React.lazy(() => import("./ExperienceCard"));

interface LazyExperienceCardProps {
  image: string;
  link: string;
}

const LazyExperienceCard: React.FC<LazyExperienceCardProps> = ({ image, link }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExperienceCard image={image} link={link} />
    </Suspense>
  );
};

export default LazyExperienceCard;
