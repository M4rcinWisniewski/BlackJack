'use client';
import { useState } from 'react';
import Chip from "./Chip";

type PropsType = {
  isMoney: number;
  setIsMoney: React.Dispatch<React.SetStateAction<number>>;
  toggleBlindBet: React.MouseEventHandler<HTMLButtonElement>

}

export default function ChipPicker({isMoney, setIsMoney}: PropsType) {
  const [isShrunk, setIsShrunk] = useState(false);
  const [bet, setBet] = useState(0)


  const toggleShrink = () => {
    setIsShrunk(!isShrunk);
  };



  return (
    <main className="flex justify-center items-center flex-col w-screen">
      <button onClick={toggleShrink}>Toggle Size</button>
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
        <div className="flex justify-center items-center gap-16">
        {isMoney >= 1 && <button onClick={(() => setIsMoney(isMoney - 1) )}><Chip value="1" color="#dad2ba"  /></button>}
        {isMoney >= 5 && <button onClick={(() => setIsMoney(isMoney - 5))}><Chip value="5" color="#bc2943" /></button>}
        {isMoney >= 10 && <button onClick={(() => setIsMoney(isMoney - 10))}><Chip value="10" color="#007b93" /></button>}
        {isMoney >= 25 && <button onClick={(() => setIsMoney(isMoney - 25))}><Chip value="25" color="#00794e" /></button>}
        {isMoney >= 100 && <button onClick={(() => setIsMoney(isMoney - 100))}><Chip value="100" color="#231f20" /></button>}
        {isMoney >= 500 && <button onClick={(() => setIsMoney(isMoney - 500))}><Chip value="500" color="#7b5a94" /></button>}
        {isMoney >= 1000 && <button onClick={(() => setIsMoney(isMoney - 1000))}><Chip value="1000" color="#ce4b29" /></button>}
        
        </div>
      </div>
    </main>
  );
}
