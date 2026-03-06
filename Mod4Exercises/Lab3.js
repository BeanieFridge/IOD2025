// const arrayData = [{name: 'bob', age: 23}, {name: 'alice', age: 39}]


// function getData() {
//     return new Promise(resolve => {
//         setInterval(function(){
//             resolve(arrayData)
//         }, 5000)
//     })
// }

// getData().then( (data) => console.log(data))

// function addCard(data) {
// const template =
// document.getElementById("card-template").content.cloneNode(true);

// template.querySelector('.card-title').innerText =
// data.name;
// template.querySelector('.card-text').innerText =
// data.age;
// template.querySelector('.card-body').style.backgroundColor =
// 'white';

// document.querySelector('#card-list').appendChild(template);
// }

// getData().then( (data) => data.forEach(data => addCard(data)))


//  ABOVE THIS LINE IS THE CODE FOR EXERCISE 1 AND 2 |  BELOW THIS LINE IS THE CODE FOR EXERCISE 3

const arrayArtist = {
    name: "Van Gogh",
    portfolio:[
        {title: "portrait", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image"},
        {title: "sky", url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg"},
    ]
}



function addCard(artist, portfolio) {
const template = document.getElementById("card-template").content.cloneNode(true);

template.querySelector('.card-title').innerText = artist.name

portfolio.forEach(item => {
    const itemTemplate = document.getElementById("portfolio-template").content.cloneNode(true);
    itemTemplate.querySelector('.portfolio-item-title').innerText = item.title;
    itemTemplate.querySelector('.portfolio-item-image').src = item.url;
    itemTemplate.querySelector('.portfolio-item-image').alt = item.title;
    template.querySelector('.portfolio-items').appendChild(itemTemplate);
    })



template.querySelector('.card-body').style.backgroundColor ='white';
document.querySelector('#card-list').appendChild(template);
}

getArtist().then( (artist) => artist.forEach(artist => addCard(artist)))

