import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'

function ActionPoint() {
  
  return (
    <div>
        <div className='columns-2'>
            <p className='text-xl p-6 text-[#D9D9D9] font-bold font-["Open Sans"]'>adam pedley</p>
            <div className='flex justify-end'>
                <Navbar />
            </div>
        </div>

        <div className="sm:mx-[50vh] mx-[5vh] mt-20">
            <div className="flex">
                <div className="text-white text-6xl font-[TTTricks-Light] text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    Action Point UK
                </div>
            </div>

            <p className="text-cyan-500 italic">
                Dynamic Site
            </p>

            <div className="grid grid-rows-4 grid-flow-col -mb-32">
                <div className="text-white mt-5 p-2">
                    <span className="border-b-4 border-cyan-500 p-2">
                        <i className="devicon-codeigniter-plain text-[#FF5925]"></i> Codeigniter
                    </span>
                    <span className="border-b-4 border-cyan-500 ml-5 p-2">
                        <i className="devicon-php-plain text-[#4F5B93]"></i> PHP
                    </span>
                </div>
            </div>

                <div className="text-white -mt-28 mb-5 text-3xl font-[Open Sans] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    About the project
                </div>
                <p className="text-white text-xl font-[Georgia]">
                    This project was completed in 2019 for charity & voluntary organisation Action Point.
                    <br />
                    The client wanted a simple, responsive dynamic brochure site.<br /><br />
                    It was my first time using the PHP web framework Codeigniter, it's pretty
                    good for a simple website like this, without the need for the bloat of something like Laravel.
                </p>
                <br />

                <img className='w-[70vh] text-center m-2 border-4' src={ActionPoint1} />

                <div className="text-white text-3xl font-[Open Sans] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    The UI
                </div>
                <p className="text-white mt-5 text-xl font-[Georgia]">
                    The client wanted to focus on keeping things simple, accessible and responsive, so that's what we did.
                    <br />
                    Colour schemes we went for were white & orange with accents of blue. A contrast of deep greys works well against
                    the lighter colours, providing an eye catching UI.
                </p>

                <div className="text-white text-3xl font-[Open Sans] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    Backend
                </div>
                <p className="text-white mt-5 text-xl font-[Georgia] mb-10">
                    For the backend we set up a simple MySQL database, providing CMS-Style functionality with Codeigniters help.
                    The authentication that comes with Codeigniter worked perfectly to provide our users system.
                </p>

        </div>

    </div>

    
  )
}

export default ActionPoint;
import ActionPoint1 from '/src/assets/actionpoint-1.png'
