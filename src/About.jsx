
/* eslint-disable react/prop-types */
import { AddTitle } from "./Components";
import { aboutMe, specialPassage, mySkillSet } from "./data";
import "./styles/About.css"
export default function About() {
    return (
        <>
            <AddTitle title="About me" />
            <AddAboutMe about={aboutMe} extra={specialPassage} skills={mySkillSet} />
        </>
    );
}

function AddAboutMe({ about, extra, skills }) {
    return (<>
        <div className="container about-me-container">
            <div className="about-side left-hidden">
                <div className="about">{about}</div>
                <div className="extra">{extra}</div>
            </div>
            <div className="skillset-side right-hidden">
                <div className="skillset-box">
                    <div className="skillset-header">My Skill Set</div>
                    <div className="skillset-content">
                        {skills.map((skill) => <SkillIcon skillItem={skill} key={skill.id}/>)}
                    </div>
                </div>
            </div>
        </div>
    </>);
}


function SkillIcon({ skillItem = null}) {
    return (
        <div className="skill-box back-hidden">
            <img src={skillItem.image} alt={skillItem.text} className="skill-icon" />
            <div className="skill-text">{skillItem.text }</div>
        </div>
    );
}