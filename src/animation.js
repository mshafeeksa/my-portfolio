export function addIntersectionObservers(){
    const hiddenElements = document.querySelectorAll(".left-hidden, .right-hidden")
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.target.classList.contains("skillset-side")) {
                unhideIcons(entry.isIntersecting);
            }
        })
        
    }, {
        threshold: 0.4
    });

    hiddenElements.forEach(element => {
        observer.observe(element); 
    }); 

}

function unhideIcons(isShow) {
    const allIcons = document.querySelectorAll(".skill-box");
    let i = 0, interval;
    function setIconVisbility() {
        if (i >= allIcons.length) {
            clearInterval(interval);
            return;
        }
        else {
            unhide(allIcons[i]);
            i = i + 1;
        }
    }   
    if (!isShow) {
        allIcons.forEach(icon => hide(icon));
    }
    else {
        setIconVisbility();
        interval = setInterval(setIconVisbility, 100);
    }
}

function unhide(icon) {
    icon.classList.add("show");
}

function hide(icon) {
    icon.classList.remove("show");
}
