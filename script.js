const switchModeButton = document.getElementById('switchMode');
const themeLink = document.getElementById('theme');
switchModeButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === '/dark_mode.css') {
        themeLink.setAttribute('href', '/light_mode.css');
    } else {
        themeLink.setAttribute('href', '/dark_mode.css');
    }
});
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
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
var button = document.getElementById("showImageButton");
var imageContainer = document.getElementById("imageContainer");
button.addEventListener("click", function() {
  var img = document.createElement("img");
  img.src = "Foto/not_available.jpg"; 
  img.alt = "Imagine de exemplu";
  img.id = "exampleImage";
  imageContainer.appendChild(img);
  button.disabled = true;
  document.addEventListener("click", function(event) {
    var img = document.getElementById("exampleImage");
    if (img) {
      
      imageContainer.removeChild(img);
      button.disabled = false;
    }
  });
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

function appendValue(value) {
  document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculateResult() {
  var result = document.getElementById('result').value;
  var answer = eval(result);
  document.getElementById('result').value = answer;
}

var modal = document.getElementById("modal");
var img = document.getElementById("myImage");
var modalImg = document.getElementById("imgFullScreen");
var captionText = document.getElementById("caption");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}

var modal = document.getElementById("modal");
var img = document.getElementById("myImage1");
var modalImg = document.getElementById("imgFullScreen");
var captionText = document.getElementById("caption");

img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}
