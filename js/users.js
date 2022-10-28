const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const form = document.getElementById('form-post');
const output = document.getElementById('output');
const postId = document.getElementById('post-id');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const id = postId.value;
    const url = `${baseUrl}/?postId=${id}`;

    const response = await fetch(url);

    if (response.ok) {
        const users = await response.json();
        outputUsers(users);
    } else {
        outputError(response.status);
    }
});

form.addEventListener('reset', function (e) {
    e.preventDefault();

    username.value = '';
    output.innerHTML = '';
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class="error"><p>ERROR -> ${msg}</p></div>`;
}

function outputUsers(users) {
    for (const user of users) {
        output.innerHTML += `
<section class="card" id="user-${user.id}">
    <header class="card-header">
        <h4>${user.name}</h4>
    </header>
    
    <div class="card-body">
        <p>${user.email}</p>
    </div>
    
    <footer class="card-footer">
        <p>${user.username}</p>
    </footer>
</section>
        `;
    }
}

function closeUser(id) {
    const comment = document.getElementById(`user-${id}`);
    user.classList.add('visible_off');
}
