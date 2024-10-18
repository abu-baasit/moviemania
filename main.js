// https://api.themoviedb.org/3/movie/top_rated?api_key=83a797d99c1fa3be5726cb64e8f3935a

// poster_path, original_title
// fetch

const movieCard = document.querySelector(".movie_card")


const fetchMovie = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=571b3b92167c60fc19a4964d1861a52a")
    let result = await response.json()
    result.results.forEach(item => {
        const img = document.createElement('img')
        const p = document.createElement('p')
        const p2 = document.createElement('p')

        p.textContent = item.original_title
        p2.textContent = item.overview
        img.src = `https://image.tmdb.org/t/p/original${item.poster_path}`
       
        movieCard.append(img, p, p2)
        console.log(item)
    })
}

fetchMovie()



