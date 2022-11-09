let users_url = ' https://jsonplaceholder.typicode.com/users';
let posts_url = ' https://jsonplaceholder.typicode.com/posts';
let comments_url = ' https://jsonplaceholder.typicode.com/comments';
let photos_url = ' https://jsonplaceholder.typicode.com/photos';

const UserOutput = document.getElementById('userOutput');
const PostOutput = document.getElementById('postOutput');
const Butnuser = document.getElementById('Butnuser');
const Butnpost = document.getElementById('Butnpost');
const Butnphoto = document.getElementById('Butnphoto');
let order = 0;

Butnuser.addEventListener("click", async function () {
    UserOutput.innerHTML = '';
    let response = await fetch(users_url);
    if (response.ok) {
        let users = await response.json();

        userOutput(users);
    } else {
        outputError(response.status);
    }
})

function userOutput(users) {
    for (const user of users) {
        UserOutput.innerHTML += `
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





Butnpost.addEventListener("click", async function () {
    PostOutput.innerHTML = '';

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
        postOutput.innerHTML += `
        <div class="output-posts">
               <h1>${post.title}</h1>      
                <div>
                <p class="post-body">${post.body}</p>
                <br>
                <button id="commentBtn-${post.id}" onclick="showComments(${post.id})" class="commentPlace">Комментарий</button>
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






Butnphoto.addEventListener("click", async function () {
    photoOutput.innerHTML = '';

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
        photoOutput.innerHTML += `
    <figure id="image-${photo.id}">
     <img class="photo"  src="${photo.url}"
        alt="${photo.title}" width="200px">
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