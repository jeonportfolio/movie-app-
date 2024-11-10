import { createRouter } from "../core/jsu"; 
import Home from "./Home";
import Movie from "./Movie"

export default createRouter([
    { path: '#/', component: Home },
    { path: '#/movie', component: Movie }
])