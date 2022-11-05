const userName = document.getElementById('user-name')
const name = document.getElementById('name')
const email = document.getElementById('email')
const address = document.getElementById('address')
const phone = document.getElementById('phone')
const website = document.getElementById('website')
const company = document.getElementById('company')

let params = (new URL(document.location)).searchParams
let uid = params.get("id")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usersListArr => usersListArr.forEach(user => {
        if (user.id == uid) {
            userName.innerText = user.username
            name.innerText = user.name
            email.innerText = user.email
            address.innerHTML = `Улица <i>${user.address.street}</i><br> 
                                 Дом <i>${user.address.suite}</i><br> 
                                 Город <i>${user.address.city}</i><br> 
                                 Почтовый индекс <i>${user.address.zipcode}</i><br> 
                                 Широта <i>${user.address.geo.lat}</i><br> 
                                 Долгота <i>${user.address.geo.lng}</i>`
            phone.innerText = user.phone
            website.innerText = user.website
            company.innerHTML = `Название <i>${user.company.name}</i><br> 
                                 Описание <i>${user.company.catchPhrase}</i><br> 
                                 Вид деятельности <i>${user.company.bs}</i>`
        }
    }))

