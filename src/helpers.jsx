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
    unhideMainPage();
    
}

function unhideMainPage() {
    const mainPage = document.querySelector(".main");
    mainPage.classList.remove("hide");
    const knowMoreButton = document.querySelector("#home-page a");
    knowMoreButton.addEventListener("animationend", () => {
        setTimeout(animateDesignation, 1500);
    }, { once: true });
}

function animateDesignation(index = 1, key = null) {
    const designation = document.querySelector("#home-page .designation");
    designation.classList.remove("fade-in");
    designation.classList.add("fade-out");
    const textArray = [
        "I build cool websites",
        "I am a Full Stack Developer",
        "I am a Front End Developer"
    ];
    if (key !== null) {
        clearTimeout(key);
    }
    
    designation.addEventListener("animationend", () => {
        designation.classList.remove("fade-out");
        designation.textContent = textArray[index];
        designation.classList.add("fade-in");
        index++;
        if (index === textArray.length) {
            index = 0;
        }
        setTimeout(()=>0)
        key = setTimeout(() => animateDesignation(index, key),2000);
    },{once:true})
}
