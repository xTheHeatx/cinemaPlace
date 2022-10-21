
const API_KEY = "8c8e1a50-6322-4135-8875-5d40a5420d86"

const GET_MOVIE_INFO = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'

let SEARCH_API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

getMovie(GET_MOVIE_INFO);




async function getMovie(url) {

    const response = await fetch(url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": API_KEY
            }
        });

    const result = await response.json();


    renderCards(result);   // Запускаем ф-ю рендера (отображения)

}

function renderCards(data) {
    const wrapper = document.querySelector('.movies__wrapper');

    document.querySelector('.movies__wrapper').innerHTML = ""

    data.films.forEach((item) => {
        const card = document.createElement("div")
        card.classList.add("movie-card")

        card.innerHTML = `<div class="movie-card__img-block">
                            <div class="movie-card__rate">${item.rating}</div>
                            <a className="movie-card__film-link" href="${item.posterUrl}">
                                <img class="movie-card__img" src="${item.posterUrlPreview}" alt="${item.nameRu}" style='height: 100%; width: 100%; object-fit: cover'>
                            </a>
                            </div>
                                <div className="movie-card__title-block">
                                    <a className="movie-card__film-link" href="${item.posterUrl}">
                                        <h2 class="movie-card__title">${item.nameRu}</h2>
                                    </a>
                                    <h2 class="movie-card__genre">${item.genres.map(genre => ` ${genre.genre}`)}</h2>
                                </div>`

        wrapper.appendChild(card)
    });
}

const form = document.querySelector('form');
const search = document.querySelector('.header__search');

form.addEventListener('submit', (def) => {
    def.preventDefault()

    const apisearch = `${SEARCH_API_URL}${search.value}`
    if (search.value) {
        getMovie(apisearch)

        search.value = ""
    }
})




