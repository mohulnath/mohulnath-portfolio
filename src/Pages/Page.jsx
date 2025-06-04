import React, { useEffect, useRef, useState } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import Skills from '../Components/skills/skills'

import './Page.css'
import Images from '../assets/image';

import { TfiLinkedin } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import Contact from '../Components/Contact/contact';


export default function Page() {

    useEffect(() => {
        AOS.init({
          duration: 500, // Animation duration in milliseconds
          easing: 'ease-in-out', // Animation easing
          once: false, // Whether animation should occur only once
        });
      }, []);

    return (
        <>
            {/* PAGE ONE --- HOME-PAGE  */}

            <div id='home' className="Home-Page">

                <div className="left-content">
                    <h1 >Hi,</h1>
                    <h1 >I'm <span>Mohulnath</span></h1>
                    <h1 className='animates' >Web Developer</h1>
                    <div>
                        <button className='shadow__btn'><a href="#contact">Hire Me</a></button>

                        <button href="" className='shadow__btn'><a href="#project"> View works </a></button>
                    </div>
                    <div className="social">

                        <span>
                            <a href="https://www.linkedin.com/in/mohulnath04/"> <TfiLinkedin/> </a>
                           
                        </span>

                        <span>
                            <a href="https://github.com/mohulnath"> <FaGithub /> </a>
                            
                        </span>

                        <span>
                            <a href="https://wa.me/+919360712225"> <IoLogoWhatsapp /> </a>
                             
                        </span>

                    </div>
                </div>

                <div className="right-content">
                    <div>
                        <img src={Images.mohulpng} alt="" />
                    </div>
                </div>

            </div>

            {/* PAGE TWO --- ABOUT-PAGE  */}

            

            <div className="about-page">
                <div id='about' className="title"> <strong> About Me </strong> </div>
                <div className="two-contents">

                    <div data-aos="fade-right"

                      data-aos-duration="400"
                      data-aos-delay="100"
                      data-aos-offset="150"

                    className="left-side-content">
                        <img src={Images.mohul} alt="" />
                    </div>

                    <div data-aos="fade-up"
                    data-aos-duration="400"
                    data-aos-delay="300"
                    data-aos-offset="100"
                    className="right-side-content">
                        <div className="bio">
                            <h2>My Intro</h2>
                            <p> I'm a Full stack Web Developer with a passion for crafting scalable, user-centric applications. I thrive on solving complex problems and continuously explore emerging technologies to build innovative and efficient digital solutions. Driven by curiosity and a strong commitment to quality, I aim to deliver impactful results that exceed expectations. </p>
                        </div>

                        <div className="more">
                            <table className='profile-table'>

                                <tr>
                                    <td>Name</td>
                                    <td>Mohulnath.R</td>
                                </tr>
                                <tr>
                                    <td>Date of Birth</td>
                                    <td> November 18, 2003</td>
                                </tr>
                                <tr>
                                    <td>Email ID</td>
                                    <td>mohulnath005@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Phone Number</td>
                                    <td>+91 93607 12225</td>
                                </tr>
                            </table>


                        </div>

                        <button> <a href="https://drive.google.com/file/d/17_9DeVZsk28k-6VHP4fvUtCb18EUnF8L/view?usp=sharing"> Download CV </a>  </button>

                    </div>
                </div>
            </div>

            <div className="Education-card">
                <h1> My Education </h1>
                <div className="four-cards">
                    <div  data-aos="flip-up"  data-aos-delay="100" className="card-1">
                        <h2><strong> Bachelor of Science </strong></h2>
                        <h3>Electronics & Communication Systems</h3>
                        <p> Bharathiar University - Coimbatore </p>
                        <p>Gained core knowledge in electronics and communication with practical experience.
                            Built strong technical skills useful for a career in technology.
                        </p>
                        <div>2021 - 2024</div>
                    </div>
                    <div  data-aos="flip-up"  data-aos-delay="300" className="card-1">
                        <h2> <strong> SSLC </strong></h2>
                        <h3>High School (Class 10)</h3>
                        <p> State Board of Tamil Nadu </p>
                        <p>Completed Class 10 (SSLC) from Tamil Nadu State Board.
                            Built foundational knowledge across core subjects in high school.</p>
                        <div> 2018 - 2019 </div>
                    </div>
                    <div  data-aos="flip-up"  data-aos-delay="100" className="card-1">
                        <h2> <strong> HSC </strong></h2>
                        <h3>Higher Secondary (Class 11 & 12)</h3>
                        <p> State Board of Tamil Nadu </p>
                        <p>Completed Classes 11 & 12 specializing in computer applications.
                            Covered programming basics, software tools, and IT fundamentals.</p>
                        <div> 2019 - 2021 </div>
                    </div>
                    <div  data-aos="flip-up"  data-aos-delay="300" className="card-1">
                        <h2> <strong> Certification </strong> </h2>
                        <h3>Full-Stack Web Developer</h3>
                        <p> Code99 IT Academy, Chennai </p>
                        <p>Completed comprehensive training in front-end and back-end web development.
                            Gained hands-on experience with modern web technologies and frameworks.</p>
                        <div> 4 Months </div>
                    </div>
                </div>
            </div>

            {/* PAGE THREE --- SKILLS-PAGE  */}

           <div id='skill'>
           <Skills/>
            </div>

            {/* PAGE FOUR --- PROJECTS-PAGE  */}

            <div id='project' className="project-page">
                <h1 className='title'> <strong> My Projects </strong> </h1>

                <div className="my-project">

                    <div data-aos="zoom-in-up"  data-aos-delay="100" className="project-one">

                        <div className='image-box'>
                            <img src={Images.Helthcare} alt="" />
                        </div>

                        <div className="card-body">
                            <h2> Health center website </h2>
                            <p> Clean site for appointments & doctor info.
                                Built with Bootstrap.
                                Fast, clear, all screen responsive. </p>

                            <button> HTML </button>
                            <button> CSS </button>
                            <button> Bootstrap </button>

                            <div className='two-icon'>
                                <span> <a href="https://github.com/mohulnath/health-center-website"> <FaGithub className='giticon' /> </a> </span>
                                <span> <a href="https://mohulnath.github.io/health-center-website/"> <FaArrowUpRightFromSquare className='git' /> </a> </span>
                            </div>

                        </div>

                    </div>

                    <div data-aos="zoom-in-up"  data-aos-delay="250" className="project-one">

                        <div className='image-box'>
                            <img className='sca' src={Images.Spotifyclone} alt="" />
                        </div>

                        <div className="card-body">
                            <h2> Spotify Clone </h2>
                            <p> Music app with React & Tailwind.
                                Trending songs, smooth playback, mobile-ready.
                                Simple and sleek UI. </p>

                            <button> React.js </button>
                            <button> Tailwind </button>

                            <div className='two-icon'>
                                <span> <a href="https://github.com/mohulnath/react-spotify-clone"> <FaGithub className='giticon' /> </a> </span>
                                <span> <a href="https://react-spotifyy-clone.netlify.app/"> <FaArrowUpRightFromSquare className='git' /> </a> </span>
                            </div>

                        </div>

                    </div>

                    <div data-aos="zoom-in-up"  data-aos-delay="350" className="project-one">

                        <div className='image-box'>
                            <img src={Images.Flexwood} alt="" />
                        </div>

                        <div className="card-body">
                            <h2> Flexwood furniture shop </h2>
                            <p> Modern furniture site with cart & blog.
                                Smooth shopping experience.
                                Responsive with HTML, CSS, JS. </p>

                            <button> HTML </button>
                            <button> CSS </button>

                            <div className='two-icon'>
                                <span> <a href="https://github.com/mohulnath/flexwood-furniture-shop"> <FaGithub className='giticon' /> </a> </span>
                                <span> <a href="https://mohulnath.github.io/flexwood-furniture-shop/"> <FaArrowUpRightFromSquare className='git' /> </a> </span>
                            </div>

                        </div>

                    </div>

                    <div data-aos="zoom-in-up"  data-aos-delay="100" className="project-one">

                        <div className='image-box'>
                            <img src={Images.Icekey} alt="" />
                        </div>

                        <div className="card-body">
                            <h2> Icekey Landing Page </h2>
                            <p> Colorful landing page for ice cream flavors & deals.
                                Built with Bootstrap.
                                Sweet, simple, responsive. </p>

                            <button> HTML </button>
                            <button> CSS </button>
                            <button> Bootstrap </button>
                            <button> JavaScript </button>

                            <div className='two-icon'>
                                <span> <a href="https://github.com/mohulnath/ice-cream"> <FaGithub className='giticon' /> </a> </span>
                                <span> <a href="https://mohulnath.github.io/ice-cream/"> <FaArrowUpRightFromSquare className='git' /> </a> </span>
                            </div>

                        </div>

                    </div>

                    <div data-aos="zoom-in-up"  data-aos-delay="250" className="project-one">

                        <div className='image-box'>
                            <img src={Images.Crazycap} alt="" />
                        </div>

                        <div className="card-body">
                            <h2> Crazy Cap </h2>
                            <p> Smart UV-C bottle cap store with smooth animations.
                                Built using HTML, CSS, JS & AOS.
                                Clean, modern, and responsive. </p>

                            <button> HTML </button>
                            <button> CSS </button>
                            <button> Javascript </button>

                            <div className='two-icon'>
                                <span> <a href="https://github.com/mohulnath/CrazyCap-Website"> <FaGithub className='giticon' /> </a> </span>
                                <span> <a href="https://mohulnath.github.io/CrazyCap-Website/"> <FaArrowUpRightFromSquare className='git' /> </a> </span>
                            </div>

                        </div>

                    </div>

                    <div data-aos="zoom-in-up"  data-aos-delay="350" className="project-one">

                        <div className='image-box'>
                            <img src={Images.Oraginfruit} alt="" />
                        </div>

                        <div className="card-body">
                            <h2> Orgain Fresh Shop </h2>
                            <p> Online store for fresh, organic foods.
                                Product listings, blog & secure checkout.
                                HTML, CSS mobile-friendly. </p>

                            <button> HTML </button>
                            <button> CSS </button>

                            <div className='two-icon'>
                                <span> <a href="https://github.com/mohulnath/orgain-fresh-shop"> <FaGithub className='giticon' /> </a> </span>
                                <span> <a href="https://mohulnath.github.io/orgain-fresh-shop/"> <FaArrowUpRightFromSquare className='git' /> </a> </span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* //////////////////////// Contact //////////////////// */}

            <div id='contact'>
            <Contact />
            </div>

        </>
    )
}