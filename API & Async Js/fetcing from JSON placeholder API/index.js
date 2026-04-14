try{
    const respsone = await fetch('https://apis.scrimba.com/jsonplaceholder/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'My new post',
                body: 'This is the content of my new post.',
                userId: 101
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }
    )
    if (!respsone.ok){
        throw new Error('Network response was not ok')
    }
    const data = await respsone.json()
    console.log(data)
}catch(error){
    console.error('Error fetching data:', error)
}