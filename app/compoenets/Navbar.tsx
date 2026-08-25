import React from 'react'
import { Link } from 'react-router'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">
                <p className='text-2xl font-bold text-gradient'>RezMe.ai</p>
            </Link>


            <Link to="/upload" className='primary-button w-fit'>
                Upload Resumeddzcsdc
            </Link>


        </nav>
    )
}
export default Navbar