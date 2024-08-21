'use client';
import Chip from "./Chip"
import ChipPicker from "./ChipPicker"
import React, {useState} from 'react';

export default function Game() {
    const [isMoney, setIsMoney] = useState(1500)
    const [betBlind, setBetBlind] = useState(false)
    const [value, setValue] = useState(0); // Initialize state to 0
    function toggleBlindBet() {
        setBetBlind(!betBlind)
    }
    return(
        <main className="flex flex-col justify-center  w-screen h-screen gap-12 my-[0px] ">
            <div className="flex justify-center items-end w-full h-full"> 
                <ChipPicker value={value} setValue={setValue} isMoney={isMoney} setIsMoney={setIsMoney} toggleBlindBet={toggleBlindBet} />
            </div>
        </main>
    )
}