import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'

function InteriorQuiz() {
  
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
                    Interior Quiz
                </div>
            </div>

            <p className="text-cyan-500 italic">
                Dynamic Site
            </p>

            <div className="grid grid-rows-4 grid-flow-col -mb-32">
                <div className="text-white mt-5 p-2">
                    <span className="border-b-4 border-cyan-500 p-2">
                        <i className="devicon-javascript-plain text-[#FF5925] align-middle"></i> JavaScript
                    </span>
                    <span className="border-b-4 border-cyan-500 ml-5 p-2">
                        <i className="devicon-php-plain text-[#4F5B93] align-middle"></i> PHP
                    </span>
                    <span className="border-b-4 border-cyan-500 ml-5 p-2">
                        <i className="devicon-postgresql-plain text-[#31648C] align-middle"></i> Postgres
                    </span>
                </div>
            </div>

                <div className="text-white mb-5 text-3xl font-[Open Sans] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    About the project
                </div>
                <p className="text-white text-xl font-[Georgia]">
                    This project was completed in 2021, it was a project for a clients startup interior design service.
                    <br />
                    Our aim for this project was to provide a simple quiz to gather information from clients. This quiz tracks the
                    customers desired styles for each room in they are wanting to be designed. We also provide functionality
                    where the user can upload their own photo inspirations.
                </p>
                <br />

                <img className='w-[70vh] text-center mt-2 border-4' src={InteriorQuiz1} />

                <div className="text-white text-3xl font-[Open Sans] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    The UI
                </div>
                <p className="text-white mt-5 text-xl font-[Georgia]">
                    The UI for this project was simple but effective, giving the end-user a simple way to record their options.
                    The colour scheme we used here were the brands colours, incorporating matching images for a nice contrast.
                    <br />
                </p>

                <div className="text-white text-3xl font-[Open Sans] font-bold mt-10 text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]">
                    Backend
                </div>
                <p className="text-white mt-5 text-xl font-[Georgia] mb-10">
                    The back-end needed to be a pretty robust system, allowing for a lot of options for each user to be recorded.<br />
                    Postgres appeared to be the best option for this, the project is also small enough to not worry about ORM or migration.
                    <br /><br />
                    I made the most of using session storage in this project, recording the last pages data in a GET request to then store the relevant data in the session.<br /><br />
                    At the end of the project, we store all the data in our Postgres database. A simple admin page is also made to fetch data from each submission.
                    <br />
                    <img className='w-[90vh] text-center mt-2 border-4' src={InteriorQuiz2} />
                </p>

        </div>

    </div>

    
  )
}

export default InteriorQuiz;
import InteriorQuiz1 from '/src/assets/interior-1.png';
import InteriorQuiz2 from '/src/assets/interior-2.png';

