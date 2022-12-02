let users = document.getElementById("users");
fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()).then(data => {
    for (let i = 0; i < data.length; i++) {
        users.innerHTML += `
            <div class="user">
                <h2>${data[i].name}</h2>
                <p>${data[i].email}</p>
                <a href="user.html?id=${data[i].id}">Подробнее</a>
            </div>
        `;
    }
});