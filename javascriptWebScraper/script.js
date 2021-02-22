const textInput = document.querySelector('#json-input');

textInput.addEventListener('paste', (e) => {
    setTimeout(createTable, 500);
});

function createTable() {
    let data = textInput.value;
    let jsonData = JSON.parse(data);
    console.log(jsonData);

    let table = document.querySelector('.movie-details');

    let col = [];

    for(let i = 0; i < jsonData.length; i++){
        for(var key in jsonData[i]){
            if (col.indexOf(key) == -1 ){
                col.push(key);
            }
        }
    }

    let tr = table.insertRow(-1);

    for(let i = 0; i < col.length; i++){
        let th = document.createElement('th');
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    for(let i = 0; i < col.length; i++){

        tr = table.insertRow(-1);

        for(let j = 0; j < col.length; j ++){
            var tableCell = tr.insertCell(-1);
            tableCell.innerHTML = jsonData[i][col[j]];
        }
    }
}