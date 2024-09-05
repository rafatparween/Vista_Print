// 

"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InstallingDriversPage() {
    const router = useRouter();

    useEffect(() => {
        // Set a timeout to navigate after 15 seconds
        const timer = setTimeout(() => {
            router.push('./process/error'); // Replace '/next-page' with the route you want to navigate to
        }, 15000); // 15 seconds in milliseconds

        // Cleanup the timer if the component is unmounted before the timer completes
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-white">
                {/* HP Logo */}
                <div className="mr-8">
                    <img
                        src="https://www.qwebcare.com/help/images/hp.jpg"
                        alt="HP Logo"
                        className="w-24 w-[225px] h-[225px]"
                    />
                </div>


                {/* Printer Image */}
                <div>
                    <img
                        src="https://www.qwebcare.com/help/images/hel.gif"
                        alt="Printer Image"
                        className="w-[450px] h-[300px]"
                    />
                </div>
                <img
                    src="https://get4lessghana.com/wp-content/uploads/2022/05/HP-INK-ADVANTAGE-3787.jpg"
                    alt="Printer Error"
                    width={660}
                    height={660}
                />
            </div>
            <div className='w-[1835px] h-[58px] text-[39px] mt-[-311px] ml-[774px]'>Installing Drivers..</div>
        </>
    );
}

