import React, { useState } from 'react';

interface RangeInputProps {
  maxValue: number; // Maximum value for the range input
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const RangeInput: React.FC<RangeInputProps> = ({ maxValue, value, setValue }) => {
  

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10)); // Update state with the new value
  };

  return (
    <div className='w-screen flex justify-center items-center gap-10'>
      <input 
        className='w-[20vw]'
        type="range" 
        min="0" 
        max={maxValue} 
        value={value} 
        onChange={handleChange} 
      />
      <p>Current Value: {value}</p>
    </div>
  );
};

export default RangeInput;
