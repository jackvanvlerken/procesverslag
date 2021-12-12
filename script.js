console.log("tester");

// Hamburger menu

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

// Kleur verandering detail element (Winkelmandje pagina)

var deSummary = document.querySelector("ul li details summary");

deSummary.addEventListener("click", openDetail);

function openDetail(event) {
    
deSummary.classList.toggle("showDetail");

}

// Dropdown menu (Winkelmandje pagina)

var vragenOverKopen = document.getElementById("vragen_over_kopen");

vragenOverKopen.addEventListener("click", openVragenoverKopen);
vragenOverKopen.addEventListener('keydown', openVragenoverKopen);

function openVragenoverKopen() {
  var vragenOverKopenContent = document.querySelector("#vragen_over_kopen ul");
  vragenOverKopenContent.classList.toggle("active");

  var vragenOverKopenTitel = document.querySelector("#vragen_over_kopen h3");
  vragenOverKopenTitel.classList.toggle("active");
}

