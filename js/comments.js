const btnOpenPosts = document.querySelector('.js-btn-comments'),
choiceList = document.querySelector('.choice-list-h2');

const tablePosts = document.querySelector('.table-comments');

btnOpenPosts.addEventListener('click', function(){
    choiceList.classList.add('show');
    
    tablePosts.classList.add('show');
  
    let elPosts = document.querySelector('.js-comments');
  
    for (let index = 0; index < posts.length; index++) {
        elPosts.innerHTML += 
        `<div class="js-comments">
            <h2>${comments[index].name}</h2>
            <p class="body">${comments[index].body}</p>
            <p class="email">${comments[index].email}</p>
            <hr>
        </div>`
    };
  });