import React, { Suspense } from "react";

const SkillCard = React.lazy(() => import("./SkillsCard"));

interface LazySkillCardProps {
  image: string;
  onClick: () => void; // Add onClick prop
}

const LazySkillCard: React.FC<LazySkillCardProps> = ({ image, onClick }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SkillCard image={image} onClick={onClick} />
    </Suspense>
  );
};

export default LazySkillCard;
