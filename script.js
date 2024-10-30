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