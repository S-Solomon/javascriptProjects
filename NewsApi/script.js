const searchForm = document.querySelector('.search');
const textInput = document.querySelector('.input');
const newsList = document.querySelector('.news-list');

searchForm.addEventListener('submit', retrieve);

function retrieve(e) {

    if(textInput.value == ''){
        alert('Input field is empty')
        return
    }


    newsList.innerHTML = '';

    e.preventDefault();

    const apiKey = '477ace22373240978add916f123296de';

    let searchTopic = textInput.value;

    let url = `https://newsapi.org/v2/everything?q=${searchTopic}&apiKey=${apiKey}`;

    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data);
        data.articles.forEach((article) => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target','_blank');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li);
        })
    }).catch((err) => {
        console.log(err);
    })

}
