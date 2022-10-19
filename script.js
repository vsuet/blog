const postsList = document.getElementById('posts-list')
const usersList = document.getElementById('users-list')
const postId = document.getElementById('post-id')
const postTitle = document.getElementById('post-title')
const postText = document.getElementById('post-text')
const commentBlock = document.getElementById('comments-block')
const postUser = document.getElementById('post-user')

let posts = []
let users = []

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
        <div id="${user.id}" class="user">
            <img src="user.png">
            <p>${user.username}</p> 
        </div>               
        `
        users.push(user)
    }))

postsList.onclick = (click) => {
    const target = click.target

    if (target.classList.contains('post-title')) {
        window.scrollTo(0, 0)
        let postid = target.id - 1
        let userid = posts[postid].userId - 1
        commentBlock.innerHTML = ''
        commentBlock.innerHTML = `<h2>Комментарии</h2>`

        postId.innerText = 'Пост ' + posts[postid].id
        postUser.innerText = '(Пользователь ' + users[userid].username + ')'
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