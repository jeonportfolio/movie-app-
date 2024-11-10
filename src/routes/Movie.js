import { Component } from "../core/jsu";
import movieStore, { getMovieDetails } from "../store/movie"

export default class Movie extends Component {
    async render() {
        await getMovieDetails(history.state.id) 
        console.log(movieStore.state.movie)
        const { movie } = movieStore.state

        this.el.classList.add('container', 'the-movie')
        this.el.innerHTML = /* html */`
            <div 
                style="background-image: url(${movie.Poster})" 
                class="poster"
            ></div>
            <div class="specs">
                <div class="title">
                    ${movie.Title}
                </div>
                <div class="labels">
                    <span>${movie.Released}</span>
                    &nbsp;/&nbsp;
                    <span>${movie.Runtime}</span>
                    &nbsp;/&nbsp;
                    <span>${movie.Country}</span>
                </div>
                <div class="plot">
                    ${movie.Plot}
                </div>
                <div>
                    <h3>평점</h3>
                    ${movie.Ratings.map(rating => {
                        return `<p>${rating.Source} - ${rating.Value}</p>`
                    }).join('')}
                </div>
                <div>
                    <h3>배우</h3>
                    <p>${movie.Actors}</P>
                </div>
                <div>
                    <h3>감독</h3>
                    <p>${movie.Director}</P>
                </div>
                <div>
                    <h3>프로덕션</h3>
                    <p>${movie.Production}</P>
                </div>
                <div>
                    <h3>장르</h3>
                    <p>${movie.Genre}</P>
                </div>
            </div> 
        `

    }
}