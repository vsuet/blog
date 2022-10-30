const form = document.getElementById('users-box');
const baseUrl = 'https://jsonplaceholder.typicode.com/users'
const output = document.getElementById('users-output')
const userId = document.getElementById('user-id')

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const id = userId.value;
    const url = `${baseUrl}/?id=${id}`;

    const response = await fetch(url);

    if (response.ok) {
        const comments = await response.json();
        outputComments(comments);
    } else {
        outputError(response.status);
    }

});

form.addEventListener('reset', function (e){
    e.preventDefault();

    userId.value = '';
    output.innerHTML = '';
});

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class=error>ERROR -> ${msg}</div>`;
}

function outputComments(comments) {
    for (const comment of comments) {
        output.innerHTML += `
        <div class="card">
            <div class="card-header">
                <h3>Name:</h3>
                <h4>${comment.name}</h4>
                <h4>${comment.username}</h4>
            </div>
            <div class="card-body">
                <h4><span>Street:</span>${comment.address.street}</h4>
                <h4>${comment.address.suite}</h4>
                <h4><span>City:</span>${comment.address.city}</h4>
                <h4>${comment.address.zipcode}</h4>
            </div>
            <div class="card-footer">
                <h3>Contacts:</h3>
                <h4><span>E-mail:</span>${comment.email}</h4>
                <h4><span>Phone number:</span>${comment.phone}</h4>
                <h4><span>Website:</span>${comment.website}</h4>
            </div>
            <div class="footer-company">
                <h3>Company:</h3>
                <h3>${comment.company.name}</h3>
                <h4>${comment.company.catchPhrase}</h4>
                <h4>${comment.company.bs}</h4>
            </div>
        </div>
        `
    }
}


