import data from "../../data/index.json";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Typewriter } from "react-simple-typewriter";

export default function MySkills() {
  const [hoverIndex, setHoverIndex] = useState(null); // Track which card is hovered

  useEffect(() => {
    AOS.init({
      // Customize AOS initialization options here if needed
    });
  }, []);

  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className={`skills--section--card ${hoverIndex === index ? "hover" : ""}`}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="skills--section--card--content">
              <h3 className={`skills--section--title ${hoverIndex === index ? "hover-text" : ""}`}>
                {hoverIndex === index ? (
                  <Typewriter
                    words={[item.title]}
                    loop={1}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                ) : (
                  item.title
                )}
              </h3>
              <p className={`skills--section--description ${hoverIndex === index ? "hover-text" : ""}`}>
                {hoverIndex === index ? (
                  <Typewriter
                    words={[item.description]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                ) : (
                  item.description
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
