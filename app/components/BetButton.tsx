import React, { useState } from 'react';
import Button from './Reusable/Button';

interface RangeInputProps {
  money: number; // Maximum value for the range input
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  setIsMoney: React.Dispatch<React.SetStateAction<number>>;
}

const RangeInput: React.FC<RangeInputProps> = ({ money, value, setValue, setIsMoney }) => {
  
  //function returning an array of chip amount based on players money
  const newAmountArray = () => {
    const chipValues = [1, 5, 10, 25, 50, 100, 500, 1000]
    let amountArray: Array<number> = []
    for (let i = 1; i <= money; i++) {
      if (chipValues.includes(i))
        amountArray.push(i)
    }
    return amountArray
  }
  const addBet = (amount: number) => {
    setValue(prev => prev + amount)
    setIsMoney(prev => prev - amount)
  }

  const clearBet = () => {
    setIsMoney(prev => prev + value)
    setValue(0)
    
  }
  
  const bet = () => {
    setValue(0)
  }
  let mappedButtons = (
    newAmountArray().map(amount => (
      <Button onClick={() => addBet(amount)}  key={newAmountArray().indexOf(amount)} amount={amount} />
    ))
  )
  
  

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      {mappedButtons}
      <div className='flex justify-center items-center flex-col '>
        <h1>Your bet: {value}</h1>
        <div className='flex justify-center items-center w-full'>        
          <button onClick={clearBet}>Clear bet</button>
          <button onClick={bet}>Bet</button>
        </div>

      </div>
    </div>
  );
};

export default RangeInput;
