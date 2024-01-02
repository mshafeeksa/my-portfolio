export function hideLoading() {
    const loadingScreen = document.querySelector(".loading-screen");
    loadingScreen.classList.add("fade-out");
    setTimeout(()=>loadingScreen.classList.add("hide"),500);
}

export function startHelloScreen() {
    const helloScreen = document.querySelector(".hello-screen");
    helloScreen.classList.remove("hide");
}

export function hideHelloScreen(){
    const helloScreen = document.querySelector(".hello-screen");
    helloScreen.classList.add("hide");
}

export function unhideMainPage() {
    const mainPage = document.querySelector(".main");
    mainPage.classList.remove("hide");
}

export function animateDesignation() {
    const designation = document.querySelector("#home-page .designation");
    const key = setInterval(() => {
        designation.classList.add("fade-out");
        setTimeout(() => {
            designation.classList.remove("fade-out");
            if (designation.textContent == "I am a Full Stack    Developer") {
                designation.textContent = "I build cool websites";
            }
            else if (designation.textContent == "I build cool websites")
                designation.textContent = "I am a Front End Developer";
            else    
                designation.textContent = "I am a Full Stack    Developer";
            designation.classList.add("fade-in");
         }, 500);
    },3000)
}