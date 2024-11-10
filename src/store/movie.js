import { Store } from "../core/jsu";

const store = new Store({
    searchText: '',
    page: 1,
    pageMax:1,
    movies: [],
    movie: {},
    loading:false,
    message:'영화의 제목을 입력해주세요!'
})

export default store 
export const searchMovies = async page => {
  store.state.page = page
  store.state.loading = true 
  if (page === 1) {
    store.state.movies = []
    store.state.message =''
  }
 
  try{
    const res = await  fetch(`https://omdbapi.com?apikey=33e636d0&s=${store.state.searchText}&page=${page}`)
    const { Search, totalResults, Response, Error } = await res.json()
    if(Response === 'True'){
          store.state.movies = [
            ...store.state.movies, 
            ...Search
          ]
          store.state.pageMax = Math.ceil(Number(totalResults) / 10)
    } else {
      store.state.message = Error
      store.state.pageMax = 1
    } 
  } catch(error) {
      console.log('searchMovies error',error)
  } finally {
      store.state.loading = false 
  }
}

export const getMovieDetails = async id => {
   try{
        const res = await fetch(`http://omdbapi.com?apikey=33e636d0&i=${id}&plot=full`)
        store.state.movie = await res.json()
   }catch(error){
      console.log('getMovieDetails error:', error)
   }
}