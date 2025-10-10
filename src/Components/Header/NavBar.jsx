import { ChevronUp, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import './NavBar.css'

const NavBar = () => {

    const [mobile, setMobile] = useState(false);

    return (
        <nav className='flex justify-between items-center max-w-[1440px] mx-auto p-4'>
            <span className='flex items-center gap-3'>
                <div className='md:hidden' onClick={() => setMobile(!mobile)}>
                    {
                        mobile ? <ChevronUp></ChevronUp> : <Menu></Menu>
                    }
                </div>
                <div className={`md:hidden flex flex-col gap-1 font-medium absolute ${mobile ? 'top-16' : '-top-40'} p-4 pr-20 -ml-4 bg-white rounded-lg`}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/apps'>Apps</NavLink>
                    <NavLink to='/installation'>Installation</NavLink>
                </div>
                <Link className='flex items-center gap-2' to='/'>
                    <img src="/src/assets/logo.png" alt="Logo" className='w-[40px] h-[40px]' />
                    <h4 className='md:text-lg font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h4>
                </Link>
            </span>
            <div className='hidden md:flex items-center gap-6 font-medium'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/apps'>Apps</NavLink>
                <NavLink to='/installation'>Installation</NavLink>
            </div>
            <Link className='flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded-md cursor-pointer' to='https://github.com/Azim-Ul-Karim/Hero-Apps-Platform'>
                <span><i className="fa-brands fa-github text-white"></i></span>
                <h4 className='text-white font-semibold'>Contribute</h4>
            </Link>
        </nav>
    );
};

export default NavBar;