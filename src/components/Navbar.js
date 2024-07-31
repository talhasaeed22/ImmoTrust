import React from 'react'
import { Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/whiteLogo.png'
const Navbar = () => {
    return (
        <div class="bg-gradient-to-r from-[#304c60] via-[#429894] to-[#304c60] w-full flex justify-between px-5 items-center sm:py-2 py-4">
            <Bars3CenterLeftIcon color='white' aria-hidden="true" className="block h-9 w-9 cursor-pointer group-data-[open]:hidden" />

            <img alt='logo' src={logo} className='w-[205px] cursor-pointer sm:flex hidden' />

            <div className='flex gap-3 items-center'>
                <i className="fa fa-linkedin text-white" aria-hidden="true"></i>
                <i className="fa fa-instagram text-white" aria-hidden="true"></i>
                <span className='text-white text-[15px] '>KONTAKT</span>
            </div>

        </div>
    )
}

export default Navbar
