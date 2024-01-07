import "./styles/Components.css"
import Github from "./assets/icons/github.svg"
export function AddTitle({ title }) {
    return (
        <>
            <NavbarSpaceHolder/>
            <div className="title-wrapper">
                <div className="title-side-container">
                    <div className="top-box inner-box"></div>
                    <div className="bottom-box inner-box"></div>
                </div>
                <div className="title-container">&lt;{title}/&gt;</div>
                <div className="title-side-container">
                    <div className="top-box inner-box"></div>
                    <div className="bottom-box inner-box"></div>            
                </div>
            </div>
        </>
    );
}

export function NavbarSpaceHolder() {
    return <div className="navbar-height"></div>
}

export function Footer() {
    return (
        <footer>
                <div className="footer-text">Made with ❤️ and React.js by Mohammed Shafeek, 2023</div>
                <a href="https://github.com/mshafeeksa/my-portfolio" target="_blank" rel="noreferrer noopener"><img src={Github} alt="Github" className="footer-logo" /></a>
        </footer>
    );
}