const form = document.getElementById('photos-box');
const baseUrl = 'https://jsonplaceholder.typicode.com/photos';
const output = document.getElementById('photos-output');
const photoId = document.getElementById('photo-id');

form.addEventListener ('submit', async function (e) {
    e.preventDefault();
    
    const id = photoId.value;
    const url = `${baseUrl}?id=${id}`;

    const response = await fetch(url);
    
    if(response.ok) {
        const comments = await response.json();
        outputComments(comments);
    }
    else {
        outputError(response.status);
    }

});

form.addEventListener('reset', function (e){
    e.preventDefault();

    photoId.value = '';
    output.innerHTML = '';
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class=error>ERROR -> ${msg}</div>`;
}

function outputComments(comments) {
    for (const comment of comments) {
        output.innerHTML += `
        <div class="card-photos">
            <div class="card-header-photos">
                <h4><span>ID:</span>${comment.id}</h4>
                <h4><span>Photo ID:</span>${comment.albumId}</h4>
            </div>
            <div class="images">
                <div class="card-main-photo">
                    <img src="${comment.url}">
                    <h4>${comment.title}</h4>
                </div>
                <div class="card-thumbnai">
                    <img src="${comment.thumbnailUrl}"
                </div>
            </div>
        </div>
        `
    }
}