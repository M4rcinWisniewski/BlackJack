import Image from "next/image"
import Hearts from "../../assets/Hearts.svg"
import Diamonds from "../../assets/Diamnds.svg"
import Clubs from "../../assets/Clubs.svg"
import Spades from "../../assets/Spades.svg"

type CardPropType = {
    rank: string
    suit: string
}
export default function Card({rank, suit}: CardPropType) {
    const generateSuit = () => {
        switch (suit) {
            case 'Heart':
                return Hearts;
            case 'Diamond':
                return Diamonds;
            case 'Club':
                return Clubs;
            case 'Spade':
                return Spades;
            default:
                throw new Error('suit does not exist');
        }
    }
    const generateRank = () => {
        switch (rank) {
            case 'T':
                return '10';
            default:
                return rank;
        }
    }
    return(
        <main className="relative w-[12vw] h-[15vw] bg-white py-1 rounded-[10px]">
            <h1 className="absolute text-4xl left-1 top-0">{generateRank()}</h1>
            <div className="flex justify-center items-center h-full w-full">
                <Image src={generateSuit()} alt='' />
            </div>
            <h1 className="absolute text-4xl right-1 bottom-0">{generateRank()}</h1>
        </main>
    )
}
