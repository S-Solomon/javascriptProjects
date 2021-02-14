
const tableRow = document.getElementsByTagName('tr');
const tableData = document.getElementsByTagName('td');
const tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset');

// log cell coordinates when clicked
for (i = 0; i < tableData.length; i++) {
    tableData[i].addEventListener('click', (e) => {
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
    });
};


// tableData.forEach(function(data) {
//     data.addEventListener('click', (e) => {
//         console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
//     });

// })

// while(!player1){
//     let player1 = prompt('Player One: Enter your name. You will be red');
// }
// player1Color = 'red'