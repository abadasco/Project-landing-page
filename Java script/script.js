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

