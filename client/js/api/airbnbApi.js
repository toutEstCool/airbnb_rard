export const getAllData = async (point) => {
  try {
  const response = await fetch(`http://localhost:3000/api/${point}`, {
    method: 'GET'
  })
  const result = await response.json()
  return result;
  } catch (error) {
    console.log(error);
  }
}
export const sendData = async (data, method, point, id = null) => {
  try {
    await fetch(`http://localhost:3000/api/${point}/${method == 'POST' ? '' : id}`, {
    method,
    body: JSON.stringify(data)
  })
  } catch (error) {
    console.log(error);
  }
} 
export const deleteData = async (point, id) => {
  try {
    await fetch(`http://localhost:3000/api/${point}/${id}`, {
      method: 'DELETE'
    })
  } catch (error) {
    console.log(error);
  }
}

export const findHouse = async (value) => {
  try {
    const response = await fetch(`http://localhost:3000/api/house?search=${value}`, {
      method: 'GET'
    })
    const result = await response.json()
    return result;
  } catch (error) {
    console.log(error);
  }
}








