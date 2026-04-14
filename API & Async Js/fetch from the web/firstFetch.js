fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
        const img = document.querySelector(".rand-img");
        img.src = data.message;
        img.alt = "A random dog"
    })