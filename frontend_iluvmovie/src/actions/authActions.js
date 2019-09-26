
export const createUser = user => {
  return dispatch => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({user})
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        if (data.message) {

        }
        else {
          localStorage.setItem("token", data.jwt)
          dispatch(loginUser(data.user))
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
      .then(resp => resp.json())
  }
}



  export const loginUser = userObj => ({
    type: 'LOGIN_USER',
    payload: userObj
  })


  export const logoutUser = () => ({
    type: 'LOGOUT_USER'
})
