document.getElementById('load').addEventListener('click', async function (event) {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    console.debug(url);
    let response = await fetch(url);
    console.debug(response.ok);
    console.debug(response.status);
    if (response.ok) {
        let photos = await response.json();
        outputAlbum(photos);
        console.debug(response);
        console.debug(photos);
    } else {
        outputError(response.status);
        console.debug(response.status);
    }
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class="error"><p>ERROR -> ${msg}</p></div>`;
}

function outputAlbum(photos) {
    let album = [];
    for (const photo of photos) {
        console.debug(photo.albumId);
        if(photo.albumId === 1){
            album.push(photo);
        }
    }

    for (const photo of album) {
        const output = document.getElementById('output');
        output.innerHTML += `
<figure id="image-${photo.id}">
  <img  src="${photo.thumbnailUrl}"
        alt="${photo.title}">
  <figcaption>${photo.title}</figcaption>
</figure>
        `;
    }
}