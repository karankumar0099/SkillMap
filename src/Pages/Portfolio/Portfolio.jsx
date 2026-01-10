import React from 'react';
import './Portfolio.css';
import myPic from '../../assets/2.jpeg';
import logo from '../../assets/logo.png';

export function Hero(props) {
    const showAlert = () => {
        alert("Resume Downloaded Successfully!");
    };

    return (
        <section className="portfolio-home" id="home">
            <div className="portfolio-hero">

                <div className="portfolio-first">
                    <h1 className="portfolio-head">Hello, Welcome </h1>

                    <p className="portfolio-para">
                        I am a BCA student at Dronacharya PG College of Education, Rait, and a
                        passionate Flutter Developer and UI/UX Designer. I enjoy creating
                        clean, modern and user-friendly apps.
                        <br /><br />
                        I recently completed my internship at Development Logistics, where I
                        worked with Flutter, Dart, and Firebase.
                        <br /><br />
                        My goal is to become a Full-Stack Developer and create meaningful
                        digital products.
                    </p>

                    <button className="portfolio-btn" onClick={showAlert}>
                        Download Resume
                    </button>
                </div>

                <div className="portfolio-second">
                    <img src={myPic} alt="Karan Kumar" />
                </div>

            </div>
        </section>
    );
}

export function About(props) {
    return (
        <section className="portfolio-about-page" id="about">
            <div className="portfolio-about-container">

                <div className="portfolio-about-image">
                    <img src={myPic} alt="Karan Kumar" />
                </div>

                <div className="portfolio-about">
                    <h1>About Me </h1>

                    <p className="portfolio-about-description">
                        I am <strong>Karan Kumar</strong>, a BCA student and Flutter Developer
                        with a strong passion for UI/UX design. I love creating simple,
                        modern and user-friendly applications with smooth animations and
                        clean interfaces.
                    </p>

                    <div className="portfolio-about-cards">
                        <div className="portfolio-card">
                            <h3>Skills</h3>
                            <p>Flutter, Dart, HTML, CSS, Firebase, UI/UX Design</p>
                        </div>

                        <div className="portfolio-card">
                            <h3>Experience</h3>
                            <p>Flutter Developer Intern — Development Logistics</p>
                        </div>

                        <div className="portfolio-card">
                            <h3>Goal</h3>
                            <p>To become a Full-Stack Developer and build meaningful products.</p>
                        </div>

                        <div className="portfolio-card">
                            <h3>Interests</h3>
                            <p>App Design, Motion UI, Accessibility, UX Research</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export function Project() {
    return (
        <section className="portfolio-project-page" id="project">
            <h1 className="portfolio-project-title">My Projects</h1>

            <div className="portfolio-project-container">

                <div className="portfolio-project-card">
                    <img src={logo} alt="CareConnect" />
                    <h2>CareConnect App</h2>
                    <p>
                        CareConnect is a Flutter app with chat, maps, AI assistant and
                        volunteer mode—built to help communities connect.
                    </p>



                    <p className="portfolio-tech">Tech: Flutter, Firebase</p>
                    <button className="portfolio-btn">View Project</button>
                </div>

                <div className="portfolio-project-card">
                    <img src={logo} alt="UI UX Redesign" />
                    <h2>UI/UX Redesign</h2>
                    <p>
                        A modern UI/UX redesign for mobile apps focused on smooth animations
                        and simple flows.
                    </p>



                    <p className="portfolio-tech">Tech: Figma → Flutter UI</p>
                    <button className="portfolio-btn">View Project</button>
                </div>

                <div className="portfolio-project-card">
                    <img src={logo} alt="Portfolio Website" />
                    <h2>Portfolio Website</h2>
                    <p>
                        A clean and modern portfolio site built with HTML & CSS to showcase
                        my work and skills.
                    </p>



                    <p className="portfolio-tech">Tech: HTML, CSS</p>
                    <button className="portfolio-btn">View Project</button>
                </div>

            </div>
        </section>
    );
}




export default function Portfolio(props) {
    return (
        <div className="portfolio-wrapper">
            <h1 className="portfolio-main-title">PORTFOLIO</h1>
            <Hero />
            <About />
            <Project />

        </div>
    );
}
