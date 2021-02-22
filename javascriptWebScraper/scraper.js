var movieDetails = [{}];

movieDetails[0]['Title'] = document.querySelector("#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > h1").innerText;

movieDetails[0]['Release Year'] = document.querySelector("#titleYear > a").innerText;

movieDetails[0]['Age Rating'] =  document.querySelector("#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > div.subtext").innerText.slice(0,2);

movieDetails[0]['Duration'] = document.querySelector("#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > div.subtext > time").innerText;

movieDetails[0]['Genre'] = document.querySelector("#title-overview-widget > div.vital > div.title_block > div > div.titleBar > div.title_wrapper > div.subtext > a:nth-child(4)").innerText;

copy(movieDetails);



[
  {
    "Title": "Joker (2019)",
    "Release Year": "2019",
    "Age Rating": "15",
    "Duration": "2h 2min ",
    "Genre": "Crime"
  }
]