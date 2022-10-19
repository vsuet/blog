const btnOpenUsers = document.querySelector('.js-btn-users'),
choiceList = document.querySelector('.choice-list-h2');


const tableUsers = document.querySelector('.table-users');

let urls = {
  'urlUsers': 'https://jsonplaceholder.typicode.com/users',
  'urlPosts': 'https://jsonplaceholder.typicode.com/users'
}

//fetch('https://jsonplaceholder.typicode.com/users')
//.then(response => response.json())
//.then(users => console.log(users));

btnOpenUsers.addEventListener('click', function(){
  choiceList.classList.add('show');

  tableUsers.classList.add('show');

  let elUsers = document.querySelector('.js-add-users');

  for (let index = 0; index < users.length; index++) {
    elUsers.innerHTML += 
    `<tr class="js-add-users">
        <td>${users[index].name}</td>
        <td>${users[index].username}</td>
        <td>${users[index].email}</td>
        <td>${users[index].address.street}</td>
        <td>${users[index].address.suite}</td>
        <td>${users[index].address.city}</td>
        <td>${users[index].address.zipcode}</td>
        <td>${users[index].address.geo.lat}</td>
        <td>${users[index].address.geo.lng}</td>
    </tr>`
  };
});