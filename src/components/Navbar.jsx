import React, { useState } from "react";
import {  FaAngleDown, FaToggleOn} from "react-icons/fa";
import { FaCartShopping} from "react-icons/fa6";

export default function Navbar(){
    const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light');
    function changeTheme(){
        setTheme((theme=='light'?'dark':'light'));
        
    }
    if(theme=='light')
        {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        }
        else
        {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');

        }
    return (
        <div className="h-20 flex justify-around items-center shadow-lg dark:bg-gray-900 dark:text-white">
            <div className="flex h-full gap-2 items-center w-4/12 justify-center"> 
                <img src="https://sulcdn.azureedge.net/biz-live/img/wisdom-institute-of-competitive-exams-10171126-cfa4dcec.jpeg" className="w-14 h-14 " ></img>
                <h1 className="text-xl font-bold text-primary dark:text-white">KitaabGhar</h1>
            </div>
            <div className="hidden md:flex w-4/12 h-full items-center justify-center " >
                <ul className="flex justify-evenly gap-5">
                <li><a className="text-xl font-bold cursor-pointer dark:text-darksecondary text-secondary text-opacity-80 hover:text-opacity-100 delay-100">Home</a></li>
                <li><a className="text-xl font-bold cursor-pointer  dark:text-darksecondary text-secondary text-opacity-80 hover:text-opacity-100 delay-300">Best Sellers</a></li>
                <li><a className="text-xl flex gap-1 font-bold dark:text-darksecondary cursor-pointer text-secondary text-opacity-80 hover:text-opacity-100 delay-300">Quick Links<FaAngleDown/></a></li>
                </ul>
            </div>
            <div className="flex w-4/12 h-full items-center justify-center gap-5" >
                <FaToggleOn className="text-2xl dark:rotate-180" onClick={changeTheme} ></FaToggleOn>
                <FaCartShopping className="text-2xl"></FaCartShopping>
                <button className="bg-pink-600 pr-4 pl-4 p-2 text-white font-medium rounded-full hover:scale-105">Login</button>
            </div>
            
        </div>
    )
}