import {RiStoreLine,RiHome2Line,RiSettings2Line,RiVipDiamondFill } from "react-icons/ri";
import {BiTachometer,BiConversation,BiUserCircle} from 'react-icons/bi'
import {BsPeople,BsFolder} from 'react-icons/bs'

import React from "react";
export const SidebarData =[
    {
        path:'/main',
        icon: <RiVipDiamondFill />,
        cName: 'navtext'
    },
    {
        title: 'Home',
        path:'/main/compass',
        icon: <BiTachometer />,
        cName: 'nav-text'
    },
    {
        title: 'compass',
        path:'/main/home',
        icon: <RiHome2Line />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path:'/main/people',
        icon: <BsPeople />,
        cName: 'nav-text'
    },
    {
        title: 'compass',
        path:'/main/conversation',
        icon: <BiConversation />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path:'/main/folder',
        icon: <BsFolder />,
        cName: 'nav-text'
    },
    {
        title: 'compass',
        path:'/main/store',
        icon: <RiStoreLine />,
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path:'/main/settings',
        icon: <RiSettings2Line />,
        cName: 'nav-text'
    },
    {
        title: 'compass',
        path:'/main/profile',
        icon: <BiUserCircle />,
        cName: 'nav-text'
    },

]