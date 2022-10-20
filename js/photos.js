const addPhotos = document.getElementById('js-add-photos');
const choiceList = document.getElementById('choice-list-h2');

let photos = [];

function Photos() {
    choiceList.classList.add('show');

    addPhotos.classList.add('show');

    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json())
    .then(addPhotosArr => addPhotosArr.forEach(photo => {
        if(photo.albumId === 1){
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
        }
    }))
};