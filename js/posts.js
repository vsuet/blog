const addPosts = document.getElementById('js-add-posts');
const choiceList = document.getElementById('choice-list-h2');

let posts = [];

function Posts() {
    choiceList.classList.add('show');

    addPosts.classList.add('show');

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(addPostsArr => addPostsArr.forEach(post => {
        addPosts.innerHTML += 
            `<div id="js-add-posts">
                <h2>${post.title}</h2>
                <p class="body">${post.body}</p>
                <p class="id">id:${post.id}</p>
                <hr>
            </div>`
        posts.push(post);
}))
};