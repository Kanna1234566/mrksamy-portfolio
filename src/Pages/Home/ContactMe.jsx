import email from '../../assets/img/email.png';
import linkedin from '../../assets/img/linkedin.png'

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:kandhas808@gmail.com">
            kandhas808@gmail.com
            </a>
          </p>
        </div>
        <div class="contact-info-container">
          <img
            src={linkedin}
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/kandha-samy-a76a78319/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
