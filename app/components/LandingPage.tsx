'use client';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
    const router = useRouter();

  const handleRedirect = () => {
    router.push('/game'); // Replace '/another-page' with your target route
  };
    return(
        <main className="flex flex-col justify-center items-center gap-12 h-screen">
            <h1 className='text-7xl'>Black jack</h1>
            <button className='bg-[#bc2943] w-[7vw] py-3 rounded-[10px] text-white' onClick={handleRedirect}>New game</button>
        </main>
    )
}