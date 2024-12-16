let currentIndex = 0;
let currentLanguage = "en"



const applyTranslation = (language) => {
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        const keys = key.split(".");
        let text = languages[language];

        keys.forEach(k => {
            text = text[k];
        });

        if (text) {
            if (element.tagName.toLowerCase() === "input" || element.tagName.toLowerCase() === "textarea") {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
}

const setLanguage = (language) => {
    currentLanguage = language
    applyTranslation(language)
    renderCards()
}

const openTab = (numElem) => {
    var tabLinks = document.getElementsByClassName('tab-links')
    var tabContents = document.getElementsByClassName('tab-contents')

    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active-link')
    }

    for(var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active-content')
    }


    tabLinks[numElem].classList.add('active-link')
    tabContents[numElem].classList.add('active-content')
}

const animateComingSoon = () => {
    const textElements = document.getElementsByClassName("coming-soon");
    let compteurPoints = 0; 

    console.log(textElements);

    setInterval(function () {
        compteurPoints = (compteurPoints + 1) % 4;
        for (let i = 0; i < textElements.length; i++) {
            textElements[i].textContent = "Coming soon" + ".".repeat(compteurPoints);
        }
    }, 500);

    
}

const emptyCases = () => {
    var cases = formulaire.getElementsByTagName('input');
    
    for (var i = 0; i < cases.length; i++) {
        cases[i].value = '';
    }
}

function getServices(){
    return languages[currentLanguage].services.items
}


function renderCards() {
    const track = document.getElementById("services-cards");
    track.innerHTML = "";

    const services = getServices()

    for (let i = 0; i < 3; i++) {
        const cardIndex = (currentIndex + i) % services.length;
        const service = services[cardIndex];

        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h2>${service.title}</h2>
            <ul>
                ${service.points.map(point => {
                    if (Array.isArray(point)) {
                        return `<ul >${point.map(subPoint => `<li style="color:#555; font-weight:medium; list-style:circle; font-size:15px; line-height:1.5; margin-left:0">${subPoint}</li>`).join("")}</ul>`;
                    }
                    return `<li style="color:black; font-weight:bold; list-style:disc; font-size:18px; line-height:1.5">${point}</li>`;
                }).join("")}
            </ul>
        `;
        track.appendChild(card);
    }
}


function scrollServices(direction) {
    const services = getServices()
    currentIndex = (currentIndex + direction + services.length) % services.length;
    renderCards();
}

function typeWriter(text, targetElement){
    index = 0
    isDeleting = false
    function write() {
        if (!isDeleting && index < text.length) {
            targetElement.textContent += text.charAt(index);
            index++;
            setTimeout(write, 100);
        } else if (isDeleting && index > 0) {
            targetElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(write, 50);
        } else {
            isDeleting = !isDeleting;
            setTimeout(write, 500);
        }
    }

    targetElement.textContent = "";
    targetElement.style.borderRight = "2px solid rgba(255, 255, 255, 0.75)";
    write()
}

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
        })
    })
    
    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
    
    animateComingSoon();
    setLanguage("en");
    renderCards()
    
    typeWriter(languages[currentLanguage].home.welcome, document.querySelector(".titre-home"));
});