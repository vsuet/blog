const addPhotos = document.getElementById('js-add-photos');
const choiceList = document.getElementById('choice-list-h2');

let photos = [];

function Photos() {
    choiceList.classList.add('show');

   /* addPhotos.classList.add('show');

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(addPhotosArr => addPhotosArr.forEach(photo => {
        addPhotos.innerHTML += 
        `<div class="js-photos"id="js-add-photos">
            <div class="together">
                <img src="${photo.thumbnailUrl}" alt="${photo.title}" class="url">
                <p class="title">${photo.title}</p>
            </div>
            <p class="id">id:${photo.id}</p>
            <hr>
        </div>`
        photos.push(photo);
}))*/
};



/*const btnOpenPhotos = document.querySelector('.js-btn-photos'),
choiceList = document.querySelector('.choice-list-h2');

const tablePhotos = document.querySelector('.table-photos');

btnOpenPhotos.addEventListener('click', function(){
    choiceList.classList.add('show');

    tablePhotos.classList.add('show');
  
    let elPhotos = document.querySelector('.js-photos');
  
    for (let index = 0; index < photos.length; index++) {
        elPhotos.innerHTML += 
            `<div class="js-photos"id="js-add-photos">
                <div class="together">
                    <img src="${photos[index].thumbnailUrl}" alt="" class="url">
                    <p class="title">${photos[index].title}</p>
                </div>
                <p class="id">id:${photos[index].id}</p>
                <hr>
            </div>`
    }
  });*/