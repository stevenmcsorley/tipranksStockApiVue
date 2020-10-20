import axios from 'axios'

const baseURL = 'https://react-news.melodicmonkey.a2hosted.com'

export default axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
