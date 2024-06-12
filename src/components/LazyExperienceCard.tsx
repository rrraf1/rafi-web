// LazyExperienceCard.tsx
import React, { Suspense } from "react";

const ExperienceCard = React.lazy(() => import("./ExperienceCard"));

interface LazyExperienceCardProps {
  image: string;
}

const LazyExperienceCard: React.FC<LazyExperienceCardProps> = ({ image }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExperienceCard image={image} />
    </Suspense>
  );
};

export default LazyExperienceCard;
