import React from 'react';
import { useEffect } from "react";

import './skills.css'

import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {

    useEffect(() => {
        AOS.init({
            duration: 800,   // zoom-in speed
            once: true       // onetime animation
        });
    }, []);

    return (
        <>
            <div className="skills-page">
                <h1 className='title'>  My Skills  </h1>

                <div className="my-skills">
                    <div className="Technical-Skills">
                        <h2> Technical Skills </h2>

                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <ImHtmlFive className='icon icon1' />
                                <p> <strong> HTML </strong></p>
                            </div>
                            <p> <strong> 95% </strong></p>
                            <div className="line line-1" style={{ "--w": "95%" }} />
                        </div>


                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <FaCss3 className='icon icon2' />
                                <p> <strong> CSS </strong></p>
                            </div>
                            <p> <strong> 90% </strong></p>
                            <div className="line line-1" style={{ "--w": "90%" }} />
                        </div>

                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <FaBootstrap className='icon icon3' />
                                <p> <strong> Bootstrap </strong></p>
                            </div>

                            <p> <strong> 80% </strong></p>
                            <div className="line line-1" style={{ "--w": "80%" }} />
                        </div>


                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <IoLogoJavascript className='icon icon4' />
                                <p> <strong> Javascript </strong></p>
                            </div>

                            <p> <strong> 85% </strong></p>
                            <div className="line line-1" style={{ "--w": "85%" }} />
                        </div>

                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <RiReactjsLine className='icon icon5' />
                                <p> <strong> React.js </strong></p>
                            </div>

                            <p> <strong> 80% </strong></p>
                            <div className="line line-1" style={{ "--w": "80%" }} />
                        </div>

                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <FaNode className='icon icon6' />
                                <p> <strong> Node.js </strong></p>
                            </div>

                            <p> <strong> 75% </strong></p>
                            <div className="line line-1" style={{ "--w": "75%" }} />
                        </div>

                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <SiMongodb className='icon icon7' />
                                <p> <strong> MongoDB </strong></p>
                            </div>

                            <p> <strong> 70% </strong></p>
                            <div className="line line-1" style={{ "--w": "70%" }} />
                        </div>

                        <div data-aos="zoom-in" className="number-1">
                            <div className="lef">
                                <AiFillCode className='icon icon8' />
                                <p> <strong> Express.js </strong></p>
                            </div>

                            <p> <strong> 70% </strong></p>
                            <div className="line line-1" style={{ "--w": "70%" }} />
                        </div>

                    </div>

                    <div className="soft-skills">
                        <h2> Soft Skills </h2>

                        <div className="radial-bars">

                            <div data-aos="fade-up" className="radial-bar">
                                <h3 className="text">  Responsive Design </h3>
                                <div className="precentage"> <strong> 95% </strong></div>
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                    <circle
                                        className='path path-1'
                                        cx="100" cy="100" r="80"
                                        style={{ "--offset": "50" }} // for 40% fill
                                    ></circle>

                                </svg>
                            </div>

                            <div data-aos="fade-up" className="radial-bar">
                                <h3 className="text"> Problem Solving  </h3>
                                <div className="precentage"> <strong> 80% </strong></div>
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                    <circle
                                        className='path path-1'
                                        cx="100" cy="100" r="80"
                                        style={{ "--offset": "150" }} // for 40% fill
                                    ></circle>

                                </svg>
                            </div>

                            <div data-aos="fade-up" className="radial-bar">
                                <h3 className="text"> Teamwork </h3>
                                <div className="precentage"> <strong> 90%</strong> </div>
                                <svg x="0px" y="0px" viewBox="0 0 200 200">
                                    <circle className='progress-bar' cx="100" cy="100" r="80"></circle>
                                    <circle
                                        className='path path-1'
                                        cx="100" cy="100" r="80"
                                        style={{ "--offset": "100" }} 
                                    ></circle>

                                </svg>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}