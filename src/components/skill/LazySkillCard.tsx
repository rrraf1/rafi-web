import React, { Suspense } from "react";

const SkillCard = React.lazy(() => import("./SkillsCard"));

interface LazySkillCardProps {
  image: string;
}

const LazySkillCard: React.FC<LazySkillCardProps> = ({ image }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SkillCard image={image} />
    </Suspense>
  );
};

export default LazySkillCard;
