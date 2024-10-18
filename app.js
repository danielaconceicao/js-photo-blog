axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response => {
    console.log(response);
    

}).catch(err => console.error(err));