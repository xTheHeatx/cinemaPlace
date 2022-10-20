



getMovie();  // Запускаем getProducts


async function getMovie() {   // Асинхронная функция получения данных из файла products.json

    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
        {
            method: "GET",
            headers: {
                "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
            }
        });  // Получаем данные из products.json

    const result = await response.json();   // Парсим данные из JSON формата в JS


    renderCards(result);   // Запускаем ф-ю рендера (отображения товаров)

}

function renderCards(data) {
    const wrapper = document.querySelector('.movies__wrapper');

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





