const url = new URL(window.location.href);
loadingPage()

loadSystem().then(() => console.log("loaded"));

async function loadSystem() {
    const pages = {
        "home": homePage,
        "loading": loadingPage,
        "users": usersPage,
        "user": userPage,
        "album": albumPage,
        "post": postPage
    }
    if (!url.searchParams.get("section")) await homePage();
    else if (pages[url.searchParams.get("section")]) await pages[url.searchParams.get("section")]();
    else {
        setTitle("Страница не найдена");
        body(`
            <section class="mini-header">
                <h1>404</h1>
                <p>Извините, страница не найдена</p>
                <a href="index.html">Мне всё равно, <b>верни меня на главную</b></a>
            </section>
        `);
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

async function api(section, id = "") {
    const data = await fetch(`https://jsonplaceholder.typicode.com/${section}/${id}`);
    return data.json();
}

function body(html) {
    const body = document.getElementById("body");
    body.innerHTML = `
    
    <header>
        <a class="logo" href="index.html">Json Blog</a>
        <div>
            <a class="link" href="index.html">Главная</a>
            <a class="link" href="index.html?section=users">Пользователи</a>
        </div>
    </header>
    
    <main>
        ${html}
    </main>
    
    <script src="scripts/script.js"></script>`
}

function setTitle(title) {
    document.getElementById("title").innerHTML = `Json Blog | ${title}`;
}

// Страницы сайта

function loadingPage() {
    setTitle("Загрузка");
    body(`
        <section class="mini-header">
            <p>Нужно время, чтобы загрузить данные</p>
            <p>Пожалуйста, подождите</p>
        </section>
    `)
}

async function homePage() {
    setTitle("Главная");
    body(`
        <section class="mini-header">
            <p>Добро пожаловать на Json Blog</p>
            <p>Здесь вы можете получить доступ к информации о пользователях</p>
        </section>
    `)
}

async function usersPage() {
    setTitle("Пользователи");
    const users = await api("users");
    body(`
        <section class="mini-header">
            <h1>Пользователи</h1>
            <p>Список пользователей</p>
        </section>
        <section class="users">
            ${users.map(user => `
                <div class="card">
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                    <a href="index.html?section=user&id=${user.id}">Подробнее</a>
                </div>
            `).join("")}
        </section>
    `)
}

async function userPage() {
    const id = url.searchParams.get("id");
    const userPhoto = random(0, 15);
    if (!id) {
        setTitle("Не указан ID пользователя");
        body(`
            <section class="mini-header">
                <h1>Не указан ID пользователя</h1>
                <p>Пожалуйста, укажите ID пользователя</p>
                <a href="index.html?section=users"><b>Открыть полный список пользователей</b></a>
            </section>
        `);
    } else {
        try {
            const user = await api("users", id);
            const albums = await api("albums", `?userId=${id}`);
            const posts = await api("posts", `?userId=${id}`);
            setTitle(user.name);
            body(`
                <section class="mini-header">
                    <h1>Информация о пользователе</h1>
                    <p>${user.name}</p>
                </section>
                <section class="user-data">
                    <div class="user-photo">
                        <img src="images/users/user-${userPhoto}.jpg" alt="Фото пользователя" width="300">
                    </div>
                    <div class="user-info">
                        <h2>Имя: ${user.name}</h2>
                        <p>Электронная почта: ${user.email}</p>
                        <p>Телефон: ${user.phone}</p>
                        <p>Веб-сайт: ${user.website}</p>
                        <p>Адрес: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                        <p>Компания: ${user.company.name}</p>
                    </div>
                    <h2 class="albums-header">Альбомы с фотографиями:</h2>
                    <div class="albums">
                        ${albums.map(album => `
                            <div class="card">
                                <p>Номер альбома: ${album.id}</p>
                                <a href="index.html?section=album&id=${album.id}">${album.title}</a>
                            </div>
                        `).join("")}
                    </div>
                    <h2 class="posts-header">Посты пользователя:</h2>
                    <div class="posts">
                        ${posts.map(post => `
                            <div class="post">
                                <div class="post-title">
                                    <p>${post.title}</p>
                                </div>
                                <hr>
                                <div class="post-body">
                                    <p>${post.body}</p>
                                </div>
                                <hr>
                                <div class="post-footer">
                                    <a href="index.html?section=post&id=${post.id}">Подробнее</a>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </section>
        `);
        } catch {
            setTitle("Пользователь не найден");
            body(`
                <section class="mini-header">
                    <h1>Пользователь не найден</h1>
                    <p>Пользователь с ID ${id} не найден</p>
                    <a href="index.html?section=users"><b>Открыть полный список пользователей</b></a>
                </section>
            `);
        }
    }
}

async function albumPage() {
    const id = url.searchParams.get("id");
    if (!id) {
        setTitle("Не указан ID альбома");
        body(`
            <section class="mini-header">
                <h1>Не указан ID альбома</h1>
                <p>Пожалуйста, укажите ID альбома</p>
                <a href="index.html?section=users"><b>Открыть полный список пользователей</b></a>
            </section>
        `);
    } else {
        try {
            const album = await api("albums", id);
            const photos = await api("photos", `?albumId=${id}`);
            setTitle(album.title);
            body(`
                <section class="mini-header">
                    <h1>Информация об альбоме</h1>
                    <p>${album.title}</p>
                    <a href="index.html?section=user&id=${album.userId}"><b>Вернуться к пользователю</b></a>
                </section>
                <section class="photos">
                    ${photos.map(photo => `
                        <div class="card">
                            <img src="${photo.thumbnailUrl}" alt="Фото" width="150">
                            <p>${photo.title}</p>
                        </div>
                    `).join("")}
                </section>
                    `);
        } catch {
            setTitle("Альбом не найден");
            body(`
                <section class="mini-header">
                    <h1>Альбом не найден</h1>
                    <p>Альбом с ID ${id} не найден</p>
                    <a href="index.html?section=users"><b>Открыть полный список пользователей</b></a>
                </section>
            `);
        }
    }
}

async function postPage() {
    const id = url.searchParams.get("id");
    if (!id) {
        setTitle("Не указан ID поста");
        body(`
            <section class="mini-header">
                <h1>Не указан ID поста</h1>
                <p>Пожалуйста, укажите ID поста</p>
                <a href="index.html?section=users"><b>Открыть полный список пользователей</b></a>
            </section>
        `);
    } else {
        try {
            const post = await api("posts", id);
            const comments = await api("comments", `?postId=${id}`);
            const user = await api("users", post.userId);
            const userPhoto = random(0, 15);
            setTitle(post.title);
            body(`
                <section class="mini-header">
                    <h1>Информация о посте</h1>
                    <p>${post.title}</p>
                    <a href="index.html?section=user&id=${post.userId}"><b>Вернуться к пользователю</b></a>
                </section>
                <section class="one-post"><section class="main-post">
                    <div class="post-header">
                        <img src="/images/users/user-${userPhoto}.jpg" alt="Фото пользователя" width="80" height="80">
                        <p>${user.name}</p>
                    </div>
                    <div class="post-title">
                        <p>${post.title}</p>
                    </div>
                    <hr>
                    <div class="post-body">
                        <p>${post.body}</p>
                    </div>
                </section>
                <h2>Комментарии:</h2>
                <section class="post-comments">
                        <div class="comments">
                            ${comments.map(comment => `
                                <div class="comment">
                                    <div class="comment-name">
                                        <p>${comment.name}</p>
                                    </div>
                                    <div class="comment-body">
                                        <p>${comment.body}</p>
                                    </div>
                                    <div class="comment-email">
                                        <p>${comment.email}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>   
                    </section>
                    </section> 
            `);
        } catch {
            setTitle("Пост не найден");
            body(`
                <section class="mini-header">
                    <h1>Пост не найден</h1>
                    <p>Пост с ID ${id} не найден</p>
                    <a href="index.html?section=users"><b>Открыть полный список пользователей</b></a>
                </section>
            `);
        }
    }
}