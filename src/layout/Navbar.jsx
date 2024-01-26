import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import newsParam from './newsapi_requestparameters.json'
import { MdLanguage } from "react-icons/md";
import { RiMoneyEuroCircleLine } from "react-icons/ri";

const Navbar = () => {

    const [ language, setLanguage ] = useState( "en" );

    return (


        <nav>

            <div className="navbar rounded-md py-6 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Om os</a></li>
                        <li>
                            <a>Vi tilbyder</a>
                            <ul className="p-2">
                                <li><a>Værelser</a></li>
                                <li><a>Restaurant</a></li>
                                <li><a>Restaurant</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src="assets/Billeder/logo/NewLogo.png" alt="" className='w-40'/></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal uppercase">
                        <li>
                            <details>
                                <summary>Vi tilbyder</summary>
                                <ul className="p-2">
                                    <li>
                                        <NavLink to="/vejret" className='hover:bg-green-500' >
                                            Værelse
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret2" className='hover:bg-green-500' >
                                            Restaurant
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret3" className='hover:bg-green-500' >
                                            Aktiviteter
                                        </NavLink>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Tilbud</summary>
                                <ul className="p-2">
                                    <li className='w-36'>
                                        <NavLink to="/vejret" className='hover:bg-green-500' >
                                            Lej af hele vandrerhjemmet
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret2" className='hover:bg-green-500' >
                                            Lej af konferencelokalet
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret3" className='hover:bg-green-500' >
                                            Lej af togvogn
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret3" className='hover:bg-green-500' >
                                            Konfirmationer
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret3" className='hover:bg-green-500' >
                                            Brylluper
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/vejret3" className='hover:bg-green-500' >
                                            Events
                                        </NavLink>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Galleri
                            </NavLink>
                        </li>
                        <li>
                            <details>
                                <summary>Om os</summary>
                                <ul>
                                    <li>
                                        <NavLink to="/contact">
                                            Om os
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">
                                            Kontakt os
                                        </NavLink>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li className='bg-slate-100'>
                            <NavLink>Bestil Online</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="custom-dropdown">
                        <MdLanguage className="text-xl mr-6" />
                        <div className="custom-dropdown-content">
                            <ul>
                                {newsParam &&
                                    newsParam.language.map((c) => (
                                        <li key={c.code}>
                                            <button
                                                className="custom-dropdown-item"
                                                onClick={() => setLanguage(c.code)}
                                            >
                                                {c.language}
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className="custom-dropdown">
                        <RiMoneyEuroCircleLine className="text-xl" />
                        <div className="custom-dropdown-content">
                            <ul>
                                <li><button className="custom-dropdown-item">DKK</button></li>
                                <li><button className="custom-dropdown-item">EUR</button></li>
                                <li><button className="custom-dropdown-item">USD</button></li>
                                <li><button className="custom-dropdown-item">NOK</button></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar