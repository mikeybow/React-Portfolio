import React from "react";
import github from "../public/images/github-mark.png";
import groupWork from "../public/images/group-work-photo.jpg";
import code from "../public/images/code.png";
import indeed from "../public/images/indeed.jpg";
import resumeImg from "../public/images/resume-icon-16.png";
import resume from "../public/images/Michael-Bowman-Resume.pdf"

const Portfolio = () => {
    return(
        <div className="container">
            <section className="main-section">
                <h2 id="portfolio">Portfolio</h2>
                <hr/>
                <div className="games-row">
                    <div className="games">
                        <img src={github} alt=""/>
                        <h3>GitHub Link</h3>
                        <a href="https://github.com/" alt="">GitHub</a>
                    </div>
                    <div className="games">
                        <img src={groupWork} alt=""/>
                        <h3>Projects</h3>
                        <div><a href="https://armills21.github.io/CarProject/">Project One</a></div>
                        <a href="https://myherocomics.herokuapp.com/">Project Two</a>
                    </div>
                </div>

                <div className="games-row">
                    <div className="games">
                        <img src={code} alt=""/>
                        <h3>Homework</h3>
                        <a href="https://mikeybow.github.io/Homework-6/">Homework Two</a>
                        <a href="https://mikeybow.github.io/Homework-3/">Homework Three</a>
                        <a href="https://burger-heroku8394.herokuapp.com/">Homework Six</a>
                        <a href="https://progressivebudget93940.herokuapp.com/">Homework Seven</a>
                    </div>
                </div>
                    <div className="games-row">
                        <div className="games">
                            <img src={indeed} alt=""/>
                            <h3>Linkedin</h3>
                            <a href="https://www.linkedin.com/in/michael-bowman-a0b225197/">Linkedin Account</a>
                        </div>
                    </div>

                <div className="games-row">
                    <div className="games">
                        <img src={resumeImg} alt=""/>
                        <h3>Resume</h3>
                        <a href={resume}>My Resume</a>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Portfolio;