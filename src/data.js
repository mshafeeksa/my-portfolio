import Html from "./assets/icons/html5.svg";
import Css from "./assets/icons/css3.svg";
import Js from "./assets/icons/javascript.svg";
import React from "./assets/icons/react.svg";
import Tailwind from "./assets/icons/tailwind-css.svg";
import Jest from "./assets/icons/jest.svg";
import Npm from "./assets/icons/npm.svg";
import Webpack from "./assets/icons/webpack.svg";
import Git from "./assets/icons/git.svg";
import C from "./assets/icons/c.svg";
import Ps from "./assets/icons/photoshop.svg"
import Tasklet from "./assets/webpage-preview/tasklet.gif"
import CvBuddy from "./assets/webpage-preview/cv-buddy.gif"
import WeatherPad from "./assets/webpage-preview/weather-pad.gif"
import BattleShip from "./assets/webpage-preview/battleship.gif"
import MemoryGame from "./assets/webpage-preview/memory-game.gif"


export const profileArray = ["I build cool websites",
    "I am a Full Stack Developer",
    "I am a Front End Developer",
    "I build easy-to-use web applications"
];

export const aboutMe = "Hey there! I'm Mohammed Shafeek, a former automotive software engineer who followed his lifelong passion for coding into the world of web development. With a background steeped in two years of automotive tech, I embarked on a self-taught journey to master web development. I believe in the infinite power of learning and regularly update my skills to stay abreast of the latest technologies. As an artist who loves drawing cartoons, I bring a creative edge to problem-solving. I'm eager to blend my technical expertise and creativity to contribute meaningfully to innovative projects."

export const specialPassage = "In my journey through technology, I've adopted a simple yet powerful approach: if something comes my way that I haven't mastered, I'll catch it and learn how to handle it. This attitude fuels my belief that no challenge is insurmountable. I'm dedicated to continuously expanding my skill set, ensuring that I'm always ready to tackle any task or project that comes my way.";

export const mySkillSet = [
    {
        id: "html",
        image: Html,
        text: "HTML 5"
    },
    {
        id: "css",
        image: Css,
        text: "CSS 3"
    },
    {
        id: "js",
        image: Js,
        text: "Javascript"
    },
    {
        id: "react",
        image: React,
        text: "React"
    },
    {
        id: "tailwind",
        image: Tailwind,
        text: "Tailwind CSS"
    },
    {
        id: "jest",
        image: Jest,
        text: "Jest"
    },
    {
        id: "npm",
        image: Npm,
        text: "NPM"
    },
    {
        id: "webpack",
        image: Webpack,
        text: "Webpack"
    },
    {
        id: "git",
        image: Git,
        text: "Git"
    },
    {
        id: "c",
        image: C,
        text: "C"
    },
    {
        id: "ps",
        image: Ps,
        text: "Photoshop"
    }
];

export const portfolioData = [
    {
        id: "tasklet",
        image: Tasklet,
        title: "Tasklet",
        type: "App",
        tech: "HTML,CSS and Javascript",
        description: "Tasklet is a web app to help you manage your tasks. The app allows you to organize your tasks under different projects. You can also set the priority of tasks which will give you a visual aid to identify the most important tasks so that you can take appropriate actions",
        preview: "https://mshafeeksa.github.io/to-do-list/",
        source: "https://github.com/mshafeeksa/to-do-list"
    },
    {
        id: "cvbuddy",
        image: CvBuddy,
        title: "CV Buddy",
        type: "App",
        tech: "React.js, HTML and CSS",
        description: "CV Buddy, as the name suggests, is your buddy in making good-looking well-organized CV for all your job applications. The real-time data population of the app helps you make quick decisions on the data you enter to make your CV look great. The app is a perfect example to showcase React.js' versatility.",
        preview: "https://spiffy-marshmallow-151bd7.netlify.app/",
        source: "https://github.com/mshafeeksa/cv-generator"
    },
    {
        id: "memorygame",
        image: MemoryGame,
        title: "Memory Ninja",
        type: "Mini Game",
        tech: "React.js, HTML and CSS",
        description: "Embark on a challenging and engaging memory adventure with this unique memory game! Test and enhance your cognitive skills as you navigate through a grid of images. The twist? You can't click on the same image twice from a dynamic list. This project makes use of useState and useEffect hooks of React.",
        preview: "https://memory-ninja.netlify.app/",
        source: "https://github.com/mshafeeksa/memory-game"        
        
    },
    {
        id: "weatherpad",
        image: WeatherPad,
        title: "Weather Pad",
        type: "App",
        tech: "WeatherAPI, HTML,CSS and Javascript",
        description: "Introducing Weather Pad, your go-to weather companion for quick and accurate updates. This user-friendly app allows you to effortlessly search for any location and instantly receive comprehensive weather information. Stay ahead of the forecast with Weather Pad's intuitive interface, providing current conditions, temperature, humidity, wind speed, and more. Whether you're planning your day or preparing for a trip, Weather Pad ensures you're always in the know, making it the perfect tool for your daily weather needs.",
        preview: "https://mshafeeksa.github.io/weather-pad/",
        source: "https://github.com/mshafeeksa/weather-pad"        
        
    },
    {
        id: "battleship",
        image: BattleShip,
        title: "Battleship",
        type: "Mini Game",
        tech: "HTML,CSS and Javascript (tested with Jest)",
        description: "Experience the classic naval warfare excitement with our Battleship game app. Deploy your fleet strategically, take aim, and sink your opponent's ships to claim victory in this timeless battle of strategy and cunning.",
        preview: "https://mshafeeksa.github.io/battleship/",
        source: "https://github.com/mshafeeksa/battleship"        
        
    }
    
]