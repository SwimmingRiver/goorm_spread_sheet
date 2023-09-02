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
            }
            table.appendChild(TableElement);
        }
    }

    
    
    
    
    