const URL = 'http://localhost:3000/api/house'

export const getAllHouse = async () => {
  const response = await fetch(URL, {
    method: 'GET'
  })
  const result = await response.json()
  return result;
}

export const postHouse = async (data) => {
    const response = await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    const result = await response.json()
    return result;
}


