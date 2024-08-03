// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  return (
    <header className='navbar'>
      <h2>Saikat Ray</h2>
      
      
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><NavLink className='anchor-link' to='/'><p onClick={()=>setMenu("home")}>Home</p></NavLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
        <li><NavLink className='anchor-link' to='/about' ><p onClick={()=>setMenu("about")}>About Me</p></NavLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
        <li><NavLink className='anchor-link' to='/product'  ><p onClick={()=>setMenu("work")}>FL Studio Projects</p></NavLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>       
        <li><NavLink className='anchor-link'to='/contact' ><p onClick={()=>setMenu("contact")}>Contact</p></NavLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </header>
  )
}

export default Navbar
