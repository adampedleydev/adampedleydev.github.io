import { useState } from 'react'
import Typer from '../components/Typer'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div  className='bg-cover' style={{height: "120vh", backgroundImage: `url(${Background})`}}>
                <div className='relative overflow-hidden'>
                    <div className='columns-2'>
                        <p className='text-xl p-6 text-[#D9D9D9] font-bold font-["Open Sans"]'>adam pedley</p>
                        <div className='flex justify-end'>
                            <Navbar />
                        </div>
                    </div>
                    <div
                        className='flex mx-2 mt-40 ml-20 text-8xl text-[#D9D9D9] font-["TTTricks-Light"] text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]'>
                        Hi, I'm Adam.
                    </div>
                    <div
                        className='flex mx-2 ml-20 text-8xl text-[#D9D9D9] font-["TTTricks-Light"] text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#f093b0] to-[#edca85]'>
                        <span style={{marginRight: '1.5rem'}}>I'm a </span> <Typer/>
                    </div>
                    <div
                        className='flex m-2 mt-10 ml-20 text-2xl text-[#D9D9D9] font-["Open Sans"] font-thin text-transparent bg-clip-text bg-gradient-to-r from-[#a0e9ff] via-[#a162e8] to-[#edca85]'>
                        I’m a web developer, software engineer, designer and<br/>musician from the United Kingdom.
                    </div>
                </div>

                <div className='flex ml-20 mx-2 mt-20'>
                    <a href="https://twitter.com/adampedley_dev" target="_blank">
                        <img className='w-24 hover:scale-105 ease-in duration-200' src={twitter}/><br/>
                    </a>
                    <a href="https://github.com/adampedleydev" target="_blank">
                        <img className='w-24 hover:scale-105 ease-in duration-200' src={github}/><br/>
                    </a>
                    <a href="#">
                        <img className='w-24 hover:scale-105 ease-in duration-200' src={behance}/><br/>
                    </a>
                </div>

                <div className='float-right -mt-80'>
                    <img className='w-3/2 max-sm:hidden mr-10' src={Astronaut} />
                </div>
            </div>

            <div id="about" className='flex'>
                <div className='m-auto'>
                    <div className='border-t-2 border-cyan-500 w-10 m-auto'></div>
                    <span className='font-["TTTricks-Light"] text-4xl text-[#D9D9D9]'>About Me</span>
                </div>
            </div>

            <div className='flex justify-center'>
                <p className="text-white text-2xl">
                    <div className="container font-[Georgia] text-[#D9D9D9] mt-10 text-center">
                        Hey there! My name is Adam and I'm a web developer, musician, and designer hailing from England.<br/>
                        I've been building websites longer than I can remember, and have experience in both <span className="border-b-4 border-b-cyan-500">front-end</span> and <span className="border-b-4 border-b-cyan-500">back-end</span> development.<br />
                        When I'm not coding, you can find me making music or tinkering with design projects.<br />
                        <br />
                        Thanks for stopping by my portfolio, it's made with React and TailwindCSS.
                        <br /><br />
                        Feel free to reach out to me on Twitter at <a href="https://twitter.com/adampedley_dev" target="_blank" className="border-b-4 border-b-cyan-500">@AdamPedleyDev</a>
                    </div>
                </p>
            </div>

            <div id="projects" className='flex mt-20'>
                <div className='m-auto'>
                    <div className='border-t-2 border-cyan-500 w-10 m-auto'></div>
                    <span className='font-["TTTricks-Light"] text-4xl text-[#D9D9D9]'>Projects</span>
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to="ActionPoint">
                    <div className='item w-96 m-20 opacity-80 hover:opacity-100 ease-in hover:scale-105 duration-100'>
                        <img src={Project1}></img>
                        <span className='text-white text-2xl font-["Georgia"] font-extrabold tracking-wide'>Action Point UK</span>
                    </div>
                </Link>
                <Link to="InteriorQuiz">
                    <div className='item w-96 m-20 opacity-80 hover:opacity-100 ease-in hover:scale-105 duration-100'>
                        <img src={Project2}></img>
                        <span className='text-white text-2xl font-["Georgia"] font-extrabold tracking-wide'>Interior Design Quiz</span>
                    </div>
                </Link>
                <div className='item w-96 m-20 opacity-80 hover:opacity-100 ease-in hover:scale-105 duration-100'>
                    <img src={Project3}></img>
                    <span className='text-white text-2xl font-["Georgia"] font-extrabold tracking-wide'>Architecture Calculator</span>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='item w-96 m-20 opacity-80 hover:opacity-100 ease-in hover:scale-105 duration-100'>
                    <img src={Project4}></img>
                    <span className='text-white text-2xl font-["Georgia"] font-extrabold tracking-wide'>Architecture Portal</span>
                </div>
                <div className='item w-96 m-20 opacity-80 hover:opacity-100 ease-in hover:scale-105 duration-100'>
                    <img src={Project5}></img>
                    <span className='text-white text-2xl font-["Georgia"] font-extrabold tracking-wide'>Keighley Community Transport</span>
                </div>
                <div className='item w-96 m-20 opacity-80 hover:opacity-100 ease-in hover:scale-105 duration-100'>
                    <img src={Project6}></img>
                    <span className='text-white text-2xl font-["Georgia"] font-extrabold tracking-wide'>Portfolio (this site!)</span>
                </div>
            </div>

            <div className='flex'>
                <div className='m-auto'>
                    <div className='border-t-2 border-cyan-500 w-10 m-auto'></div>
                    <span className='font-["TTTricks-Light"] text-4xl text-[#D9D9D9]'>Get in Touch</span>
                </div>
            </div>

            <div className='flex justify-center mb-10'>
                <div className="m-auto border-4 border-cyan-500 w-2/4 text-center text-white mt-10 text-3xl p-5">
                    <span className="font-[Georgia]">
                        Have any questions or want to work together?
                    </span><br />
                    <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold p-3 rounded mt-5 text-xl mb-2" onClick={() => Beacon('open')}>
                         Say Hi👋
                    </button><br />
                    <span className="text-white text-2xl font-[Georgia] m-10">
                        <a href={"https://github.com/adampedleydev"} target={"_blank"} className="underline-item">Github</a> | <a href={"./src/assets/Adam-Pedley-CV.pdf"} target={"_blank"} className="underline-item">Resume</a> | <a href={"https://www.linkedin.com/in/adam-pedley/"} target={"_blank"} className="underline-item">LinkedIn</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Home;

import Background from '/src/assets/background-cover.svg'
import Astronaut from '/src/assets/astronaut.svg'
import Project1 from '/src/assets/project_1.svg'
import Project2 from '/src/assets/project_2.svg'
import Project3 from '/src/assets/project_3.svg'
import Project4 from '/src/assets/project_4.svg'
import Project5 from '/src/assets/project_5.svg'
import Project6 from '/src/assets/project_6.svg'

import github from '/src/assets/social/github.svg'
import twitter from '/src/assets/social/twitter.svg'
import behance from '/src/assets/social/behance.svg'

import Navbar from "../components/Navbar.jsx";

