export const post = (url, body) => {
  return fetch(
    import.meta.env.DEV
      ? `http://localhost:3000/api/${url}`
      : `https://thawing-ravine-54889.herokuapp.com/api/${url}`,
    {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`

      },
      body: JSON.stringify(body)
    }
  )
}

export const get = (url, param) => {
  return fetch(
    import.meta.env.DEV
      ? `http://localhost:3000/api/${url}`
      : `https://thawing-ravine-54889.herokuapp.com/api/${url}`,
    {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`

      },
    }
  )
}
