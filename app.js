const posts = document.querySelector('.posts')

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response => {
    console.log(response);
    let imgs = response.data;
    console.log(imgs);


    imgs.forEach(img => {
        const markup = 
        `
            <div class="post mx-3 col-sm-12 col-md-6 col-lg-4">
                <div class="post-image">
                    <img src="${img.url}" width="270px">
                </div>
                <p>${img.title}</p>
                <div class="point"></div>
            </div>
        `;
    console.log(markup);
    posts.insertAdjacentHTML('afterbegin', markup)
    });

}).catch(err => console.error(err));
