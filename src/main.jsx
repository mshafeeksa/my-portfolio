import React from 'react'
import ReactDOM from 'react-dom/client'
import About from './about'
import './index.css'
import {startHelloScreen,hideHelloScreen} from './helpers'

ReactDOM.createRoot(document.getElementById('about-page')).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)

window.onload = () => {
  const helloScreen = document.querySelector(".hello-screen")
  setTimeout(startHelloScreen, 1000);
  helloScreen.addEventListener("animationend", hideHelloScreen);
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

// function changeColorScheme(isDark) {
//   let root = document.querySelector(":root");
//   let colorLight, colorEnd, colorMedium, colorDark, colorNeon;
//   if (isDark) {
//     colorLight = "#0b192e";
//     colorEnd = "#000000";
//     colorMedium = "#4e5258";
//     colorDark = "#cedcf5";
//     colorNeon = "#05bfdb";
//   }
//   else {
//     colorLight = "#cedcf5";
//     colorEnd = "#ffffff";
//     colorMedium = "#4e5258";
//     colorDark = "#0b192e";
//     colorNeon = "#05bfdb";
//   }

//   root.classList.add("quick-fade-out");
//   root.addEventListener("animationend", () => {
//     root.style.setProperty('--color-light', colorLight);
//     root.style.setProperty('--color-end', colorEnd);
//     root.style.setProperty('--color-medium', colorMedium);
//     root.style.setProperty('--color-dark', colorDark);
//     root.style.setProperty('--color-neon', colorNeon);
//     root.classList.remove("quick-fade-out");
//     root.classList.add("quick-fade-in");
//     root.addEventListener("animationend", () => root.classList.remove("quick-fade-in"));
//   });
// }
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


