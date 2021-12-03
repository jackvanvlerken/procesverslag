console.log("tester");

var menuButton = document.querySelector("header div button");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
    
    var deNav = document.querySelector("nav");

    deNav.classList.toggle("toonMenu");

    var deHeader = document.querySelector("header div");

    deHeader.classList.toggle("zwarteAchtergrond");

    var winkelwagen = document.querySelector("header div a:nth-child(3)");

    winkelwagen.classList.toggle("verdwijn");

    menuButton.classList.toggle("animatie");
    
}

