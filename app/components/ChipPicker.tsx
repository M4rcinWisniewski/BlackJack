'use client';
import { useState } from 'react';
import Chip from "./Chip";
import BetButton from './BetButton';

type PropsType = {
  isMoney: number;
  setIsMoney: React.Dispatch<React.SetStateAction<number>>;
  toggleBlindBet: React.MouseEventHandler<HTMLButtonElement>
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export default function ChipPicker({isMoney, setIsMoney, value, setValue}: PropsType) {

  const [bet, setBet] = useState(0)





  return (
    <main className="flex justify-right items-center flex-col w-[30vh] border-l-4 border-[#99615b] bg-[#5c222a] h-[100vh]">
      <div
        className={`flex justify-center items-center flex-col gap-6  m-0 transition-all duration-300 h-[100vh]  `}
      >
        <h1 className='text-white'>Your Money: {isMoney}</h1>
      <BetButton money={isMoney} value={value} setIsMoney={setIsMoney} setValue={setValue}/>

      </div>
    </main>
  );
}
