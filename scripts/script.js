const url = new URL(window.location.href);
loadingPage()

loadSystem().then(() => console.log("loaded"));

async function loadSystem() {
    const pages = {
        "home": homePage,
        "loading": loadingPage,
        "users": usersPage,
        "user": userPage
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
                <div class="user">
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