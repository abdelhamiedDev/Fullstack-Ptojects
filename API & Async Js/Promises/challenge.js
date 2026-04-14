function preLoadImage(url){
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.alt = "random view"
        
        img.addEventListener("load", () => resolve(img))
        img.addEventListener("error", () => reject('Failed to load image'))
        
        img.src = url
    })

}


try{    
    const img = await preLoadImage('https://scrimba.ams3.cdn.digitaloceanspaces.com/assets/courses/gadvancedjs/scenic1.jpg')
    console.log(img)
    document.body.appendChild(img)
} catch (error) {
    console.error(error)
}
