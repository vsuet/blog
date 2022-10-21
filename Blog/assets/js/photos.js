document.addEventListener("DOMContentLoaded", function(event) {
    getPhotos();
});

async function getPhotos() {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    let response = await fetch(url);

    if (response.ok) {
        let photos = await response.json();
        showPhotos(photos);
    } else {
        console.debug(response.status);
        showFail();
    }
}

function showPhotos(photos)
{
    console.debug(photos);
    console.log('show photos')


    const photosBlock = document.getElementById('photos');
    photos.forEach((photo, index) => {
        if (index <= 70) {
            console.log(index)
            let div = document.createElement("div");
            let img = document.createElement("img");
            div.classList = 'photo-item';
            img.src = photo.thumbnailUrl;
            div.append(img);
            photosBlock.append(div);
            console.log(photo);
        }
    });
}

function showFail() {
    alert('Ошибка при получении информации');
    console.log('show fail');
    // Не удалось получить информацию, пожалуйста, зайдите позже
}