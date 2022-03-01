import { api } from './apiconfig.js'

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', {authentication: loginData})
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`

  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', {user: registerData})
  localStorage.setItem('authToken', resp.data.token)
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken')
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify')
    return resp.data
  }
  return false
}

export const getAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

export const getOneUserPosts = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/posts`)
  return resp.data
}
export const getUserFriends = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/friends`)
  return resp.data
}
export const updateFriends = async (user_id, updateData) => {
  const resp = await api.put(`/users/${user_id}/friends/add`, {friendsList: {...updateData}[0]})
  console.log(updateData,resp)
  return resp.data
}
export const getOneUserComments = async (user_id) => {
  const resp = await api.get(`/users/${user_id}/comments`)
  return resp.data
}

export const updateUser = async (user_id, updateData) => {
  const resp = await api.put(`/users/${user_id}`, {user: updateData})
  return resp.data
}

export const deleteUser = async (user_id) => {
  const resp = await api.delete(`/users/${user_id}`)
  return resp.data
}