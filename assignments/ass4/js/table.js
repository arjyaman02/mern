
const table = document.getElementsByTagName('table')[0];

console.log(table.tHead.rows[0].style.backgroundColor ='#ff0000');

table.tBodies[0].rows[0].style.backgroundColor='blue'

table.tBodies[0].rows[1].style.backgroundColor='red'

table.tBodies[0].rows[2].style.backgroundColor='blue'

table.tBodies[0].rows[3].style.backgroundColor='red'

table.tBodies[0].rows[4].style.backgroundColor='blue'

document.write('TEXT OF THE EVEN CELLS ARE :-<br><br>');

    for(let i=0;i<table.rows.length;i++)
    {
        for(let j=0;j<table.rows[0].cells.length;j++)
        {
            if(i%2 == 0 && j%2 == 0)
            {
                document.write(`Cell(${i},${j}) - ${table.rows[i].cells[j].innerText}<br>`);
            }
                
        }
    }
