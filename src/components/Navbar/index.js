import { Menu } from '@material-ui/icons'
import { motion } from 'framer-motion'
import React from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = ({ open, openNavHandler, closeNavHandler }) => {
    return (
        <>
            <nav className='w-full py-4 md:py-6 xl:px-40 bg-white px-14'>
                <ul className='hidden md:flex items-center justify-end space-x-6'>
                    <li>
                        <HashLink smooth to='/#about' className='hover:text-red-500 cursor-pointer'>About Me</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#experience' className='hover:text-red-500 cursor-pointer'>Experience</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#works' className='hover:text-red-500 cursor-pointer'>Works</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/#contact' className='hover:text-red-500 cursor-pointer'>Contact</HashLink>
                    </li>
                </ul>
                <div className='md:hidden flex justify-end'>
                    <Menu className={open ? 'text-red-500 cursor-pointer hover:text-black' : 'hover:text-red-500 cursor-pointer'} onClick={openNavHandler} fontSize='large' />
                </div>
            </nav>
            {
                open &&
                <motion.nav
                    initial={{
                        y: -10
                    }}
                    animate={{
                        y: 0,
                        transition: {
                            duration: 0.6
                        }
                    }}
                    className='xl:hidden block bg-white shadow-md px-12 py-6 items-center justify-between w-full'>
                    <ul className='flex flex-col space-y-2'>
                        <li>
                            <HashLink onClick={closeNavHandler} smooth to='/#about' className='hover:text-red-500 cursor-pointer'>About Me</HashLink>
                        </li>
                        <li>
                            <HashLink onClick={closeNavHandler} smooth to='/#experience' className='hover:text-red-500 cursor-pointer'>Experience</HashLink>
                        </li>
                        <li>
                            <HashLink onClick={closeNavHandler} smooth to='/#works' className='hover:text-red-500 cursor-pointer'>Works</HashLink>
                        </li>
                        <li>
                            <HashLink onClick={closeNavHandler} smooth to='/#contact' className='hover:text-red-500 cursor-pointer'>Contact</HashLink>
                        </li>
                    </ul>
                </motion.nav>
            }
        </>
    )
}

export default Navbar
