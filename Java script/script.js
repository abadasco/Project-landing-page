const switchModeButton = document.getElementById('switchMode');
const themeLink = document.getElementById('theme');

switchModeButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === '/CSS/light-mode.css') {
        themeLink.setAttribute('href', '/CSS/dark-mode.css');
    } else {
        themeLink.setAttribute('href', '/CSS/light-mode.css');
    }
});


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();  

// Selectăm butonul și containerul pentru imagine
var button = document.getElementById("showImageButton");
var imageContainer = document.getElementById("imageContainer");

// Atașăm un event listener pentru evenimentul de click
button.addEventListener("click", function() {
  // Creăm un element de imagine
  var img = document.createElement("img");
  img.src = "/Foto/not_available.jpg"; // URL-ul imaginii
  img.alt = "Imagine de exemplu";
  img.id = "exampleImage";

  // Adăugăm imaginea în container
  imageContainer.appendChild(img);

  // Dezactivăm butonul după ce imaginea este afișată
  button.disabled = true;

  document.addEventListener("click", function(event) {
    // Verificăm dacă imaginea este afișată
    var img = document.getElementById("exampleImage");
    if (img) {
      // Ascundem imaginea și reactivăm butonul
      imageContainer.removeChild(img);
      button.disabled = false;
    }
  });

  // Prevenim propagarea evenimentului de click de la buton la document
  button.addEventListener("click", function(event) {
    event.stopPropagation();
  });
});

function updateDateTime() {
    const now = new Date();
    const days = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
    const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
    
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('date').textContent = `${dayName}, ${day} ${month} ${year}`;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);