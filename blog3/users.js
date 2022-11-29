fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>{
       return Response.json();
    })
    .then(data =>{
        data.forEach(user=>{
          const markup=`<li>${user.name}</li><hr>`;

          document.querySelector('.user').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.username}</li><hr>`;

          document.querySelector('.username').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.email}</li><hr>`;

          document.querySelector('.email').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.address.street}</li><hr>`;

          document.querySelector('.address').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.address.suite}</li><hr>`;

          document.querySelector('.address-1').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.address.city}</li><hr>`;

          document.querySelector('.address-3').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.address.zipcode}</li><hr>`;

          document.querySelector('.address-4').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.address.geo.lat}</li><hr>`;

          document.querySelector('.address-5').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.address.geo.lng}</li><hr>`;

          document.querySelector('.address-6').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.phone}</li><hr>`;

          document.querySelector('.phone').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.website}</li><hr>`;

          document.querySelector('.website').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.company.name}</li><hr>`;

          document.querySelector('.company').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.company.catchPhrase}</li><hr>`;

          document.querySelector('.company-1').insertAdjacentHTML('beforeend', markup)
        });
        data.forEach(user=>{
          const markup=`<li>${user.company.bs}</li><hr>`;

          document.querySelector('.company-2').insertAdjacentHTML('beforeend', markup)
        });
    })
    .catch(Error=> console.log(Error));
