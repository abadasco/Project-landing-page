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

document.getElementById('showCalendarBtn').addEventListener('click', function() {
    var calendar = document.getElementById('calendar');
    if (calendar.style.display === 'block') {
        calendar.style.display = 'none';
    } else {
        calendar.style.display = 'block';
        generateCalendar();
    }
});

function generateCalendar() {
    var calendar = document.getElementById('calendar');
    calendar.innerHTML = ''; 

    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();
    var today = currentDate.getDate();

    var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    var header = document.createElement('header');
    var h2 = document.createElement('h2');
    h2.textContent = new Intl.DateTimeFormat('default', { month: 'long', year: 'numeric' }).format(currentDate);
    header.appendChild(h2);
    calendar.appendChild(header);

    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    
    var dayNames = ['Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur', 'Sun'];
    var tr = document.createElement('tr');
    for (var i = 0; i < 7; i++) {
        var th = document.createElement('th');
        th.textContent = dayNames[i];
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    
    var count = 1;
    for (var i = 0; i < 6; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 7; j++) {
            var td = document.createElement('td');
            if (i === 0 && j < firstDayOfMonth) {
                td.textContent = '';
            } else if (count > daysInMonth) {
                break;
            } else {
                td.textContent = count;
                if (count === today && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
                    td.classList.add('today');
                }
                count++;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    calendar.appendChild(table);
}

