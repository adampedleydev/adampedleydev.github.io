import React, { useState } from "react";
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Navbar = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
                <ul className="p-6 flex  sm:flex inline-flex mt-10 rounded-lg border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-d md:font-medium md:border-0">
                    <li>
                    <Link to="/" className="underline-item block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:p-0 dark:text-white" aria-current="page">home</Link>
                    </li>
                    <li>
                        <AnchorLink a href="#about" className="underline-item block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">about</AnchorLink>
                    </li>
                    <li>
                    <AnchorLink href="#projects" className="underline-item block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">projects</AnchorLink>
                    </li>
                    <li>
                        <Link to={cv} target={"_blank"} className="underline-item block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">resume</Link>
                    </li>
                    <li>
                    <a onClick={() => Beacon('open')} className="underline-item block py-2 pr-4 pl-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">contact</a>
                    </li>
                </ul>
        </div>
    )
}


export default Navbar;

import cv from '/src/assets/Adam-Pedley-CV.pdf'
