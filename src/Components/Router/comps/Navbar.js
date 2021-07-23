import React from 'react';
import { Link } from 'react-router-dom';
import { RiVipDiamondFill } from "react-icons/ri";
import { BiCompass } from "react-icons/bi";
import { SidebarData } from './sideBarData';
import './Navbar.css';
function navbar(){
  return (
    <>
    <div className="navbar">
    <Link to='#' Class-Name='menu-bars'></Link>
    </div>
    <nav className={'nav-menu'}>
        <ul className='nav-menu-items'>
            {SidebarData.map((item,index)=> {
                return (
                    
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                        </Link>
                    </li>
                );
            })}
        </ul>
    </nav>
    </>
  );
}

export default navbar;