const btnOpenPosts = document.querySelector('.js-btn-posts'),
choiceList = document.querySelector('.choice-list-h2');

const tablePosts = document.querySelector('.table-posts');

btnOpenPosts.addEventListener('click', function(){
    choiceList.classList.add('show');

    tablePosts.classList.add('show');
  
    let elPosts = document.querySelector('.js-posts');
  
    for (let index = 0; index < posts.length; index++) {
        elPosts.innerHTML += 
        `<div class="js-posts">
            <h2>${posts[index].title}</h2>
            <p class="body">${posts[index].body}</p>
            <p class="id">id:${posts[index].id}</p>
            <hr>
        </div>`
    };
  });