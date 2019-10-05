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
    .then(res => {
      if (res.user && res.jwt) {
        localStorage.setItem('token', res.jwt)
        dispatch({ type: 'LOGIN_USER', payload: res.user })
      } else {
        alert("Sorry, username has already been taken")
      }
    })
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
      } else {
        alert("Invalid Sign In!")
      }
    })
  }
}

