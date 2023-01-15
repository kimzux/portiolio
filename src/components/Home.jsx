import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { HiArrowRight } from 'react-icons/hi';
import {Link} from 'react-scroll'
function Home() {
    return (
        <div name="home" className='bg-gradient-to-b  via-white from-pincolor-100 to-pincolor-900 h-screen w-full' >
            
            <div className='max-w-sreen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
            <div>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mt-[10px] mx-auto w-2/3 md:w-full " />
            </div>
                <div className='flex flex-col justify-center h-full ml-2'>
                    <h2 className='text-5xl sm:text-7xl font-bold'>I'm a full stack <br></br> Developer</h2>
                    <p className='text-gray py-4 max-w-md'>I'm a Freelance UI/UX Designer and Developer based in London, Engl and. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                    <div>
                        <Link to="project" smooth duration={500}>
                            <button className='text-white w-fix px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-purple to-pincolor-800 cursor-pointer active:scale-[.98] active:duration-50 transition-all hover:scale-[1.01]  ease-in-out  transform py-4  '>Project
                            <span className='ml-2'>
                                <HiArrowRight size={18} />
                            </span>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
