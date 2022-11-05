const postsList = document.getElementById('posts-list')
const usersList = document.getElementById('users-list')
const postId = document.getElementById('post-id')
const postTitle = document.getElementById('post-title')
const postText = document.getElementById('post-text')
const commentBlock = document.getElementById('comments-block')
const postUser = document.getElementById('post-user')
const images = document.getElementById('images')

let posts = []
let users = []
let pictures = []

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(postsListArr => postsListArr.forEach(post => {
        postsList.innerHTML += `<p id="${post.id}" class="post-title">${post.id + " " + post.title}</p>`
        posts.push(post)
    }))

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usersListArr => usersListArr.forEach(user => {
        usersList.innerHTML += `
        <div class="user">
            <img src="images/user.png">
            <p><a href="user.html?id=${user.id}" class="link-user">${user.username}</a></p> 
        </div>               
        `
        users.push(user)
    }))

window.onload = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(photos => photos.forEach(photo => {
            pictures.push(photo)
        }))
    setTimeout(viewPhotos, 3000)
}

function viewPhotos () {
    let i = 0

    while (i < 5) {
        images.innerHTML += `
            <img src="${pictures[i].url}" class="image">
        `
        i++
    }
}

postsList.onclick = (click) => {
    const target = click.target

    if (target.classList.contains('post-title')) {
        window.scrollTo(0, 0)
        let postid = target.id - 1
        let userid = posts[postid].userId - 1
        commentBlock.innerHTML = ''
        commentBlock.innerHTML = `<h2>Комментарии</h2>`

        postId.innerText = 'Пост ' + posts[postid].id
        postUser.innerHTML = `(Пользователь <a href="user.html?id=${users[userid].id}">${users[userid].username}</a>)`
        postTitle.innerText = posts[postid].title
        postText.innerText = posts[postid].body

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(commentsListArr => commentsListArr.forEach(comment => {
                if (comment.postId == postid + 1) {
                    commentBlock.innerHTML += `
                    <div id="${comment.id}" class="comment">
                        <h3>${comment.name}</h3>
                        <p class="comment-email">(Пользователь ${comment.email})</p>
                        <p class="comment-text">${comment.body}</p>
                    </div>
                    `
                }
            }))
    }
}

//postUser.innerHTML = '(Пользователь ' + users[userid].username + ')'