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
            address.innerHTML = `Улица: ${user.address.street}<br> 
                                 Дом: ${user.address.suite}<br> 
                                 Город: ${user.address.city}<br> 
                                 Почтовый индекс: ${user.address.zipcode}<br> 
                                 Широта: ${user.address.geo.lat}<br> 
                                 Долгота: ${user.address.geo.lng}`
            phone.innerText = user.phone
            website.innerText = user.website
            company.innerHTML = `Название: ${user.company.name}<br> 
                                 Описание: ${user.company.catchPhrase}<br> 
                                 Вид деятельности: ${user.company.bs}`
        }
    }))