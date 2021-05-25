import { Email, LinkedIn, WhatsApp } from '@material-ui/icons'
import React from 'react'

const Footer = () => {
    return (
        <footer className=' xl:px-40 py-16 bg-red-400 flex flex-col xl:justify-between xl:flex-row px-14'>
            <div className='space-y-8'>
                <h3 className='text-white text-xl font-bold'>Feel free to contact me</h3>
                <div className='space-y-4'>
                    <div className='flex items-center space-x-6'>
                        <WhatsApp className='text-white' fontSize='small' />
                        <p className='text-white text-sm'>+62 821 3652 6483</p>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <LinkedIn className='text-white' fontSize='small' />
                        <p className='text-white text-sm'>linkedin.com/in/dzaky-badawi-46656a163</p>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <Email className='text-white' fontSize='small' />
                        <p className='text-white text-sm'>dzaky.badawi@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className='text-white text-sm font-semibold mt-10 xl:mt-0 xl:self-end'>&copy;2021 - Dzaky Badawi</p>
        </footer>
    )
}

export default Footer
