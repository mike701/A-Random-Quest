import { api } from './apiconfig.js'


export const getAllComments = async (post_id) => {
  const resp = await api.get(`/posts/${post_id}/comments`)
  return resp.data
}

export const createComment = async (post_id,commentData) => {
  const resp = await api.post(`/posts/${post_id}/comments`,{comment: commentData})
  return resp.data
}

export const upVoteComment = async (post_id) => {
  const resp = await api.get(`/posts/${post_id}/comments/`)
  return resp.data
}

export const updateComment = async (post_id, comment_id, updateData) => {
  const resp = await api.put(`/posts/${post_id}/comments/${comment_id}`, {comment: updateData})
  return resp.data
}

export const deleteComment = async (post_id,comment_id) => {
  const resp = await api.delete(`/posts/${post_id}/comments/${comment_id}`)
  return resp.data
}