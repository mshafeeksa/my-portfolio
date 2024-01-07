import "./styles/Portfolio.css"
import { AddTitle } from "./Components"
import { portfolioData } from "./data";

export default function Portfolio() {
    return (
        <>
            <AddTitle title="Portfolio" />
            <AddPortfolio/>
        </>
    );
}

function AddPortfolio() {
    return (
        <div className="portfolio-container container">
            {portfolioData.map((project,index) => {
                return (
                    <div key={project.id} className="project-box">
                        <div className={`project-left ${(index%2===0) ? 'left-hidden' : 'right-hidden'}`}>
                            <div className="dummy-div"></div>
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <div className={`project-right ${(index%2===0) ? 'right-hidden' : 'left-hidden'}`}>
                            <h1 className="project-title">{project.title}</h1>
                            <h2 className="project-type">{`${project.type}  (using ${project.tech})`}</h2>
                            <div className="project-description">{ project.description}</div>
                            <div className="project-button-area">
                                <a href={project.preview} className="project-preview" target="_blank" rel="noreferrer noopener">
                                    <div className="project-preview-button button">
                                        <div className="button-text">&lt;Live/&gt;</div>
                                        <div className="button-logo"></div>
                                    </div>
                                </a>
                                <a href={project.source} className="project-source" target="_blank" rel="noreferrer noopener"s><div className="project-source-button button">
                                <div className="button-text">&lt;Source/&gt;</div></div></a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}