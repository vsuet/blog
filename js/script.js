

async function albumPage() {
    const id = url.searchParams.get("id")
    if (!id) {
        noInfoPage("альбома")
    } else {
        try {
            const album = await api("albums", id)
            const photos = await api("photos", `?albumId=${id}`)
            if (!album.title) return noInfoPage("Альбом", id)
            setTitle(album.title)
            body(`
                <section class="mini-header">
                    <h1>Информация об альбоме</h1>
                    <p>${album.title}</p>
                    <a href="index.html?section=user&id=${album.userId}"><b>Вернуться к пользователю</b></a>
                </section>
                <section class="photos">
                    ${photos.map(photo => `
                        <div class="card">
                            <img src="${photo.thumbnailUrl}" alt="Фото" width="150">
                            <p>${photo.title}</p>
                        </div>
                    `).join("")}
                </section>
                    `)
        } catch {
            noInfoPage("Альбом", id)
        }
    }
}

async function postPage() {
    const id = url.searchParams.get("id")
    if (!id) {
        noInfoPage("поста")
    } else {
        try {
            const post = await api("posts", id)
            const comments = await api("comments", `?postId=${id}`)
            const user = await api("users", post.userId)
            const userPhoto = random(0, 15)
            if (!post.title) return noInfoPage("Пост", id)
            setTitle(post.title)
            body(`
                <section class="mini-header">
                    <h1>Информация о посте</h1>
                    <p>${post.title}</p>
                    <a href="index.html?section=user&id=${post.userId}"><b>Вернуться к пользователю</b></a>
                </section>
                <section class="one-post"><section class="main-post">
                    <div class="post-header">
                        <img src="images/users/user-${userPhoto}.jpg" alt="Фото пользователя" width="80" height="80">
                        <p>${user.name}</p>
                    </div>
                    <div class="post-title">
                        <p>${post.title}</p>
                    </div>
                    <hr>
                    <div class="post-body">
                        <p>${post.body}</p>
                    </div>
                </section>
                <h2>Комментарии:</h2>
                <section class="post-comments">
                        <div class="comments">
                            ${comments.map(comment => `
                                <div class="comment">
                                    <div class="comment-name">
                                        <p>${comment.name}</p>
                                    </div>
                                    <div class="comment-body">
                                        <p>${comment.body}</p>
                                    </div>
                                    <div class="comment-email">
                                        <p>${comment.email}</p>
                                    </div>
                                </div>
                            `).join("")}
                        </div>   
                    </section>
                    </section> 
            `)
        } catch {
            noInfoPage("Пост", id)
        }
    }
}