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
    applyTranslation(language)
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

document.addEventListener("DOMContentLoaded", () => {
    animateComingSoon();
    setLanguage("en");
});