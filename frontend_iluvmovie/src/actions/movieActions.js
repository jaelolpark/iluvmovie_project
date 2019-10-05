const GB_KEY = `5abc9711d6db541afe5eb256523bfbc6679dfce4`
const GB = `https://api-public.guidebox.com/v2/us/${GB_KEY}`

// const IMDB_KEY = `a4c9d9048cf23a4049939500ec5adc03`
// const IMDB = `https://api.themoviedb.org/3/movie`


export const getMovie = () => {
  return dispatch => {
  	fetch(`${GB}/movies/all/0/50`)
  	.then(res => res.json())
  	.then(res => {
  		if (res.results)
  			dispatch({ type: "Display_Movies", data: res.results })
  	})
  } 
}

export const moreMovie = (more) => {
  return dispatch => {
    return fetch(`${GB}/movies/all/${more}/50`, {
      method: "GET",
   }).then(res => res.json())
  } 
}
