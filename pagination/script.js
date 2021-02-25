const taskList = document.querySelector('.task-list');

const first = document.querySelector('.first');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const last = document.querySelector('.last');

let arrayList = [];
let page = 0;

for(let i = 1; i <= 115; i++) {
    let li = document.createElement('li');
    li.textContent = `List item ${i}`;
    arrayList.push(li);

}

for(let i = 0; i < page + 10; i++) {
    taskList.appendChild(arrayList[i]);
}

next.addEventListener('click', ()=> {
    // if the page starts from 91, we want the next button to lead back to the first 10 items
    page == arrayList.length - 10 ? (page = 0) : (page += 10);
    taskList.innerHTML = '';

    for(let i = page; i < page + 10; i++) {
        if(arrayList[i] != undefined) {
            taskList.appendChild(arrayList[i]);
        }
    }
});

previous.addEventListener('click', ()=> {
    // if the page starts from 91, we want the next button to lead back to the first 10 items
    page == 0 ? page = arrayList.length - 10 : (page -= 10);
    taskList.innerHTML = '';

    for(let i = page; i < page + 10; i++) {
        if(arrayList[i] != undefined) {
            taskList.appendChild(arrayList[i]);
        }
    }
});

first.addEventListener('click', ()=> {
    // if the page starts from 91, we want the next button to lead back to the first 10 items
    page = 0;
    taskList.innerHTML = '';

    for(let i = page; i < page + 10; i++) {
        if(arrayList[i] != undefined) {
            taskList.appendChild(arrayList[i]);
        }
    }
});

last.addEventListener('click', ()=> {
    // if the page starts from 91, we want the next button to lead back to the first 10 items
    page = arrayList.length - 10;
    taskList.innerHTML = '';

    for(let i = page; i < page + 10; i++) {
        if(arrayList[i] != undefined) {
            taskList.appendChild(arrayList[i]);
        }
    }
});

