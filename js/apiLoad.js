// let response = fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
//     {
//         method: "GET",
//         headers: {
//             "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
//         }
//     })

// let result = response.json()

// // let movieName = result.films[0].nameRu

// console.log(result)


// const apiLoad = window.onload = () => {

//     const wrapper = document.querySelector('.movies__wrapper');

// const cardHTML = `<div class="movies__movie-card movie-card" data-id="${item.filmId}">
//             <div class="movie-card__img-block">
//                 <img class="movie-card__img" src="${item.posterUrlPreview}" alt="${item.nameRu}" >
//             </div>
//             <h2 class="movie-card__title">${item.nameRu}</h2>
//             <h2 class="movie-card__genre">${item.genres[0, 1, 2, 3]}</h2>
//         </div>`
// wrapper.insertAdjacentHTML('beforeEnd', cardHTML)



// }



const apiLoad = document.querySelector('.movies__wrapper');


getProducts();  // Запускаем getProducts


async function getProducts() {   // Асинхронная функция получения данных из файла products.json

    const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1',
        {
            method: "GET",
            headers: {
                "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
            }
        });  // Получаем данные из products.json

    const result = await response.json();   // Парсим данные из JSON формата в JS

    console.log(result.films[0].nameRu)

    renderProducts(productsArray);   // Запускаем ф-ю рендера (отображения товаров)

}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="movies__movie-card movie-card" data-id="${item.filmId}">
                                <div class="movie-card__img-block">
                                    <img class="movie-card__img" src="${item.posterUrlPreview}" alt="${item.nameRu}">
                                </div>
                                <h2 class="movie-card__title">${item.nameRu}</h2>
                                <h2 class="movie-card__genre">${item.genres[0, 1, 2, 3]}</h2>
                            </div>`
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}



export default apiLoad

