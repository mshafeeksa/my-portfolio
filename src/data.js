import Html from "./assets/icons/html5.svg";
import Css from "./assets/icons/css3.svg";
import Js from "./assets/icons/javascript.svg";
import React from "./assets/icons/react.svg";
import Tailwind from "./assets/icons/tailwind-css.svg";
import Jest from "./assets/icons/jest.svg";
import ReactBootstrap from "./assets/icons/reactbootstrap.svg";
import Webpack from "./assets/icons/webpack.svg";
import Git from "./assets/icons/git.svg";
import Mongodb from "./assets/icons/mongodb.svg";
import Next from "./assets/icons/next.svg";
import Typescript from "./assets/icons/typescript.svg";
import Node from "./assets/icons/node.svg";
import Redux from "./assets/icons/redux.svg";
import Express from "./assets/icons/express.svg"
import Tasklet from "./assets/webpage-preview/tasklet.png"
import CvBuddy from "./assets/webpage-preview/cv-buddy.png"
import WeatherPad from "./assets/webpage-preview/weather-pad.png"
import MemoryGame from "./assets/webpage-preview/memory-game.png"
import Threaded from "./assets/webpage-preview/threaded.gif"
import Goalsetter from "./assets/webpage-preview/goalsetter.png"


export const profileArray = ["I build cool websites",
    "I am a Full Stack Developer",
    "I am a MERN stack developer",
    "I am a Front End Developer",
    "I build easy-to-use web applications",
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
        id: "express",
        image: Express,
        text: "Express.js"
    },
    {
        id: "react",
        image: React,
        text: "React"
    },
    {
        id: "mongo",
        image: Mongodb,
        text: "MongoDB"
    },
    {
        id: "node",
        image: Node,
        text: "Node.js"
    },
    {
        id: "next",
        image: Next,
        text: "Next.js"
    },
    {
        id: "typescript",
        image: Typescript,
        text: "Typescript"
    },
    {
        id: "redux",
        image: Redux,
        text: "Redux Toolkit"
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
        id: "reactbootstrap",
        image: ReactBootstrap,
        text: "React Bootstrap"
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
];

export const portfolioData = [
    {
        id: "threaded",
        image: Threaded,
        title: "Threaded",
        type: "Conceptual e-commerce website",
        tech: "React, React Router, Tailwind CSS and Fakestore API",
        description: "Threaded is a conceptual ecommerce website created with Fakestore API and using React and React Router. The website has a homepage with an image slider and uses React Router for all pages. For styling, tailwind CSS is used along with vanilla CSS.",
        preview: "https://threaded-store.vercel.app/",
        source: "https://github.com/mshafeeksa/shopping-cart"        
        
    },
    {
        id: "goalsetter",
        image: Goalsetter,
        title: "Goal Setter",
        type: "MERN Fullstack project",
        tech: "MongoDB, Express, React, Node.js and JWT Authentication",
        description: "Goal Setter is a MERN fullstack project. It is a basic website that uses RestAPIs for user creation and CRUD operations for goals",
        preview: "https://goalsettershafeek-a90b4ecf7189.herokuapp.com/",
        source: "https://github.com/mshafeeksa/goal-setter-app"        
        
    },
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
        preview: "https://cvbuddy.netlify.app",
        source: "https://github.com/mshafeeksa/cv-generator"
    },
    {
        id: "memorygame",
        image: MemoryGame,
        title: "The Memory Ninja",
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
    
]