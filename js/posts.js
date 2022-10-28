const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const form = document.getElementById('form-post');
const output = document.getElementById('output');
const postId = document.getElementById('post-id');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const id = postId.value;
    const url = `${baseUrl}/?postId=${id}`;

    const response = await fetch(url);

    if (response.ok) {
        const posts = await response.json();
        outputPosts(posts);
    } else {
        outputError(response.status);
    }
});

form.addEventListener('reset', function (e) {
    e.preventDefault();

    userId.value = '';
    output.innerHTML = '';
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class="error"><p>ERROR -> ${msg}</p></div>`;
}

function outputPosts(posts) {
    for (const post of posts) {
        output.innerHTML += `
<section class="card" id="post-${post.id}">
    <header class="card-header">
        <h4>${post.name}</h4>
    </header>
    
    <div class="card-body">
        <p>${post.body}</p>
    </div>
    
    <footer class="card-footer">
        <p>${post.title}</p>
    </footer>
</section>
        `;
    }
}

function closePost(id) {
    const comment = document.getElementById(`post-${id}`);
    post.classList.add('visible_off');
}
