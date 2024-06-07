// SkillCard.tsx
import React from 'react';
import { Grid } from '@mui/material';

interface SkillCardProps {
    image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ image }) => {
    return (
        <Grid className='card-container noselect'>
            <img src={image} alt="Skill" style={{ maxWidth: '80%', maxHeight: '80%' }} />
        </Grid>
    );
};

export default SkillCard;
