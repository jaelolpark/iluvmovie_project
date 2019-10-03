let initialState = {
  Movies: []
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'Display_Movies':
      return {...state, Movies: action.data }

    case 'Display_More_Movies':
      return {...state, Movies: [...state.Movies, ...action.data]}
    
    default: { return initialState; }
  }
}