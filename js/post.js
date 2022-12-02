let post = document.getElementById("post");
let id = new URLSearchParams(window.location.search).get("id");
fetch("https://jsonplaceholder.typicode.com/posts/" + id).then(r => r.json()).then(data => {
    post.innerHTML = `
        <h1>${data.title}</h1>
        <p>${data.body}</p>
    `;
    let comments = document.getElementById("comments");
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + id).then(r => r.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            comments.innerHTML += `
                <div class="comment">
                    <h2>${data[i].name}</h2>
                    <p>${data[i].body}</p>
                </div>
            `;
        }
    });
});