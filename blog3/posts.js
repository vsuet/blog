fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=>{
       return Response.json();
    })
    .then(data =>{
        data.forEach(posts=>{
          const markup=`<li>${posts.title}</li><hr>`;

          document.querySelector('.title').insertAdjacentHTML('beforeend', markup)
        }); 
        data.forEach(posts=>{
          const markup=`<li>${posts.body}</li><hr>`;

          document.querySelector('.body').insertAdjacentHTML('beforeend', markup)
        }); 
    })
    .catch(Error=> console.log(Error));
