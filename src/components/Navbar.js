import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/ecommerce.svg'

export const Navbar = () => {
    return (
        <div className='navbox'>
             <div className='leftside'> <img src={logo} alt="" /></div>
             <div className='rightside'>
            
             <Link to="signup" className='navlink'>&nbsp;SIGN UP  &nbsp; &nbsp;&nbsp;&nbsp;</Link>
             <Link to="login" className='navlink'>LOGIN</Link>
             
             </div>
            
            Navbar
        </div>
    )
}
