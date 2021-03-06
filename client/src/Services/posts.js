import { api } from './apiconfig.js'


export const getAllPosts = async () => {
  const resp = await api.get('/posts')
  return resp.data
}

export const createPost = async (postData) => {
  const resp = await api.post('/posts',{post: postData})
  return resp.data
}

export const getOnePost = async (post_id) => {
  const resp = await api.get(`/posts/${post_id}`)
  return resp.data
}

export const updatePost = async (post_id, updateData) => {
  const resp = await api.put(`/posts/${post_id}`, {post: updateData})
  return resp.data
}

export const deletePost = async (post_id) => {
  const resp = await api.delete(`/posts/${post_id}`)
  return resp.data
}