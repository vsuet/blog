const addPosts = document.getElementById('show-posts');

let posts = [];

function Posts() {

    addPosts.classList.add('show');

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(addPostsArr => addPostsArr.forEach(post => {
            addPosts.innerHTML +=
                `<div id="show-posts">
<section class="card" id="comment-${post.id}">
<header class="card-header">
                <h4>${post.title}</h4>
                </header>
                
                <div class="card-body">
                <p class="body">${post.body}</p>
                 </div>
                 
                 <footer class="card-footer">
                <p class="id">id:${post.id}</p>
                  </footer>
            </div>`
            posts.push(post);
        }))
}




