export const createUser = user => {
  return dispatch => {
    return fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: 'application/json',
     },
     body: JSON.stringify({user})
   }).then(res => res.json())
  } 
}

export const userLoginFetch = user => {
  return dispatch => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(res => {
      if (res.user && res.jwt) {
        localStorage.setItem('token', res.jwt)
        dispatch({ type: 'LOGIN_USER', payload: res.user })
      }
    })
  }
}

export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
