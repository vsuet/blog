document.addEventListener("DOMContentLoaded", function(event) {
    getUsers();
});

async function getUsers() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    let response = await fetch(url);

    if (response.ok) {
        let users = await response.json();
        showUsers(users);
    } else {
        console.debug(response.status);
        showFail();
    }
}

function showUsers(users)
{
    console.debug(users);
    console.log('show users')

    const usersBlock = document.getElementById('users');
    for (let user of users) {
        let div = document.createElement("div");
        div.classList = 'user-item';
        div.append('Name: ' + user.name + ' UserName: ' + user.username + ' Tel:' + user.phone);
        usersBlock.append(div);
        console.log(user);
    }
}

function showFail() {
    alert('Ошибка при получении информации');
    console.log('show fail');
    // Не удалось получить информацию, пожалуйста, зайдите позже
}