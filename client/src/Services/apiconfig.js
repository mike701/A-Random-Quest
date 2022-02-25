import axios from 'axios'

// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://random-quest.herokuapp.com/' : 'http://localhost:3000' 
const baseUrl = 'https://random-quest.herokuapp.com/';
export const api = axios.create({
  baseURL: baseUrl
})