import { Menu } from '@material-ui/icons'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full py-6 xl:px-40 bg-white px-14'>
            <ul className='hidden xl:flex items-center justify-end space-x-6'>
                <li className='hover:text-red-500 cursor-pointer'>About Me</li>
                <li className='hover:text-red-500 cursor-pointer'>Experience</li>
                <li className='hover:text-red-500 cursor-pointer'>Works</li>
                <li className='hover:text-red-500 cursor-pointer'>Contact</li>
            </ul>
            <div className='xl:hidden flex justify-end'>
                <Menu className='hover:text-red-500 cursor-pointer' fontSize='large' />
            </div>
        </nav>
    )
}

export default Navbar
