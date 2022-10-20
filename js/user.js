const addUsers = document.getElementById('js-add-users');
const choiceList = document.getElementById('choice-list-h2');
const tableUsers = document.getElementById('add-users');

let users = [];

function Users() {
  choiceList.classList.add('show');

  tableUsers.classList.add('show');

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(addUsersArr => addUsersArr.forEach(user => {
      addUsers.innerHTML += 
      `<tr id="js-add-users">
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}</td>
        <td>${user.address.suite}</td>
        <td>${user.address.city}</td>
        <td>${user.address.zipcode}</td>
        <td>${user.address.geo.lat}</td>
        <td>${user.address.geo.lng}</td>
      </tr>`

        users.push(user);
    }))
};