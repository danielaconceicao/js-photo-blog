const posts = document.querySelector('.posts')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        let imgs = response.data;
        /* console.log(imgs); */

        generetMarkup(imgs);

    }).catch(err => console.error(err));


function generetMarkup(imgs) {
    imgs.forEach(img => {
        const markup =
            `
            <div class="post mx-3 col-sm-12 col-md-6 col-lg-4">
                <div class="post-image">
                    <img src="${img.url}" width="270px">
                </div>
                <p>${img.title[0].toUpperCase() + img.title.slice(1)}</p>
                <div class="point"></div>

                <div class="overlay">
                <div class="post mx-3 col-sm-12 col-md-6 col-lg-4 aparecer">
                    <div class="post-image">
                        <img src="${img.url}" width="270px">
                    </div>
                    <p>${img.title[0].toUpperCase() + img.title.slice(1)}</p>
                </div>
            </div>
            </div>
        `;
        posts.insertAdjacentHTML('afterbegin', markup);
    });
    overlay()

}

function overlay(){
     /* seleziono tutte le card dal dom */
    const allPostElement = document.querySelectorAll('.post');
    /* console.log(allPostElement); */ 

    /* scorro tra le card selezionate e associo a ciascuna un event listener */
    allPostElement.forEach(post => {
        post.addEventListener('click', function() {
            overlayOnOff(post);
        });
    });
}

function overlayOnOff(post){
    const element = post.querySelector(".overlay");
    if(element.style.display === 'block'){
        element.style.display = 'none';
    }else{
        element.style.display = 'block';
    }
}


