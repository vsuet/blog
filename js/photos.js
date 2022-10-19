const btnOpenPhotos = document.querySelector('.js-btn-photos'),
choiceList = document.querySelector('.choice-list-h2');

const tablePhotos = document.querySelector('.table-photos');

btnOpenPhotos.addEventListener('click', function(){
    choiceList.classList.add('show');

    tablePhotos.classList.add('show');
  
    let elPhotos = document.querySelector('.js-photos');
  
    for (let index = 0; index < photos.length; index++) {
        elPhotos.innerHTML += 
            `<div class="js-photos">
                <div class="together">
                    <img src="${photos[index].thumbnailUrl}" alt="" class="url">
                    <p class="title">${photos[index].title}</p>
                </div>
                <p class="id">id:${photos[index].id}</p>
                <hr>
            </div>`
    }
  });