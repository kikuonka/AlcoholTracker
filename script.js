'use strict';

function СalendarGeneration() {
    let today = new Date(); // текущая дата
    let currentMonth = today.getMonth(); // месяц (от 0 до 11) 
    let currentYear = today.getFullYear();

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    document.getElementById('month').textContent = months[currentMonth];
    document.getElementById('year').textContent = currentYear;

    let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate(); // день предыдущего месяца
    let firstDay = new Date(currentYear, currentMonth, 1).getDate();

    if (firstDay === 0)
        firstDay = 6; // 0 = 6 Вс
    else
        firstDay - 1; // 1-1 = 0 Пн и т.д.

    let table = document.getElementById('days');

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
            let button = document.createElement('button');

            let buttonColored;
            button.onclick = function() {
                if (buttonColored) {
                    button.style.backgroundColor = '';
                    button.style.backgroundImage = '';
                    button.style.color = '';
                    buttonColored = false;
                } else {
                    button.style.backgroundImage = 'linear-gradient( #BB673B, #D6D4D6)';
                    button.style.color = '#D6D4D6';
                    buttonColored = true;
                }
            }

            if ((i === 0 && j < firstDay) || date > lastDay) {
                button.textContent = '';
            } else if (date > lastDay) {
                break;
            } else {
                button.textContent = date;
                date++;
            }
            cell.appendChild(button);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
