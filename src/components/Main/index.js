import React from 'react'
import { skills } from '../../assets/data'
import { Tooltip } from '@material-ui/core'

const Main = () => {
    return (
        <main id='experience' className='py-6 xl:px-40 xl:py-20 bg-blue-50 min-h-screen space-y-8 px-14'>
            <section className='space-y-4 overflow-auto'>
                <h3 className='text-xl font-bold'>Work Experience</h3>
                <div className='bg-white py-8 px-10 rounded-md space-y-4'>
                    <div>
                        <h4 className='font-bold text-2xl'>
                            Front-End Developer
                    </h4>
                        <h4 className='font-bold text-2xl'>
                            (React)
                    </h4>
                    </div>
                    <div className='flex xl:flex-row flex-col xl:items-center space-y-2 xl:space-y-0 xl:space-x-8'>
                        <p className='text-md font-semibold'>2020 - Present</p>
                        <p className='text-lg font-semibold hidden xl:block'>|</p>
                        <p className='text-md font-semibold'>PT. Sarana Maju Lestari, Surabaya</p>
                    </div>
                    <p className='text-md'>
                        As front-end developer at PT. Sarana Maju Lestari, I managed to contribute for their ongoing projects like built
                        many user interfaces for SOKKET system and Boiler Auto Tuning dashboard using React.js and tools like
                        Redux thunk, FusionChart, Figma, FuseTheme template, and Tailwind.css.
                    </p>
                </div>
            </section>
            {/* <section className='space-y-4 overflow-auto'>
                <h3 className='text-xl font-bold'>Education</h3>
                <div className='bg-white py-8 px-10 rounded-md space-y-4'>
                    <div>
                        <h4 className='font-bold text-2xl'>
                            Informatics
                    </h4>
                        <h4 className='font-bold text-2xl'>
                            (Bachelor's Degree)
                    </h4>
                    </div>
                    <div className='flex xl:flex-row flex-col xl:items-center space-y-2 xl:space-y-0 xl:space-x-8'>
                        <p className='text-md font-semibold'>2015 - 2019</p>
                        <p className='text-lg font-semibold hidden xl:block'>|</p>
                        <p className='text-md font-semibold'>Islamic University of Indonesia, Sleman</p>
                    </div>
                    <p className='text-md'>
                        I'm majoring in informatics degree at Islamic University of
                        Indonesia for 4 years. My last project is about to build
                        a verification system for digital forensic documents based on Blockchain technology using Node.js. While I’m in university I also applied for teaching as a web programming practicum assistant.
                    </p>
                </div>
            </section> */}
            <section className='space-y-4'>
                <h3 className='text-xl font-bold'>Skills & Tools</h3>
                <div className=' grid grid-cols-2 gap-8 md:grid-cols-5 w-full xl:gap-10'>
                    {skills.map(item => (
                        <Tooltip key={item.id} title={item.title} arrow >
                            <div className='bg-white p-4 rounded-md items-center flex justify-center shadow-sm hover:shadow-lg' >
                                <img alt='icon' style={{ content: `url(${item.imageURL})` }} className='w-20' />
                            </div>
                        </Tooltip>
                    ))}

                </div>

            </section>
        </main>
    )
}

export default Main
