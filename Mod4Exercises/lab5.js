let newsData = [
{ id: 1, title: 'Election Results',
content: "Newly elected minister..." },
{ id: 2, title: 'Sporting Success',
content: "World Cup winners..." },
{ id: 3, title: 'Tornado Warning',
content: "Residents should prepare..." }
];

function getNews() {
    return new Promise(resolve => {
        setInterval(function(){
            resolve(newsData)
        }, 5000)
    })
}

getNews().then( (news) => console.log(news))

function addCard(news){
    const template = document.getElementById('news-template').content.cloneNode(true)

    template.querySelector('.card-title').innerText = news.title;
    template.querySelector('.card-text').innerText = news.content;
    document.querySelector('#news-list').appendChild(template);
}

getNews().then( (news) => news.forEach(news => addCard(news)))



function createNewsItem(event) {
            event.preventDefault();
            let newTitle = document.getElementById('newsTitle').value;
            let newContent = document.getElementById('newsContent').value;
            news.push({title: newTitle, content: newContent, id: news.length + 1})
        }

        function stopInterval() {
            clearInterval(newsTimer)
        }