let url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'


fetch(url, {
    method: "GET",
    headers: {
        "X-API-KEY": "8c8e1a50-6322-4135-8875-5d40a5420d86"
    }

})


const apiLoad = window.onload = function cardInsert() {
    const wrapper = document.querySelector('.movies__wrapper');
    wrapper.insertAdjacentHTML('beforeEnd', `<div class="movies__movie-card movie-card">
    <div class="movie-card__img-block">
        <img src="" alt="" class="">
    </div>
    <h2 class="movie-card__title">TITLE TITLE TITLE TITLE</h2>
    <h2 class="movie-card__genre">GENRE GENRE GENRE GENRE</h2>
</div>`)

    console.log(wrapper)
}





export default apiLoad

