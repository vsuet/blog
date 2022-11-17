let users_url = ' https://jsonplaceholder.typicode.com/users';
let posts_url = ' https://jsonplaceholder.typicode.com/posts';
let comments_url = ' https://jsonplaceholder.typicode.com/comments';
let photos_url = ' https://jsonplaceholder.typicode.com/photos';

const blog = document.getElementById('blog')
const output = document.getElementById('output');
const userBtn = document.getElementById('userBtn');
const postBtn = document.getElementById('postBtn');
const photoBtn = document.getElementById('photoBtn');
let order = 0;

userBtn.addEventListener("click", async function () {
    blog.innerHTML = '<h1>Пользователи</h1>';
    output.innerHTML = '';
    output.classList.remove('photosFlex');
    fetch(users_url)
        .then ((response) => response.json())
        .then  ((users) => {
        outputUsers(users);

    })
        .catch(msg => {
            outputError(msg);
        })
})

function outputUsers(users) {
    for (const user of users) {
        output.innerHTML += `<div class="userlist " id="user-${user.id}">
            <div class="userInfo flex-column">
               <p class="userHeader center"> ${user.username}</p>
                <hr>
                <div id = img-${user.id} class="images">
                    <img src="img/user-${user.id}.png" alt="${user.username}" height="250px">
                </div>
                <p class="center username">${user.name}</p>
                <div class="userbody flex-row">
                <div class="flex-column">
                <p>▸Email:${user.email}</p><hr>
                <p>▸City: ${user.address.city}</p><hr>
                <p>▸Street: ${user.address.street}</p><hr>
                <p>▸Zip code: ${user.address.zipcode}</p>
                </div>
                
                <div class="flex-column">
                <p>▸Phone: ${user.phone}</p><hr>
                <p>▸Website:${user.website}</p><hr>
                <p>▸Company: ${user.company.name}</p><hr>
                <p>▸Geo lat/lng: ${user.address.geo.lat}/${user.address.geo.lng}</p>
                </div>
               
                </div>
        </div>
        </div> `
        ;
    }
}

postBtn.addEventListener("click", async function () {
    output.innerHTML = '';
    blog.innerHTML = '<h1>Посты</h1>';
    output.classList.remove('photosFlex');
    fetch(posts_url)
        .then ((response) => response.json())
        .then  ((posts) => {
            output_Posts(posts);

        })
        .catch(msg => {
            outputError(msg);
        })
})

function output_Posts(posts) {
    for (const post of posts) {
        output.innerHTML += `
        <div class="posts flex-column">
               <p class="userHeader center">${post.title}</p>      
                <div class="postbody">
                <p class="center">${post.body}</p>
                <br>
                <hr>
                <button id="commentBtn-${post.id}" onclick="showComments(${post.id})"  class="commentPlace"><img src="img/comment.png" class="img" alt="" width="30px"></button>
                <div class="comments" id="commentPlace-${post.id}"></div>
        </div>   `
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
                         <p><b>${post[order].email}</b>: ${post[order].body}</p>
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
    blog.innerHTML = '<h1>Фотографии</h1>';
    output.classList.add('photosFlex');
    fetch(photos_url)
        .then ((response) => response.json())
        .then  ((photos) => {
            output_Photos(photos);

        })
        .catch(msg => {
            outputError(msg);
        })
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
        <br>
        <br>
        <hr>
    <figcaption>${photo.title}</figcaption>
    </figure>
    
        `;
    }
}

function outputError(msg) {
    const error = document.getElementById('error');
    error.innerHTML = `<div class="error"><p>ERROR -> ${msg}</p></div>`;
}
