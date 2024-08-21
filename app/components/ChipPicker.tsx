'use client';
import { useState } from 'react';
import Chip from "./Chip";
import RangeInput from './RangeInput';

type PropsType = {
  isMoney: number;
  setIsMoney: React.Dispatch<React.SetStateAction<number>>;
  toggleBlindBet: React.MouseEventHandler<HTMLButtonElement>
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChipPicker({isMoney, setIsMoney, value, setValue}: PropsType) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [bet, setBet] = useState(0)


  const toggleShrink = () => {
    setIsShrunk(!isShrunk);
  };



  return (
    <main className="flex justify-center items-center flex-col w-screen">
      <button onClick={toggleShrink}>Toggle Size</button>
      <button>Bet</button>
      <div
        className={`flex justify-center items-center flex-col gap-6 bg-[#40b658] m-0 transition-all duration-300 w-screen ${
          isShrunk ? 'py-2' : 'py-8'
        }`}
        style={{
          height: isShrunk ? '20px' : 'auto',
          overflow: 'hidden',

        }}
      >
        <h1>{isMoney}</h1>
      <RangeInput maxValue={isMoney} value={value} setValue={setValue}/>

      </div>
    </main>
  );
}
