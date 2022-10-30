const form = document.getElementById('posts-box');
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
const output = document.getElementById('posts-output');
const postId = document.getElementById('post-id');

form.addEventListener ('submit', async function (e) {
    e.preventDefault();
    
    const id = postId.value;
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

    postId.value = '';
    output.innerHTML = '';
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class=error>ERROR -> ${msg}</div>`;
}

function outputComments(comments) {
    for (const comment of comments) {
        output.innerHTML += `
        <div class="card-posts">
            <div class="card-header-posts">
                <h4><span>ID:</span>${comment.id}</h4>
                <h4><span>User number:</span>${comment.userId}</h4>
            </div>
            <div class="card-body-posts">
                <h4 class="title">${comment.title}</h4>
            </div>
            <div class="card-footer-posts">
                <h4>${comment.body}</h4>
            </div>
        </div>
        `
    }
}