'use client';
import Card from "./Reusable/Card"
import ChipPicker from "./ChipPicker"
import React, {useState} from 'react';


export default function Game() {
    const [isMoney, setIsMoney] = useState(50000)
    const [betBlind, setBetBlind] = useState(false)
    const [betValue, setBetValue] = useState(0); // Initialize state to 0

    function toggleBlindBet() {
        setBetBlind(!betBlind)
    }

    return(
        <main className="flex w-screen h-screen gap-12 my-[0px] ">
            <div className="flex justify-center w-screen pt-10">
            </div>
            <div className="flex flex-col justify-center items-end w-full h-full">
                
                <ChipPicker value={betValue} setValue={setBetValue} isMoney={isMoney} setIsMoney={setIsMoney} toggleBlindBet={toggleBlindBet} />
                
            </div>
        </main>
    )
}