let id = new URLSearchParams(window.location.search).get("id");
fetch("https://jsonplaceholder.typicode.com/users/" + id).then(r => r.json()).then(data => {
    let user = document.getElementById("user");
    user.innerHTML = `
        <h1>${data.name}</h1>
        <p>Почта: ${data.email}</p>
        <p>Адрес: ${data.address.street}, ${data.address.suite}, ${data.address.city}</p>
        <p>Телефон: ${data.phone}</p>
        <p>Сайт: ${data.website}</p>
        <p>Место работы: ${data.company.name}</p>
    `;
    let posts = document.getElementById("posts");
    fetch("https://jsonplaceholder.typicode.com/posts?userId=" + id).then(r => r.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            posts.innerHTML += `
                <div class="post">
                    <h2>${data[i].title}</h2>
                    <p>${data[i].body}</p>
                    <a href="post.html?id=${data[i].id}">Комментарии</a>
                </div>`;
        }
    });
    let albums = document.getElementById("albums");
    fetch("https://jsonplaceholder.typicode.com/albums?userId=" + id).then(r => r.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            albums.innerHTML += `
                <div class="album">
                    <h2>${data[i].title}</h2>
                    <a href="album.html?id=${data[i].id}">Фотографии</a>
                </div>`;
        }
    });
});