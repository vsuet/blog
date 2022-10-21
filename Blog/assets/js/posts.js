document.addEventListener("DOMContentLoaded", function(event) {
    getPosts();
});

async function getPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    let response = await fetch(url);

    if (response.ok) {
        let posts = await response.json();
        showPosts(posts);
    } else {
        console.debug(response.status);
        showFail();
    }
}

function showPosts(posts)
{
    console.debug(posts);
    console.log('show posts')


    const postsBlock = document.getElementById('posts');
    posts.forEach((post, index) => {
        if (index <= 10) {
            console.log(index)
            let div = document.createElement("div");
            let h2 = document.createElement("h2");
            div.classList = 'post-item';
            h2.classList = 'post-title';
            div.append(h2);
            h2.append(post.title);
            div.append(post.body);
            postsBlock.append(div);
            console.log(post);
        }
    });
}

function showFail() {
    alert('Ошибка при получении информации');
    console.log('show fail');
    // Не удалось получить информацию, пожалуйста, зайдите позже
}