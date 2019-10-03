let initialState = {
  allMovies: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'Display_Movies':
      return {...state, allMovies: action.data }

    case 'Display_More_Movies':
      return {...state, allMovies: [...state.allMovies, ...action.data]}
    
    default: { return initialState; }
  }
}