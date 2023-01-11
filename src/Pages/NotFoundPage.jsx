import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx";

function NotFoundPage() {
    return (
        <div>
            <div className='columns-2'>
                <p className='text-xl p-6 text-[#D9D9D9] font-bold font-["Open Sans"]'>adam pedley</p>
                <div className='flex justify-end'>
                    <Navbar />
                </div>
            </div>

            <div className="flex justify-center">
                <p className="text-white text-[10vh] mt-40 font-[TTTricks-Light] text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    404
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-white text-4xl mt-10 font-[Georgia]">
                    Woops, that page isn't found
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-white text-2xl mt-10 font-[Georiga]">
                    You can to the home page <Link to="/" className="underline-item underline">here</Link>.
                </p>
            </div>
        </div>
    )
}

export default NotFoundPage;