const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let table = '<table class="spreadsheet-table">';

table += '<tr><td></td>';
for (let i = 0; i < columns.length; i++) {
    table += `<td id='column${columns[i]}'>${columns[i]}</td>`;
}
table += '</tr>';

for (let i = 0; i < rows.length; i++) {
    table += '<tr>';
    table += `<td id='row${rows[i]}'>${rows[i]}</td>`;
    for (let j = 0; j < columns.length; j++) {
        const cellId = `${columns[j]}${rows[i]}`;
        table += `<td><input id="${cellId}" type="text" placeholder="${cellId}"></td>`;
    }
    table += '</tr>';
}

table += '</table>';

document.querySelector('#spreadSheet').innerHTML = table;

const spreadSheetElement = document.querySelector('#spreadSheet');


const inputElements = spreadSheetElement.querySelectorAll('input[type="text"]');
inputElements.forEach((inputElement) => {
    inputElement.addEventListener('focus', HighlightHandler);
});

function HighlightHandler(e) {
    const cellId = e.target.id;
    const focusColumn = cellId.charAt(0);
    const focusRow = cellId.slice(1);

    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => element.classList.remove('highlight'));


    const firstRowCell = document.querySelector(`#row${focusRow}`);
    firstRowCell.classList.add('highlight');

    const firstColumnCell = document.querySelector(`#column${focusColumn}`);
    firstColumnCell.classList.add('highlight');
}
