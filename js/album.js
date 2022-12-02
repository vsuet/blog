let album = document.getElementById("album");
let id = new URLSearchParams(window.location.search).get("id");
fetch("https://jsonplaceholder.typicode.com/albums/" + id).then(r => r.json()).then(data => {
    album.innerHTML = `
        <h1>${data.title}</h1>
    `;
    let photos = document.getElementById("photos");
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + id).then(r => r.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            photos.innerHTML += `
                <div class="photo">
                    <img src="${data[i].url}">
                </div>
            `;
        }
    });
});