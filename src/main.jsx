import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './About'
import Contact from './Contact'
import Portfolio from './Portfolio'
import InsertAvatar from './Avatar'
import './styles/index.css'
import './styles/animations.css'
import { addIntersectionObservers } from './animation'
import {startHelloScreen,hideHelloScreen} from './helpers'

ReactDOM.createRoot(document.getElementById('about-page')).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('contact-page')).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('portfolio-page')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('avatar-div')).render(
  <React.StrictMode>
    <InsertAvatar />
  </React.StrictMode>,
)



window.onload = () => {
  const helloScreen = document.querySelector(".hello-screen")
  setTimeout(startHelloScreen, 1000);
  helloScreen.addEventListener("animationend", hideHelloScreen);
  addIntersectionObservers();
}

// eslint-disable-next-line no-unused-vars
const initializer = (function () {
  let isDark = false;
  const sections = document.querySelectorAll(".page-section");
  const navs = document.querySelectorAll("#nav-bar a");

  window.onscroll = () => {
    //this part sets the nav bar icon to active according to the position in page
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 350) {
        current = section.getAttribute("id");
      }
    });
    let checkId = current + "-link"
    navs.forEach((nav) => {
      nav.classList.remove("active");
      if (nav.id === checkId) {
        nav.classList.add("active");
      }
    });
    //This part changes the color scheme of webpage when scrolling down
    const remainingPage = document.querySelector("#remaining-page");
    const remainingPageTop = remainingPage.offsetTop;
    if (scrollY >= remainingPageTop - 450 && !isDark) {
      isDark = !isDark;
      changeColorScheme(isDark);
    }
    else if (scrollY < remainingPageTop - 450 && isDark) {
      isDark = !isDark;
      changeColorScheme(isDark)
    }

  }
})();

  function changeColorScheme(isDark) {
    let body = document.querySelector("body");
    if (isDark) {
      body.classList.remove("light");
      body.classList.add("dark");
    }
    else {
      body.classList.remove("dark");
      body.classList.add("light");      
    }
  }


