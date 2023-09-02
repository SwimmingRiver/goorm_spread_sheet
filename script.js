let table = document.querySelector('#table');
const column = ['R','A','B','C','D','E','F','G','H','I'];
const row = ['O',1,2,3,4,5,6,7,8,9];
let tableValue ;


    for(let i=0;i<row.length;i++){
        for(let j=0;j<column.length;j++){
            const TableElement = document.createElement('input');
            
            TableElement.id = `${column[i]}${row[j]}`;
            TableElement.className = 'tableElement';
            TableElement.placeholder=`${TableElement.id}`;
            
            if(TableElement.placeholder.includes('R')){
                TableElement.placeholder = column[j]
                if(TableElement.placeholder==='O'){
                    TableElement.placeholder=''
                }
            };
            if(TableElement.placeholder.includes('O')){
                TableElement.placeholder = row[i]  
            }
            if(TableElement.placeholder==='R'){
                TableElement.placeholder='';
                TableElement.disabled=true;
            }

            TableElement.addEventListener('focus',HighlightHandler);
            table.appendChild(TableElement);
        }
    }

    
    function HighlightHandler(e){
        const cellId = e.target.id;
        const focusColumn = cellId.charAt(0);
        const focusRow = cellId.slice(1);

        const cells = document.querySelectorAll('.tableElement');
        cells.forEach(i => i.classList.remove('highlight'));
    

        const rowCells = document.querySelectorAll(`input[id^='${focusColumn}'][id$='O']`);
        rowCells.forEach(i => i.classList.add('highlight'));
    

        const columnCells = document.querySelectorAll(`input[id^='R'][id$='${focusRow}']`);
        columnCells.forEach(i => i.classList.add('highlight'));
    }
    
    
    