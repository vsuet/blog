fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
.then(Response=>{
   return Response.json();
})
.then(data =>{
    data.forEach(comments=>{
      const markup=`<li>${comments.name}</li><hr>`;

      document.querySelector('.name').insertAdjacentHTML('beforeend', markup)
    });
    data.forEach(comments=>{
      const markup=`<li>${comments.email}</li><hr>`;

      document.querySelector('.email').insertAdjacentHTML('beforeend', markup)
    });
    data.forEach(comments=>{
      const markup=`<li>${comments.body}</li><hr>`;

      document.querySelector('.body').insertAdjacentHTML('beforeend', markup)
    });
})
.catch(Error=> console.log(Error));
