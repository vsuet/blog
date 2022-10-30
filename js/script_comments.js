const form = document.getElementById('comments-box');
const baseUrl = 'https://jsonplaceholder.typicode.com/comments';
const output = document.getElementById('comments-output');
const commentId = document.getElementById('comment-id');

form.addEventListener ('submit', async function (e) {
    e.preventDefault();
    
    const id = commentId.value;
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

    commentId.value = '';
    output.innerHTML = '';
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class=error>ERROR -> ${msg}</div>`;
}

function outputComments(comments) {
    for (const comment of comments) {
        output.innerHTML += `
        <div class="card-comments">
            <div class="card-header-comments">
                <h4><span>ID:</span>${comment.id}</h4>
                <h4><span>Post number:</span>${comment.postId}</h4>
            </div>
            <div class="card-body-comments">
                <h4 class="title">${comment.name}</h4>
            </div>
            <div class="card-footer-comments">
                <h4 class="email">${comment.email}</h4>
                <h4>${comment.body}</h4>
            </div>
        </div>
        `
    }
}