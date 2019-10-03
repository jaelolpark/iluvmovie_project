const IMDB = `https://api.themoviedb.org/3/movie`
const IMDB_KEY = `a4c9d9048cf23a4049939500ec5adc03`


export const getMovie = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/users`, {
      method: "GET",
   }).then(res => res.json())
  } 
}

export const moreMovie = () => {
  return dispatch => {
    return fetch(`http://localhost:3000/users`, {
      method: "GET",
   }).then(res => res.json())
  } 
}


export const getMovies = () => {
  return fetch(`${GB_BASE}/movies/all/0/56`, {
     method: "GET"
  }).then(res => res.json())
} 

export const getMoreMovies = (start) => {
  return fetch(`${GB_BASE}/movies/all/${start}/56`, {
     method: "GET"
  }).then(res => res.json())
}
