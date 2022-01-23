console.log("tester");

// Hamburger menu

var menuButton = document.querySelector("header div button");

if (menuButton) {

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
}

// Keydown event home

var homeButton = document.querySelector("header > div a:first-of-type");

homeButton.addEventListener("keydown", logKey);

function logKey(key) {
  if (key.keyCode == "32"){
    window.location.replace("index.html");
  }
}

// Keydown event winkelwagen

var winkelwagenButton = document.querySelector("header > div a:last-of-type");

winkelwagenButton.addEventListener("keydown", logKey2);

function logKey2(key) {
  if (key.keyCode == "32"){
    window.location.replace("index2.html");
  }
}

// Kleur verandering detail element (Winkelmandje pagina)

var deSummary = document.querySelector("ul li details summary");


if (deSummary) {
  deSummary.addEventListener("click", openDetail);

  function openDetail(event) {
    
  deSummary.classList.toggle("showDetail");

  }

  function checkKeyPress(key) {
    if (key.keyCode == "32") {
      alert("The spacebar has been pressed")
    }
  }
}

// Dropdown menu (Winkelmandje pagina)

var vragenOverKopen = document.getElementById("vragen_over_kopen");

if (vragenOverKopen) {
  vragenOverKopen.addEventListener("click", openVragenoverKopen);
  vragenOverKopen.addEventListener("keydown", openVragenoverKopen);


  function openVragenoverKopen() {
    var vragenOverKopenContent = document.querySelector("#vragen_over_kopen ul");
    vragenOverKopenContent.classList.toggle("active");

    var vragenOverKopenTitel = document.querySelector("#vragen_over_kopen h3");
    vragenOverKopenTitel.classList.toggle("active");
  }
}

// Theme tijd indicator

var huidigetijd = new Date();

var minuten = huidigetijd.getMinutes();

console.log(minuten % 2);

 if (minuten % 2 == 0) {
   
   var deAside = document.querySelector("aside");

  if (deAside) {
   deAside.classList.add("nieuwjaar");
  }
 }

 