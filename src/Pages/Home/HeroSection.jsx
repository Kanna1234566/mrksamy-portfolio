import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Kandha from '../../assets/img/Kandha.jpeg';
import resume from '../../assets/img/KandhaProfile.pdf';
import linkedin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png'
import {ReactJs, JavaScript, GitHub} from "../ThreeDScene/ThreeDScene";

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      // Customize AOS initialization options here if needed
    });
  }, []);
  const openResume = () => {
    window.open(resume, "_blank");
  };

  const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="heroSection" className="hero--section">
      <div
        className="hero--section--content--box"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div style={{marginTop:40}} className="hero--section--content"  >
          <p className="section--title">Hey, I'm Kandhasamy</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Creating Engaging User Experiences with React, React Native, HTML,
            CSS, and JavaScript. Dive into my portfolio to explore my latest
            projects and
            <br /> see how I bring creativity and functionality together!
          </p>
        </div>
        <div className="btn-container">
          <button className="btn btn-primary" onClick={openResume}>
            Download CV
          </button>
          <button className="btn btn-primary" onClick={scrollToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/kandha-samy-a76a78319/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>

          <a
            href="https://github.com/Kanna1234566"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="My GitHub profile"
              className="icon"
            />
          </a>
        </div>
      </div>
      <div
        className="hero--section--content--box"
        data-aos="fade-left"
        data-aos-duration="3000"
        style={{width:"100%", display:"flex", justifyContent:"center"}}
      >
        <div  style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <ReactJs />
          <h2>React Native</h2>
        </div>
        <div  style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <JavaScript />
          <h2>Java Script</h2>
        </div>
        <div  style={{width:"100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
        <GitHub />
          <h2>GitHub</h2>
        </div>
       


        
        {/* <img src={Kandha} alt="Hero Section" /> */}
      </div>
    </section>
  );
}
