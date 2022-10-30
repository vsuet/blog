const addUsers = document.getElementById('user-display');
const tableUsers = document.getElementById('user-list');

let users = [];

function Users() {
    tableUsers.classList.add('show');

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(addUsersArr => addUsersArr.forEach(user => {
            addUsers.innerHTML +=
                `<tr id="user-display">
 <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}</td>
        <td>${user.address.suite}</td>
        <td>${user.address.city}</td>
        <td>${user.address.zipcode}</td>
        <td>${user.address.geo.lat}</td>
        <td>${user.address.geo.lng}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
        <td>${user.company.catchPhrase}</td>
        <td>${user.company.bs}</td>
      </tr>`
            users.push(user);
        }))
}

