import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/ecommerce.svg'

export const Navbar = () => {
    return (
        <div className='navbox'>
             <div className='leftside'> <img src={logo} alt="" /></div>
             <div className='rightside'>
             <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
                <span><Link to="login" className='navlink'>LOGIN</Link></span>
             
             </div>
            Navbar
        </div>
    )
}
