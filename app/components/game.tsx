'use client';
import Chip from "./Chip"
import ChipPicker from "./ChipPicker"
import React, {useState} from 'react';

export default function Game() {
    const [isMoney, setIsMoney] = useState(1500)
    const [betBlind, setBetBlind] = useState(false)
    
    function toggleBlindBet() {
        setBetBlind(!betBlind)
    }
    return(
        <main className="flex flex-col justify-center  w-screen h-screen gap-12 my-[0px] ">
            <div className="flex justify-center items-end w-full h-full"> 
                <ChipPicker isMoney={isMoney} setIsMoney={setIsMoney} toggleBlindBet={toggleBlindBet} />
            </div>
        </main>
    )
}