const baseUrl = process.env.NODE_ENV === 'production' ? 'https://random-quest.herokuapp.com/' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})