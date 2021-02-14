
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


while(!player1){
    var player1 = prompt('Player One: Enter your name. You will be red');
}
var player1Color = 'red'

while(!player2){
    var player2 = prompt('Player Two: Enter your name. You will be Yellow');
}
var player2Color = 'yellow'

let currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn!`

Array.prototype.forEach.call(tableData, (cell) => {
    cell.addEventListener('click', changeColor);
    // set all slots to white for new game
    cell.style.backgroundColor = 'white';
});

function changeColor(e) {
    let column = e.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--) {
        if(tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if(currentPlayer === 1) {
                row[0].style.backgroundColor = player1Color;
                playerTurn.textContent = `${player2}'s turn` ;
                return currentPlayer = 2;
            }else {
                row[0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1}'s turn` ;
                return currentPlayer = 1;
            }
        }
    }
}