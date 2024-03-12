import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "@/app/components/ui/moving-border.tsx";
import { WhyChooseUs } from './WhyChooseUs';

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md 
        flex flex-col items-center justify-center relative 
        overflow-hidden mx-auto py-10 md:py-0 text-white'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>Master the art of music</h1>
                <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>Drive Our comprehensive music courses and
                    transform your musical journey today.
                    wheather you&#39;re a beginner or looking to
                    refine your skills, join us to unlock your
                    true potential.
                </p>
                <div className='mt-4'>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <Link href={"/"}>Explore Courses</Link>
                    </Button>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroSection