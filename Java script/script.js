const switchModeButton = document.getElementById('switchMode');
const themeLink = document.getElementById('theme');

switchModeButton.addEventListener('click', () => {
    if (themeLink.getAttribute('href') === '/CSS/light-mode.css') {
        themeLink.setAttribute('href', '/CSS/dark-mode.css');
    } else {
        themeLink.setAttribute('href', '/CSS/light-mode.css');
    }
});