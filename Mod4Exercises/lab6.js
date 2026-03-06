fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
.then((response) => response.json())
.then((json) => console.log(json));




function addCard(json){
    const template = document.getElementById('data-template').content.cloneNode(true)

    template.querySelector('.card-title').innerText = json.title;
    template.querySelector('.card-text').innerText = json.body;
    document.querySelector('#data-list').appendChild(template);
}

json.forEach(json => addCard(json))