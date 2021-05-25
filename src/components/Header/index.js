import React from 'react'

import { IMGProfile } from '../../assets/images'

const Header = () => {
    return (
        <header className='min-h-screen xl:px-40 flex xl:flex-row flex-col-reverse items-center justify-between py-6 px-14'>
            <div className=' space-y-8 xl:space-y-12 '>
                <h2 className='xl:text-5xl leading-tight font-bold text-4xl'>
                    Hi, I am Dzaky,
                     <br />
                    Front-End Developer
                </h2>
                <h6 className='text-lg xl:w-5/6 w-full'>
                    I described myself as a creative, and willing to learn new. As a front-end developer
                    I'm very interested in topics about web application development using React.js and UI/UX design.
                </h6>
                <button className='bg-red-400 py-2 px-5 rounded-md text-white hover:bg-red-500 w-full xl:w-auto'>
                    Download Resume
                </button>
            </div>
            <img alt='profile' style={{ content: `url(${IMGProfile})` }} className=' w-60 md:w-72 mb-10 xl:mb-0' />
        </header>
    )
}

export default Header
