import "./styles/Contact.css"
import { AddTitle, Footer } from "./Components";
import Email from "./assets/icons/email-mono.svg";
import EmailColor from "./assets/icons/email.svg";
import Linkedin from "./assets/icons/linkedin-mono.svg"
import LinkedinColor from "./assets/icons/linkedin.svg"
import Github from "./assets/icons/github-mono.svg"
import GithubColor from "./assets/icons/github.svg"
export default function Contact() {
    return (
        <>
            <AddTitle title="Contact" />
            <ContactSection></ContactSection>
            <Footer/>
        </>
    );
}

function ContactSection() {
    return (
        <div className="container contact-container">
            <a href="mailto:mail2shafeek.sa@gmail.com" className="email-box contact-box"><div className="email-icon contact-icon"></div></a>
            <a href="https://www.linkedin.com/in/mshafeeksa" className="linkedin-box contact-box" target="_blank" rel="noreferrer noopener"><div className="linkedin-icon contact-icon"></div></a>
            <a href="https://github.com/mshafeeksa" className="github-box contact-box" target="_blank" rel="noreferrer noopener"><div className="github-icon contact-icon"></div></a>
        </div>
    );
}