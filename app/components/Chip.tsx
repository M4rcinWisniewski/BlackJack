'use client';
import { useState } from 'react';
import ChipSVG from '../assets/chipSvg';

interface PropsType {
  color: string;
  value: string
}

export default function Chip({ color, value }: PropsType) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const dropShadowStyle = isHovered
    ? { filter: `drop-shadow(0 5px 100px ${color})`, transition: 'filter 0.5s' }
    : { transition: 'filter 0.3s' };

  return (
    <main
      style={dropShadowStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='cursor-pointer'
    >
      <ChipSVG value={value} color={color} />
    </main>
  );
}
