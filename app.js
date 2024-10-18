const posts = document.querySelector('.posts')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
    .then(response => {
        let imgs = response.data;

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
            </div>
        `;
        posts.insertAdjacentHTML('afterbegin', markup)
    });

}
