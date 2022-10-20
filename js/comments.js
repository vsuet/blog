const addComments = document.getElementById('js-add-comments');
const choiceList = document.getElementById('choice-list-h2');

let comments = [];

function Comments() {
    choiceList.classList.add('show');

    addComments.classList.add('show');

    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then(response => response.json())
    .then(addCommentsArr => addCommentsArr.forEach(comment => {
        addComments.innerHTML += 
        `<div class="js-comments" id="js-add-comments">
            <h2>${comment.name}</h2>
            <p class="body">${comment.body}</p>
            <p class="email">${comment.email}</p>
            <hr>
        </div>`
        comments.push(comment);
}))
};