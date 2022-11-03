let users_url = ' https://jsonplaceholder.typicode.com/users';
let posts_url = ' https://jsonplaceholder.typicode.com/posts';
let comments_url = ' https://jsonplaceholder.typicode.com/comments';
let photos_url = ' https://jsonplaceholder.typicode.com/photos';

const outputUs = document.getElementById('outputUsers');
const outputPosts = document.getElementById('outputPosts');
const userBtn = document.getElementById('userBtn');
const postBtn = document.getElementById('postBtn');
const photoBtn = document.getElementById('photoBtn');
let order = 0;

userBtn.addEventListener("click", async function () {
    outputUs.innerHTML = '';
    let response = await fetch(users_url);
    if (response.ok) {
        let users = await response.json();

        outputUsers(users);
    } else {
        outputError(response.status);
    }
})

function outputUsers(users) {
    for (const user of users) {
        outputUs.innerHTML += `
            <div class="user-list">
                <p class="center"> ${user.username}</p>
                <hr>
                <p class="center">${user.name}</p><br>
                <p>▸Email:${user.email}</p>
                <p>▸City: ${user.address.city}</p>
                <p>▸Street: ${user.address.street}</p>
                <p>▸Zip code: ${user.address.zipcode}</p>
                <p>▸Phone: ${user.phone}</p>
                <p>▸Website:${user.website}</p>
                <p>▸Company: ${user.company.name}</p>
                <p>▸Geo lat/lng: ${user.address.geo.lat}/${user.address.geo.lng}</p>

                </div>
        </div> `
            ;
    }
}

postBtn.addEventListener("click", async function () {
    outputPosts.innerHTML = '';

    let response = await fetch(posts_url);
    if (response.ok) {
        let posts = await response.json();
        output_Posts(posts);
    } else {
        outputError(response.status);
    }
})

function output_Posts(posts) {
    for (const post of posts) {
        outputPosts.innerHTML += `
        <div class="output-posts">
               <h3>${post.title}</h3>      
                <div>
                <p class="post-body">${post.body}</p>
                <br>
                <button id="commentBtn-${post.id}" onclick="showComments(${post.id})" class="commentPlace">Открыть комментарии</button>
                <div id="commentPlace-${post.id}"></div>
        </div>`
    }
}

function showComments(q) {
    let commentPlace = document.getElementById(`commentPlace-${q}`);
    let showComment = document.getElementById(`commentBtn-${q}`);
    if (showComment.classList.contains("commentPlace")) {
        fetch(comments_url)
            .then((resp) => {
                return resp.json();
            })
            .then((post) => {
                for (let i = 0; i < post.length; i++) {
                    if (post[order].postId === q) {
                        commentPlace.innerHTML += `
                         <h3>${post[order].email}:</h3><br> <p class="comments">${post[order].body}</p>
                        <br>
                      `
                    }
                    order = order + 1;
                }
                order = 0;
            })
    } else {
        commentPlace.innerHTML = "";
    }
}

photoBtn.addEventListener("click", async function () {
    output.innerHTML = '';

    let response = await fetch(photos_url);
    if (response.ok) {
        let photos = await response.json();

        output_Photos(photos);
    } else {
        outputError(response.status);
    }
})

function output_Photos(photos) {
    let album = [];
    for (const photo of photos) {
        if (photo.albumId === 1) {
            album.push(photo);
        }
    }

    for (const photo of album) {
        output.innerHTML += `
    <figure id="image-${photo.id}">
     <img class="photo"  src="${photo.url}"
        alt="${photo.title}" width="500px">
        <hr>
    <figcaption class="ph-title">${photo.title}</figcaption>
    <br><br>
    </figure>
    
        `;
    }
}

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class="error"><p>ERROR -> ${msg}</p></div>`;
}
